const getEnvironmentVariable = (environmentVariable: string): string => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable];
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariable}`
    );
  } else {
    return unvalidatedEnvironmentVariable;
  }
};

export const config = {
  spaceId: getEnvironmentVariable("CONTNETFUL_SPACE_ID"),
  apiKey: getEnvironmentVariable("CONTNETFUL_ACCESS_KEY"),
  pipeDreamURL: getEnvironmentVariable("PIPEDREAM_API_ENDPOINT"),
};
