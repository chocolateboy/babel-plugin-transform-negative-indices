const test          = require('ava')
const Fs            = require('fs')
const Path          = require('path')
const Prettier      = require('prettier')
const { transform } = require('@babel/core')

const fixtures = Path.join(__dirname, 'fixtures')
const pluginPath = Path.resolve(__dirname, '..')

function normalize (src) {
    return Prettier.format(src.trim(), { parser: 'babel' })
}

for (const filename of Fs.readdirSync(fixtures)) {
    const name = Path.basename(filename)
    const path = Path.resolve(fixtures, filename)

    test(name, t => {
        const input = Fs.readFileSync(path, 'utf8')

        const { code: transpiled } = transform(input, {
            plugins: [pluginPath],
            babelrc: false,
            comments: false,
        })

        const got = normalize(transpiled)

        t.snapshot(got, name)
    })
}
