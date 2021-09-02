window.BENCHMARK_DATA = {
  lastUpdate: 1630597224547,
  repoUrl: 'https://github.com/napi-rs/napi-rs',
  entries: {
    Benchmark: [
      {
        commit: {
          author: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          committer: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          distinct: true,
          id: '8c6c0404e8bcdd50ff4f51b77a882c9ced1496a4',
          message: 'chore: publish\n\n - @napi-rs/cli@1.3.1',
          timestamp: '2021-09-02T23:35:56+08:00',
          tree_id: '4b54675d9097178c6803783c779017ff8b962ab3',
          url: 'https://github.com/napi-rs/napi-rs/commit/8c6c0404e8bcdd50ff4f51b77a882c9ced1496a4',
        },
        date: 1630597223134,
        tool: 'benchmarkjs',
        benches: [
          {
            name: 'noop#napi-rs',
            value: 44552659,
            range: '±0.59%',
            unit: 'ops/sec',
            extra: '88 samples',
          },
          {
            name: 'noop#JavaScript',
            value: 647785734,
            range: '±0.71%',
            unit: 'ops/sec',
            extra: '92 samples',
          },
          {
            name: 'Plus number#napi-rs',
            value: 17514510,
            range: '±0.95%',
            unit: 'ops/sec',
            extra: '92 samples',
          },
          {
            name: 'Plus number#JavaScript',
            value: 645066775,
            range: '±0.54%',
            unit: 'ops/sec',
            extra: '94 samples',
          },
          {
            name: 'Create buffer#napi-rs',
            value: 321063,
            range: '±9.85%',
            unit: 'ops/sec',
            extra: '72 samples',
          },
          {
            name: 'Create buffer#JavaScript',
            value: 1790034,
            range: '±11.59%',
            unit: 'ops/sec',
            extra: '84 samples',
          },
          {
            name: 'createArray#createArrayJson',
            value: 29637,
            range: '±0.7%',
            unit: 'ops/sec',
            extra: '91 samples',
          },
          {
            name: 'createArray#create array for loop',
            value: 6262,
            range: '±1.26%',
            unit: 'ops/sec',
            extra: '89 samples',
          },
          {
            name: 'createArray#create array with serde trait',
            value: 6367,
            range: '±0.83%',
            unit: 'ops/sec',
            extra: '93 samples',
          },
          {
            name: 'getArrayFromJs#get array from json string',
            value: 14743,
            range: '±0.72%',
            unit: 'ops/sec',
            extra: '93 samples',
          },
          {
            name: 'getArrayFromJs#get array from serde',
            value: 8896,
            range: '±1.01%',
            unit: 'ops/sec',
            extra: '93 samples',
          },
          {
            name: 'getArrayFromJs#get array with for loop',
            value: 10877,
            range: '±0.63%',
            unit: 'ops/sec',
            extra: '93 samples',
          },
          {
            name: 'Get Set property#Get Set from native#u32',
            value: 333286,
            range: '±4.93%',
            unit: 'ops/sec',
            extra: '76 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#u32',
            value: 296910,
            range: '±5.36%',
            unit: 'ops/sec',
            extra: '78 samples',
          },
          {
            name: 'Get Set property#Get Set from native#string',
            value: 303452,
            range: '±5.23%',
            unit: 'ops/sec',
            extra: '77 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#string',
            value: 276405,
            range: '±5.24%',
            unit: 'ops/sec',
            extra: '75 samples',
          },
          {
            name: 'Async task#spawn task',
            value: 37526,
            range: '±3.49%',
            unit: 'ops/sec',
            extra: '71 samples',
          },
          {
            name: 'Async task#ThreadSafeFunction',
            value: 506,
            range: '±3.29%',
            unit: 'ops/sec',
            extra: '45 samples',
          },
          {
            name: 'Async task#Tokio future to Promise',
            value: 24364,
            range: '±2.62%',
            unit: 'ops/sec',
            extra: '61 samples',
          },
          {
            name: 'Query#query * 100',
            value: 1738,
            range: '±2.53%',
            unit: 'ops/sec',
            extra: '84 samples',
          },
          {
            name: 'Query#query * 1',
            value: 27280,
            range: '±2.99%',
            unit: 'ops/sec',
            extra: '80 samples',
          },
        ],
      },
    ],
  },
}
