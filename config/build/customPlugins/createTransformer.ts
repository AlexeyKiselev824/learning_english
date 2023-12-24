import ts from 'typescript';

export function createTransformer(options: { props: string[] }): ts.TransformerFactory<ts.SourceFile> {
    return (context: ts.TransformationContext) => {
        return (sourceFile: ts.SourceFile): ts.SourceFile => {
            function visit(node: ts.Node): ts.VisitResult<ts.Node> {
                // Проверка, что узел является JSX атрибутом и его имя является идентификатором, который включен в список удаляемых атрибутов
                if (ts.isJsxAttribute(node) && ts.isIdentifier(node.name) && options.props.includes(node.name.text)) {
                    return undefined; // Удаляем атрибут
                }
                return ts.visitEachChild(node, visit, context); // Продолжаем обход детей узла
            }

            // Применяем функцию visit к корневому узлу файла
            const visited = ts.visitNode(sourceFile, visit);
            return visited as ts.SourceFile; // Приведение к типу ts.SourceFile
        };
    };
}
