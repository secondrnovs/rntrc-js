import typescript from '@rollup/plugin-typescript'

export default {
    input: 'src/index.ts',
    output: [
        { file: 'dist/index.js', format: 'es' },
        { file: 'dist/index.cjs', format: 'cjs' },
        { file: 'dist/index.umd.js', format: 'umd', name: 'Rntrc' }
    ],
    plugins: [
        typescript({
            tsconfig: './tsconfig.json',
            declaration: true,
            declarationDir: './dist'
        })
    ]
}
