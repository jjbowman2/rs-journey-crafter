module.exports = (config) => {
    const tsLoader = config.module.rules.find((r) => r.loader.includes("ts-loader"));

    if (tsLoader) {
        tsLoader.options.transpileOnly = false;
        tsLoader.options.getCustomTransformers = (program) => {
            return {
                before: [
                    require("@nestjs/graphql/plugin").before(
                        {
                            // Options: typeFileNameSuffix, introspectComments
                        },
                        program,
                    ),
                ],
            };
        };
    }

    return config;
};
