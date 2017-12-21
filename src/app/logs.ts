export const LOG = {
  json: [
    {
      "time": "2017-12-12 07:33:19,896",
      "method": "POST",
      "url": "http://api.domain.com/search",
      "request": {
        "bar": "foo1"
      },
      "response": {
        "foo": "bar1"
      }
    },
    {
      "time": "2017-12-12 07:33:21,100",
      "method": "POST",
      "url": "http://api.domain.com/write",
      "request": {
        "bar": "foo2"
      },
      "response": {
        "foo": "bar2"
      }
    },
    {
      "time": "2017-12-12 07:33:27,323",
      "method": "GET",
      "url": "http://api.domain.com/read",
      "request": null,
      "response": {
        "foo": "bar3"
      }
    }
  ],
  log: [
    '2017-12-12 00:11:30,963 INFO  [LoggingFilter] 692207 * Server in-bound request',
    '2017-12-12 00:11:30,963 INFO  [LoggingFilter] 692207 * Server in-bound request',
    '2017-12-12 00:11:30,963 INFO  [LoggingFilter] 692207 * Server in-bound request',
    '2017-12-12 00:11:30,963 INFO  [LoggingFilter] 692207 * Server in-bound request',
    '2017-12-12 00:11:30,963 INFO  [LoggingFilter] 692207 * Server in-bound request'
  ].join('\n')
}
