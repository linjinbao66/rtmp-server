const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 8080,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
  },
  http: {
    port: 80,
    allow_origin: '*',
  },
};

const nms = new NodeMediaServer(config);

nms.on('prePublish', (id, streamPath, args) => {
  console.log('[NodeEvent on prePublish]', `id=${id} streamPath=${streamPath} args=${JSON.stringify(args)}`);
  // 在这里你可以执行预发布操作
});

nms.on('donePublish', (id, streamPath, args) => {
  console.log('[NodeEvent on donePublish]', `id=${id} streamPath=${streamPath} args=${JSON.stringify(args)}`);
  // 在这里你可以执行完成发布操作
});

nms.run();
