import compiler from './compiler.js';

test('JavaScript keyWords replace', async () => {
  const stats = await compiler();
  const output = stats.toJson().modules[0].source;

  console.log(output)
});