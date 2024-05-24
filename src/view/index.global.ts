"use strict";
export default OtterChart = () => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __pow = Math.pow;
  var __commonJS = (cb, mod) =>
    function __require() {
      return (
        mod ||
          (0, cb[__getOwnPropNames(cb)[0]])(
            (mod = { exports: {} }).exports,
            mod
          ),
        mod.exports
      );
    };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if ((from && typeof from === "object") || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
            get: () => from[key],
            enumerable:
              !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
          });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (
    (target = mod != null ? __create(__getProtoOf(mod)) : {}),
    __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule
        ? __defProp(target, "default", { value: mod, enumerable: true })
        : target,
      mod
    )
  );
  var __toCommonJS = (mod) =>
    __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/.pnpm/papaparse@5.4.1/node_modules/papaparse/papaparse.min.js
  var require_papaparse_min = __commonJS({
    "node_modules/.pnpm/papaparse@5.4.1/node_modules/papaparse/papaparse.min.js"(
      exports,
      module
    ) {
      "use strict";
      !(function (e2, t) {
        "function" == typeof define && define.amd
          ? define([], t)
          : "object" == typeof module && "undefined" != typeof exports
          ? (module.exports = t())
          : (e2.Papa = t());
      })(exports, function s() {
        "use strict";
        var f2 =
          "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : void 0 !== f2
            ? f2
            : {};
        var n = !f2.document && !!f2.postMessage,
          o2 = f2.IS_PAPA_WORKER || false,
          a2 = {},
          u2 = 0,
          b2 = {
            parse: function (e2, t) {
              var r3 = (t = t || {}).dynamicTyping || false;
              J2(r3) && ((t.dynamicTypingFunction = r3), (r3 = {}));
              if (
                ((t.dynamicTyping = r3),
                (t.transform = !!J2(t.transform) && t.transform),
                t.worker && b2.WORKERS_SUPPORTED)
              ) {
                var i = (function () {
                  if (!b2.WORKERS_SUPPORTED) return false;
                  var e3 =
                      ((r4 = f2.URL || f2.webkitURL || null),
                      (i2 = s.toString()),
                      b2.BLOB_URL ||
                        (b2.BLOB_URL = r4.createObjectURL(
                          new Blob(
                            [
                              "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                              "(",
                              i2,
                              ")();",
                            ],
                            { type: "text/javascript" }
                          )
                        ))),
                    t2 = new f2.Worker(e3);
                  var r4, i2;
                  return (t2.onmessage = _2), (t2.id = u2++), (a2[t2.id] = t2);
                })();
                return (
                  (i.userStep = t.step),
                  (i.userChunk = t.chunk),
                  (i.userComplete = t.complete),
                  (i.userError = t.error),
                  (t.step = J2(t.step)),
                  (t.chunk = J2(t.chunk)),
                  (t.complete = J2(t.complete)),
                  (t.error = J2(t.error)),
                  delete t.worker,
                  void i.postMessage({ input: e2, config: t, workerId: i.id })
                );
              }
              var n2 = null;
              b2.NODE_STREAM_INPUT,
                "string" == typeof e2
                  ? ((e2 = (function (e3) {
                      if (65279 === e3.charCodeAt(0)) return e3.slice(1);
                      return e3;
                    })(e2)),
                    (n2 = t.download ? new l2(t) : new p2(t)))
                  : true === e2.readable && J2(e2.read) && J2(e2.on)
                  ? (n2 = new g2(t))
                  : ((f2.File && e2 instanceof File) || e2 instanceof Object) &&
                    (n2 = new c2(t));
              return n2.stream(e2);
            },
            unparse: function (e2, t) {
              var n2 = false,
                _3 = true,
                m3 = ",",
                y3 = "\r\n",
                s2 = '"',
                a3 = s2 + s2,
                r3 = false,
                i = null,
                o3 = false;
              !(function () {
                if ("object" != typeof t) return;
                "string" != typeof t.delimiter ||
                  b2.BAD_DELIMITERS.filter(function (e3) {
                    return -1 !== t.delimiter.indexOf(e3);
                  }).length ||
                  (m3 = t.delimiter);
                ("boolean" == typeof t.quotes ||
                  "function" == typeof t.quotes ||
                  Array.isArray(t.quotes)) &&
                  (n2 = t.quotes);
                ("boolean" != typeof t.skipEmptyLines &&
                  "string" != typeof t.skipEmptyLines) ||
                  (r3 = t.skipEmptyLines);
                "string" == typeof t.newline && (y3 = t.newline);
                "string" == typeof t.quoteChar && (s2 = t.quoteChar);
                "boolean" == typeof t.header && (_3 = t.header);
                if (Array.isArray(t.columns)) {
                  if (0 === t.columns.length)
                    throw new Error("Option columns is empty");
                  i = t.columns;
                }
                void 0 !== t.escapeChar && (a3 = t.escapeChar + s2);
                ("boolean" == typeof t.escapeFormulae ||
                  t.escapeFormulae instanceof RegExp) &&
                  (o3 =
                    t.escapeFormulae instanceof RegExp
                      ? t.escapeFormulae
                      : /^[=+\-@\t\r].*$/);
              })();
              var u3 = new RegExp(Q2(s2), "g");
              "string" == typeof e2 && (e2 = JSON.parse(e2));
              if (Array.isArray(e2)) {
                if (!e2.length || Array.isArray(e2[0])) return h3(null, e2, r3);
                if ("object" == typeof e2[0])
                  return h3(i || Object.keys(e2[0]), e2, r3);
              } else if ("object" == typeof e2)
                return (
                  "string" == typeof e2.data && (e2.data = JSON.parse(e2.data)),
                  Array.isArray(e2.data) &&
                    (e2.fields ||
                      (e2.fields = (e2.meta && e2.meta.fields) || i),
                    e2.fields ||
                      (e2.fields = Array.isArray(e2.data[0])
                        ? e2.fields
                        : "object" == typeof e2.data[0]
                        ? Object.keys(e2.data[0])
                        : []),
                    Array.isArray(e2.data[0]) ||
                      "object" == typeof e2.data[0] ||
                      (e2.data = [e2.data])),
                  h3(e2.fields || [], e2.data || [], r3)
                );
              throw new Error("Unable to serialize unrecognized input");
              function h3(e3, t2, r4) {
                var i2 = "";
                "string" == typeof e3 && (e3 = JSON.parse(e3)),
                  "string" == typeof t2 && (t2 = JSON.parse(t2));
                var n3 = Array.isArray(e3) && 0 < e3.length,
                  s3 = !Array.isArray(t2[0]);
                if (n3 && _3) {
                  for (var a4 = 0; a4 < e3.length; a4++)
                    0 < a4 && (i2 += m3), (i2 += v3(e3[a4], a4));
                  0 < t2.length && (i2 += y3);
                }
                for (var o4 = 0; o4 < t2.length; o4++) {
                  var u4 = n3 ? e3.length : t2[o4].length,
                    h4 = false,
                    f3 = n3
                      ? 0 === Object.keys(t2[o4]).length
                      : 0 === t2[o4].length;
                  if (
                    (r4 &&
                      !n3 &&
                      (h4 =
                        "greedy" === r4
                          ? "" === t2[o4].join("").trim()
                          : 1 === t2[o4].length && 0 === t2[o4][0].length),
                    "greedy" === r4 && n3)
                  ) {
                    for (var d3 = [], l3 = 0; l3 < u4; l3++) {
                      var c3 = s3 ? e3[l3] : l3;
                      d3.push(t2[o4][c3]);
                    }
                    h4 = "" === d3.join("").trim();
                  }
                  if (!h4) {
                    for (var p3 = 0; p3 < u4; p3++) {
                      0 < p3 && !f3 && (i2 += m3);
                      var g3 = n3 && s3 ? e3[p3] : p3;
                      i2 += v3(t2[o4][g3], p3);
                    }
                    o4 < t2.length - 1 &&
                      (!r4 || (0 < u4 && !f3)) &&
                      (i2 += y3);
                  }
                }
                return i2;
              }
              function v3(e3, t2) {
                if (null == e3) return "";
                if (e3.constructor === Date)
                  return JSON.stringify(e3).slice(1, 25);
                var r4 = false;
                o3 &&
                  "string" == typeof e3 &&
                  o3.test(e3) &&
                  ((e3 = "'" + e3), (r4 = true));
                var i2 = e3.toString().replace(u3, a3);
                return (r4 =
                  r4 ||
                  true === n2 ||
                  ("function" == typeof n2 && n2(e3, t2)) ||
                  (Array.isArray(n2) && n2[t2]) ||
                  (function (e4, t3) {
                    for (var r5 = 0; r5 < t3.length; r5++)
                      if (-1 < e4.indexOf(t3[r5])) return true;
                    return false;
                  })(i2, b2.BAD_DELIMITERS) ||
                  -1 < i2.indexOf(m3) ||
                  " " === i2.charAt(0) ||
                  " " === i2.charAt(i2.length - 1))
                  ? s2 + i2 + s2
                  : i2;
              }
            },
          };
        if (
          ((b2.RECORD_SEP = String.fromCharCode(30)),
          (b2.UNIT_SEP = String.fromCharCode(31)),
          (b2.BYTE_ORDER_MARK = "\uFEFF"),
          (b2.BAD_DELIMITERS = ["\r", "\n", '"', b2.BYTE_ORDER_MARK]),
          (b2.WORKERS_SUPPORTED = !n && !!f2.Worker),
          (b2.NODE_STREAM_INPUT = 1),
          (b2.LocalChunkSize = 10485760),
          (b2.RemoteChunkSize = 5242880),
          (b2.DefaultDelimiter = ","),
          (b2.Parser = E2),
          (b2.ParserHandle = r2),
          (b2.NetworkStreamer = l2),
          (b2.FileStreamer = c2),
          (b2.StringStreamer = p2),
          (b2.ReadableStreamStreamer = g2),
          f2.jQuery)
        ) {
          var d2 = f2.jQuery;
          d2.fn.parse = function (o3) {
            var r3 = o3.config || {},
              u3 = [];
            return (
              this.each(function (e3) {
                if (
                  !(
                    "INPUT" === d2(this).prop("tagName").toUpperCase() &&
                    "file" === d2(this).attr("type").toLowerCase() &&
                    f2.FileReader
                  ) ||
                  !this.files ||
                  0 === this.files.length
                )
                  return true;
                for (var t = 0; t < this.files.length; t++)
                  u3.push({
                    file: this.files[t],
                    inputElem: this,
                    instanceConfig: d2.extend({}, r3),
                  });
              }),
              e2(),
              this
            );
            function e2() {
              if (0 !== u3.length) {
                var e3,
                  t,
                  r4,
                  i,
                  n2 = u3[0];
                if (J2(o3.before)) {
                  var s2 = o3.before(n2.file, n2.inputElem);
                  if ("object" == typeof s2) {
                    if ("abort" === s2.action)
                      return (
                        (e3 = "AbortError"),
                        (t = n2.file),
                        (r4 = n2.inputElem),
                        (i = s2.reason),
                        void (J2(o3.error) && o3.error({ name: e3 }, t, r4, i))
                      );
                    if ("skip" === s2.action) return void h3();
                    "object" == typeof s2.config &&
                      (n2.instanceConfig = d2.extend(
                        n2.instanceConfig,
                        s2.config
                      ));
                  } else if ("skip" === s2) return void h3();
                }
                var a3 = n2.instanceConfig.complete;
                (n2.instanceConfig.complete = function (e4) {
                  J2(a3) && a3(e4, n2.file, n2.inputElem), h3();
                }),
                  b2.parse(n2.file, n2.instanceConfig);
              } else J2(o3.complete) && o3.complete();
            }
            function h3() {
              u3.splice(0, 1), e2();
            }
          };
        }
        function h2(e2) {
          (this._handle = null),
            (this._finished = false),
            (this._completed = false),
            (this._halted = false),
            (this._input = null),
            (this._baseIndex = 0),
            (this._partialLine = ""),
            (this._rowCount = 0),
            (this._start = 0),
            (this._nextChunk = null),
            (this.isFirstChunk = true),
            (this._completeResults = { data: [], errors: [], meta: {} }),
            function (e3) {
              var t = w2(e3);
              (t.chunkSize = parseInt(t.chunkSize)),
                e3.step || e3.chunk || (t.chunkSize = null);
              (this._handle = new r2(t)),
                ((this._handle.streamer = this)._config = t);
            }.call(this, e2),
            (this.parseChunk = function (e3, t) {
              if (this.isFirstChunk && J2(this._config.beforeFirstChunk)) {
                var r3 = this._config.beforeFirstChunk(e3);
                void 0 !== r3 && (e3 = r3);
              }
              (this.isFirstChunk = false), (this._halted = false);
              var i = this._partialLine + e3;
              this._partialLine = "";
              var n2 = this._handle.parse(i, this._baseIndex, !this._finished);
              if (!this._handle.paused() && !this._handle.aborted()) {
                var s2 = n2.meta.cursor;
                this._finished ||
                  ((this._partialLine = i.substring(s2 - this._baseIndex)),
                  (this._baseIndex = s2)),
                  n2 && n2.data && (this._rowCount += n2.data.length);
                var a3 =
                  this._finished ||
                  (this._config.preview &&
                    this._rowCount >= this._config.preview);
                if (o2)
                  f2.postMessage({
                    results: n2,
                    workerId: b2.WORKER_ID,
                    finished: a3,
                  });
                else if (J2(this._config.chunk) && !t) {
                  if (
                    (this._config.chunk(n2, this._handle),
                    this._handle.paused() || this._handle.aborted())
                  )
                    return void (this._halted = true);
                  (n2 = void 0), (this._completeResults = void 0);
                }
                return (
                  this._config.step ||
                    this._config.chunk ||
                    ((this._completeResults.data =
                      this._completeResults.data.concat(n2.data)),
                    (this._completeResults.errors =
                      this._completeResults.errors.concat(n2.errors)),
                    (this._completeResults.meta = n2.meta)),
                  this._completed ||
                    !a3 ||
                    !J2(this._config.complete) ||
                    (n2 && n2.meta.aborted) ||
                    (this._config.complete(this._completeResults, this._input),
                    (this._completed = true)),
                  a3 || (n2 && n2.meta.paused) || this._nextChunk(),
                  n2
                );
              }
              this._halted = true;
            }),
            (this._sendError = function (e3) {
              J2(this._config.error)
                ? this._config.error(e3)
                : o2 &&
                  this._config.error &&
                  f2.postMessage({
                    workerId: b2.WORKER_ID,
                    error: e3,
                    finished: false,
                  });
            });
        }
        function l2(e2) {
          var i;
          (e2 = e2 || {}).chunkSize || (e2.chunkSize = b2.RemoteChunkSize),
            h2.call(this, e2),
            (this._nextChunk = n
              ? function () {
                  this._readChunk(), this._chunkLoaded();
                }
              : function () {
                  this._readChunk();
                }),
            (this.stream = function (e3) {
              (this._input = e3), this._nextChunk();
            }),
            (this._readChunk = function () {
              if (this._finished) this._chunkLoaded();
              else {
                if (
                  ((i = new XMLHttpRequest()),
                  this._config.withCredentials &&
                    (i.withCredentials = this._config.withCredentials),
                  n ||
                    ((i.onload = v2(this._chunkLoaded, this)),
                    (i.onerror = v2(this._chunkError, this))),
                  i.open(
                    this._config.downloadRequestBody ? "POST" : "GET",
                    this._input,
                    !n
                  ),
                  this._config.downloadRequestHeaders)
                ) {
                  var e3 = this._config.downloadRequestHeaders;
                  for (var t in e3) i.setRequestHeader(t, e3[t]);
                }
                if (this._config.chunkSize) {
                  var r3 = this._start + this._config.chunkSize - 1;
                  i.setRequestHeader(
                    "Range",
                    "bytes=" + this._start + "-" + r3
                  );
                }
                try {
                  i.send(this._config.downloadRequestBody);
                } catch (e4) {
                  this._chunkError(e4.message);
                }
                n && 0 === i.status && this._chunkError();
              }
            }),
            (this._chunkLoaded = function () {
              4 === i.readyState &&
                (i.status < 200 || 400 <= i.status
                  ? this._chunkError()
                  : ((this._start += this._config.chunkSize
                      ? this._config.chunkSize
                      : i.responseText.length),
                    (this._finished =
                      !this._config.chunkSize ||
                      this._start >=
                        (function (e3) {
                          var t = e3.getResponseHeader("Content-Range");
                          if (null === t) return -1;
                          return parseInt(t.substring(t.lastIndexOf("/") + 1));
                        })(i)),
                    this.parseChunk(i.responseText)));
            }),
            (this._chunkError = function (e3) {
              var t = i.statusText || e3;
              this._sendError(new Error(t));
            });
        }
        function c2(e2) {
          var i, n2;
          (e2 = e2 || {}).chunkSize || (e2.chunkSize = b2.LocalChunkSize),
            h2.call(this, e2);
          var s2 = "undefined" != typeof FileReader;
          (this.stream = function (e3) {
            (this._input = e3),
              (n2 = e3.slice || e3.webkitSlice || e3.mozSlice),
              s2
                ? (((i = new FileReader()).onload = v2(
                    this._chunkLoaded,
                    this
                  )),
                  (i.onerror = v2(this._chunkError, this)))
                : (i = new FileReaderSync()),
              this._nextChunk();
          }),
            (this._nextChunk = function () {
              this._finished ||
                (this._config.preview &&
                  !(this._rowCount < this._config.preview)) ||
                this._readChunk();
            }),
            (this._readChunk = function () {
              var e3 = this._input;
              if (this._config.chunkSize) {
                var t = Math.min(
                  this._start + this._config.chunkSize,
                  this._input.size
                );
                e3 = n2.call(e3, this._start, t);
              }
              var r3 = i.readAsText(e3, this._config.encoding);
              s2 || this._chunkLoaded({ target: { result: r3 } });
            }),
            (this._chunkLoaded = function (e3) {
              (this._start += this._config.chunkSize),
                (this._finished =
                  !this._config.chunkSize || this._start >= this._input.size),
                this.parseChunk(e3.target.result);
            }),
            (this._chunkError = function () {
              this._sendError(i.error);
            });
        }
        function p2(e2) {
          var r3;
          h2.call(this, (e2 = e2 || {})),
            (this.stream = function (e3) {
              return (r3 = e3), this._nextChunk();
            }),
            (this._nextChunk = function () {
              if (!this._finished) {
                var e3,
                  t = this._config.chunkSize;
                return (
                  t
                    ? ((e3 = r3.substring(0, t)), (r3 = r3.substring(t)))
                    : ((e3 = r3), (r3 = "")),
                  (this._finished = !r3),
                  this.parseChunk(e3)
                );
              }
            });
        }
        function g2(e2) {
          h2.call(this, (e2 = e2 || {}));
          var t = [],
            r3 = true,
            i = false;
          (this.pause = function () {
            h2.prototype.pause.apply(this, arguments), this._input.pause();
          }),
            (this.resume = function () {
              h2.prototype.resume.apply(this, arguments), this._input.resume();
            }),
            (this.stream = function (e3) {
              (this._input = e3),
                this._input.on("data", this._streamData),
                this._input.on("end", this._streamEnd),
                this._input.on("error", this._streamError);
            }),
            (this._checkIsFinished = function () {
              i && 1 === t.length && (this._finished = true);
            }),
            (this._nextChunk = function () {
              this._checkIsFinished(),
                t.length ? this.parseChunk(t.shift()) : (r3 = true);
            }),
            (this._streamData = v2(function (e3) {
              try {
                t.push(
                  "string" == typeof e3
                    ? e3
                    : e3.toString(this._config.encoding)
                ),
                  r3 &&
                    ((r3 = false),
                    this._checkIsFinished(),
                    this.parseChunk(t.shift()));
              } catch (e4) {
                this._streamError(e4);
              }
            }, this)),
            (this._streamError = v2(function (e3) {
              this._streamCleanUp(), this._sendError(e3);
            }, this)),
            (this._streamEnd = v2(function () {
              this._streamCleanUp(), (i = true), this._streamData("");
            }, this)),
            (this._streamCleanUp = v2(function () {
              this._input.removeListener("data", this._streamData),
                this._input.removeListener("end", this._streamEnd),
                this._input.removeListener("error", this._streamError);
            }, this));
        }
        function r2(m3) {
          var a3,
            o3,
            u3,
            i = Math.pow(2, 53),
            n2 = -i,
            s2 = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
            h3 =
              /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
            t = this,
            r3 = 0,
            f3 = 0,
            d3 = false,
            e2 = false,
            l3 = [],
            c3 = { data: [], errors: [], meta: {} };
          if (J2(m3.step)) {
            var p3 = m3.step;
            m3.step = function (e3) {
              if (((c3 = e3), _3())) g3();
              else {
                if ((g3(), 0 === c3.data.length)) return;
                (r3 += e3.data.length),
                  m3.preview && r3 > m3.preview
                    ? o3.abort()
                    : ((c3.data = c3.data[0]), p3(c3, t));
              }
            };
          }
          function y3(e3) {
            return "greedy" === m3.skipEmptyLines
              ? "" === e3.join("").trim()
              : 1 === e3.length && 0 === e3[0].length;
          }
          function g3() {
            return (
              c3 &&
                u3 &&
                (k2(
                  "Delimiter",
                  "UndetectableDelimiter",
                  "Unable to auto-detect delimiting character; defaulted to '" +
                    b2.DefaultDelimiter +
                    "'"
                ),
                (u3 = false)),
              m3.skipEmptyLines &&
                (c3.data = c3.data.filter(function (e3) {
                  return !y3(e3);
                })),
              _3() &&
                (function () {
                  if (!c3) return;
                  function e3(e4, t3) {
                    J2(m3.transformHeader) && (e4 = m3.transformHeader(e4, t3)),
                      l3.push(e4);
                  }
                  if (Array.isArray(c3.data[0])) {
                    for (var t2 = 0; _3() && t2 < c3.data.length; t2++)
                      c3.data[t2].forEach(e3);
                    c3.data.splice(0, 1);
                  } else c3.data.forEach(e3);
                })(),
              (function () {
                if (!c3 || (!m3.header && !m3.dynamicTyping && !m3.transform))
                  return c3;
                function e3(e4, t3) {
                  var r4,
                    i2 = m3.header ? {} : [];
                  for (r4 = 0; r4 < e4.length; r4++) {
                    var n3 = r4,
                      s3 = e4[r4];
                    m3.header &&
                      (n3 = r4 >= l3.length ? "__parsed_extra" : l3[r4]),
                      m3.transform && (s3 = m3.transform(s3, n3)),
                      (s3 = v3(n3, s3)),
                      "__parsed_extra" === n3
                        ? ((i2[n3] = i2[n3] || []), i2[n3].push(s3))
                        : (i2[n3] = s3);
                  }
                  return (
                    m3.header &&
                      (r4 > l3.length
                        ? k2(
                            "FieldMismatch",
                            "TooManyFields",
                            "Too many fields: expected " +
                              l3.length +
                              " fields but parsed " +
                              r4,
                            f3 + t3
                          )
                        : r4 < l3.length &&
                          k2(
                            "FieldMismatch",
                            "TooFewFields",
                            "Too few fields: expected " +
                              l3.length +
                              " fields but parsed " +
                              r4,
                            f3 + t3
                          )),
                    i2
                  );
                }
                var t2 = 1;
                !c3.data.length || Array.isArray(c3.data[0])
                  ? ((c3.data = c3.data.map(e3)), (t2 = c3.data.length))
                  : (c3.data = e3(c3.data, 0));
                m3.header && c3.meta && (c3.meta.fields = l3);
                return (f3 += t2), c3;
              })()
            );
          }
          function _3() {
            return m3.header && 0 === l3.length;
          }
          function v3(e3, t2) {
            return (
              (r4 = e3),
              m3.dynamicTypingFunction &&
                void 0 === m3.dynamicTyping[r4] &&
                (m3.dynamicTyping[r4] = m3.dynamicTypingFunction(r4)),
              true === (m3.dynamicTyping[r4] || m3.dynamicTyping)
                ? "true" === t2 ||
                  "TRUE" === t2 ||
                  ("false" !== t2 &&
                    "FALSE" !== t2 &&
                    ((function (e4) {
                      if (s2.test(e4)) {
                        var t3 = parseFloat(e4);
                        if (n2 < t3 && t3 < i) return true;
                      }
                      return false;
                    })(t2)
                      ? parseFloat(t2)
                      : h3.test(t2)
                      ? new Date(t2)
                      : "" === t2
                      ? null
                      : t2))
                : t2
            );
            var r4;
          }
          function k2(e3, t2, r4, i2) {
            var n3 = { type: e3, code: t2, message: r4 };
            void 0 !== i2 && (n3.row = i2), c3.errors.push(n3);
          }
          (this.parse = function (e3, t2, r4) {
            var i2 = m3.quoteChar || '"';
            if (
              (m3.newline ||
                (m3.newline = (function (e4, t3) {
                  e4 = e4.substring(0, 1048576);
                  var r5 = new RegExp(Q2(t3) + "([^]*?)" + Q2(t3), "gm"),
                    i3 = (e4 = e4.replace(r5, "")).split("\r"),
                    n4 = e4.split("\n"),
                    s4 = 1 < n4.length && n4[0].length < i3[0].length;
                  if (1 === i3.length || s4) return "\n";
                  for (var a4 = 0, o4 = 0; o4 < i3.length; o4++)
                    "\n" === i3[o4][0] && a4++;
                  return a4 >= i3.length / 2 ? "\r\n" : "\r";
                })(e3, i2)),
              (u3 = false),
              m3.delimiter)
            )
              J2(m3.delimiter) &&
                ((m3.delimiter = m3.delimiter(e3)),
                (c3.meta.delimiter = m3.delimiter));
            else {
              var n3 = (function (e4, t3, r5, i3, n4) {
                var s4, a4, o4, u4;
                n4 = n4 || [",", "	", "|", ";", b2.RECORD_SEP, b2.UNIT_SEP];
                for (var h4 = 0; h4 < n4.length; h4++) {
                  var f4 = n4[h4],
                    d4 = 0,
                    l4 = 0,
                    c4 = 0;
                  o4 = void 0;
                  for (
                    var p4 = new E2({
                        comments: i3,
                        delimiter: f4,
                        newline: t3,
                        preview: 10,
                      }).parse(e4),
                      g4 = 0;
                    g4 < p4.data.length;
                    g4++
                  )
                    if (r5 && y3(p4.data[g4])) c4++;
                    else {
                      var _4 = p4.data[g4].length;
                      (l4 += _4),
                        void 0 !== o4
                          ? 0 < _4 && ((d4 += Math.abs(_4 - o4)), (o4 = _4))
                          : (o4 = _4);
                    }
                  0 < p4.data.length && (l4 /= p4.data.length - c4),
                    (void 0 === a4 || d4 <= a4) &&
                      (void 0 === u4 || u4 < l4) &&
                      1.99 < l4 &&
                      ((a4 = d4), (s4 = f4), (u4 = l4));
                }
                return { successful: !!(m3.delimiter = s4), bestDelimiter: s4 };
              })(
                e3,
                m3.newline,
                m3.skipEmptyLines,
                m3.comments,
                m3.delimitersToGuess
              );
              n3.successful
                ? (m3.delimiter = n3.bestDelimiter)
                : ((u3 = true), (m3.delimiter = b2.DefaultDelimiter)),
                (c3.meta.delimiter = m3.delimiter);
            }
            var s3 = w2(m3);
            return (
              m3.preview && m3.header && s3.preview++,
              (a3 = e3),
              (o3 = new E2(s3)),
              (c3 = o3.parse(a3, t2, r4)),
              g3(),
              d3
                ? { meta: { paused: true } }
                : c3 || { meta: { paused: false } }
            );
          }),
            (this.paused = function () {
              return d3;
            }),
            (this.pause = function () {
              (d3 = true),
                o3.abort(),
                (a3 = J2(m3.chunk) ? "" : a3.substring(o3.getCharIndex()));
            }),
            (this.resume = function () {
              t.streamer._halted
                ? ((d3 = false), t.streamer.parseChunk(a3, true))
                : setTimeout(t.resume, 3);
            }),
            (this.aborted = function () {
              return e2;
            }),
            (this.abort = function () {
              (e2 = true),
                o3.abort(),
                (c3.meta.aborted = true),
                J2(m3.complete) && m3.complete(c3),
                (a3 = "");
            });
        }
        function Q2(e2) {
          return e2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        }
        function E2(j2) {
          var z2,
            M2 = (j2 = j2 || {}).delimiter,
            P2 = j2.newline,
            U2 = j2.comments,
            q2 = j2.step,
            N2 = j2.preview,
            B2 = j2.fastMode,
            K2 = (z2 =
              void 0 === j2.quoteChar || null === j2.quoteChar
                ? '"'
                : j2.quoteChar);
          if (
            (void 0 !== j2.escapeChar && (K2 = j2.escapeChar),
            ("string" != typeof M2 || -1 < b2.BAD_DELIMITERS.indexOf(M2)) &&
              (M2 = ","),
            U2 === M2)
          )
            throw new Error("Comment character same as delimiter");
          true === U2
            ? (U2 = "#")
            : ("string" != typeof U2 || -1 < b2.BAD_DELIMITERS.indexOf(U2)) &&
              (U2 = false),
            "\n" !== P2 && "\r" !== P2 && "\r\n" !== P2 && (P2 = "\n");
          var W2 = 0,
            H2 = false;
          (this.parse = function (i, t, r3) {
            if ("string" != typeof i) throw new Error("Input must be a string");
            var n2 = i.length,
              e2 = M2.length,
              s2 = P2.length,
              a3 = U2.length,
              o3 = J2(q2),
              u3 = [],
              h3 = [],
              f3 = [],
              d3 = (W2 = 0);
            if (!i) return L2();
            if (j2.header && !t) {
              var l3 = i.split(P2)[0].split(M2),
                c3 = [],
                p3 = {},
                g3 = false;
              for (var _3 in l3) {
                var m3 = l3[_3];
                J2(j2.transformHeader) && (m3 = j2.transformHeader(m3, _3));
                var y3 = m3,
                  v3 = p3[m3] || 0;
                for (
                  0 < v3 && ((g3 = true), (y3 = m3 + "_" + v3)),
                    p3[m3] = v3 + 1;
                  c3.includes(y3);

                )
                  y3 = y3 + "_" + v3;
                c3.push(y3);
              }
              if (g3) {
                var k2 = i.split(P2);
                (k2[0] = c3.join(M2)), (i = k2.join(P2));
              }
            }
            if (B2 || (false !== B2 && -1 === i.indexOf(z2))) {
              for (var b3 = i.split(P2), E3 = 0; E3 < b3.length; E3++) {
                if (((f3 = b3[E3]), (W2 += f3.length), E3 !== b3.length - 1))
                  W2 += P2.length;
                else if (r3) return L2();
                if (!U2 || f3.substring(0, a3) !== U2) {
                  if (o3) {
                    if (((u3 = []), I2(f3.split(M2)), F2(), H2)) return L2();
                  } else I2(f3.split(M2));
                  if (N2 && N2 <= E3) return (u3 = u3.slice(0, N2)), L2(true);
                }
              }
              return L2();
            }
            for (
              var w3 = i.indexOf(M2, W2),
                R2 = i.indexOf(P2, W2),
                C2 = new RegExp(Q2(K2) + Q2(z2), "g"),
                S2 = i.indexOf(z2, W2);
              ;

            )
              if (i[W2] !== z2)
                if (U2 && 0 === f3.length && i.substring(W2, W2 + a3) === U2) {
                  if (-1 === R2) return L2();
                  (W2 = R2 + s2),
                    (R2 = i.indexOf(P2, W2)),
                    (w3 = i.indexOf(M2, W2));
                } else if (-1 !== w3 && (w3 < R2 || -1 === R2))
                  f3.push(i.substring(W2, w3)),
                    (W2 = w3 + e2),
                    (w3 = i.indexOf(M2, W2));
                else {
                  if (-1 === R2) break;
                  if (
                    (f3.push(i.substring(W2, R2)),
                    D2(R2 + s2),
                    o3 && (F2(), H2))
                  )
                    return L2();
                  if (N2 && u3.length >= N2) return L2(true);
                }
              else
                for (S2 = W2, W2++; ; ) {
                  if (-1 === (S2 = i.indexOf(z2, S2 + 1)))
                    return (
                      r3 ||
                        h3.push({
                          type: "Quotes",
                          code: "MissingQuotes",
                          message: "Quoted field unterminated",
                          row: u3.length,
                          index: W2,
                        }),
                      T2()
                    );
                  if (S2 === n2 - 1)
                    return T2(i.substring(W2, S2).replace(C2, z2));
                  if (z2 !== K2 || i[S2 + 1] !== K2) {
                    if (z2 === K2 || 0 === S2 || i[S2 - 1] !== K2) {
                      -1 !== w3 && w3 < S2 + 1 && (w3 = i.indexOf(M2, S2 + 1)),
                        -1 !== R2 &&
                          R2 < S2 + 1 &&
                          (R2 = i.indexOf(P2, S2 + 1));
                      var O2 = A2(-1 === R2 ? w3 : Math.min(w3, R2));
                      if (i.substr(S2 + 1 + O2, e2) === M2) {
                        f3.push(i.substring(W2, S2).replace(C2, z2)),
                          i[(W2 = S2 + 1 + O2 + e2)] !== z2 &&
                            (S2 = i.indexOf(z2, W2)),
                          (w3 = i.indexOf(M2, W2)),
                          (R2 = i.indexOf(P2, W2));
                        break;
                      }
                      var x2 = A2(R2);
                      if (i.substring(S2 + 1 + x2, S2 + 1 + x2 + s2) === P2) {
                        if (
                          (f3.push(i.substring(W2, S2).replace(C2, z2)),
                          D2(S2 + 1 + x2 + s2),
                          (w3 = i.indexOf(M2, W2)),
                          (S2 = i.indexOf(z2, W2)),
                          o3 && (F2(), H2))
                        )
                          return L2();
                        if (N2 && u3.length >= N2) return L2(true);
                        break;
                      }
                      h3.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: u3.length,
                        index: W2,
                      }),
                        S2++;
                    }
                  } else S2++;
                }
            return T2();
            function I2(e3) {
              u3.push(e3), (d3 = W2);
            }
            function A2(e3) {
              var t2 = 0;
              if (-1 !== e3) {
                var r4 = i.substring(S2 + 1, e3);
                r4 && "" === r4.trim() && (t2 = r4.length);
              }
              return t2;
            }
            function T2(e3) {
              return (
                r3 ||
                  (void 0 === e3 && (e3 = i.substring(W2)),
                  f3.push(e3),
                  (W2 = n2),
                  I2(f3),
                  o3 && F2()),
                L2()
              );
            }
            function D2(e3) {
              (W2 = e3), I2(f3), (f3 = []), (R2 = i.indexOf(P2, W2));
            }
            function L2(e3) {
              return {
                data: u3,
                errors: h3,
                meta: {
                  delimiter: M2,
                  linebreak: P2,
                  aborted: H2,
                  truncated: !!e3,
                  cursor: d3 + (t || 0),
                },
              };
            }
            function F2() {
              q2(L2()), (u3 = []), (h3 = []);
            }
          }),
            (this.abort = function () {
              H2 = true;
            }),
            (this.getCharIndex = function () {
              return W2;
            });
        }
        function _2(e2) {
          var t = e2.data,
            r3 = a2[t.workerId],
            i = false;
          if (t.error) r3.userError(t.error, t.file);
          else if (t.results && t.results.data) {
            var n2 = {
              abort: function () {
                (i = true),
                  m2(t.workerId, {
                    data: [],
                    errors: [],
                    meta: { aborted: true },
                  });
              },
              pause: y2,
              resume: y2,
            };
            if (J2(r3.userStep)) {
              for (
                var s2 = 0;
                s2 < t.results.data.length &&
                (r3.userStep(
                  {
                    data: t.results.data[s2],
                    errors: t.results.errors,
                    meta: t.results.meta,
                  },
                  n2
                ),
                !i);
                s2++
              );
              delete t.results;
            } else
              J2(r3.userChunk) &&
                (r3.userChunk(t.results, n2, t.file), delete t.results);
          }
          t.finished && !i && m2(t.workerId, t.results);
        }
        function m2(e2, t) {
          var r3 = a2[e2];
          J2(r3.userComplete) && r3.userComplete(t),
            r3.terminate(),
            delete a2[e2];
        }
        function y2() {
          throw new Error("Not implemented.");
        }
        function w2(e2) {
          if ("object" != typeof e2 || null === e2) return e2;
          var t = Array.isArray(e2) ? [] : {};
          for (var r3 in e2) t[r3] = w2(e2[r3]);
          return t;
        }
        function v2(e2, t) {
          return function () {
            e2.apply(t, arguments);
          };
        }
        function J2(e2) {
          return "function" == typeof e2;
        }
        return (
          o2 &&
            (f2.onmessage = function (e2) {
              var t = e2.data;
              void 0 === b2.WORKER_ID && t && (b2.WORKER_ID = t.workerId);
              if ("string" == typeof t.input)
                f2.postMessage({
                  workerId: b2.WORKER_ID,
                  results: b2.parse(t.input, t.config),
                  finished: true,
                });
              else if (
                (f2.File && t.input instanceof File) ||
                t.input instanceof Object
              ) {
                var r3 = b2.parse(t.input, t.config);
                r3 &&
                  f2.postMessage({
                    workerId: b2.WORKER_ID,
                    results: r3,
                    finished: true,
                  });
              }
            }),
          ((l2.prototype = Object.create(h2.prototype)).constructor = l2),
          ((c2.prototype = Object.create(h2.prototype)).constructor = c2),
          ((p2.prototype = Object.create(p2.prototype)).constructor = p2),
          ((g2.prototype = Object.create(h2.prototype)).constructor = g2),
          b2
        );
      });
    },
  });

  // node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js
  var require_cjs = __commonJS({
    "node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"(
      exports,
      module
    ) {
      "use strict";
      var isMergeableObject = function isMergeableObject2(value) {
        return isNonNullObject(value) && !isSpecial(value);
      };
      function isNonNullObject(value) {
        return !!value && typeof value === "object";
      }
      function isSpecial(value) {
        var stringValue = Object.prototype.toString.call(value);
        return (
          stringValue === "[object RegExp]" ||
          stringValue === "[object Date]" ||
          isReactElement(value)
        );
      }
      var canUseSymbol = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE = canUseSymbol
        ? Symbol.for("react.element")
        : 60103;
      function isReactElement(value) {
        return value.$$typeof === REACT_ELEMENT_TYPE;
      }
      function emptyTarget(val) {
        return Array.isArray(val) ? [] : {};
      }
      function cloneUnlessOtherwiseSpecified(value, options) {
        return options.clone !== false && options.isMergeableObject(value)
          ? deepmerge(emptyTarget(value), value, options)
          : value;
      }
      function defaultArrayMerge(target, source, options) {
        return target.concat(source).map(function (element) {
          return cloneUnlessOtherwiseSpecified(element, options);
        });
      }
      function getMergeFunction(key, options) {
        if (!options.customMerge) {
          return deepmerge;
        }
        var customMerge = options.customMerge(key);
        return typeof customMerge === "function" ? customMerge : deepmerge;
      }
      function getEnumerableOwnPropertySymbols(target) {
        return Object.getOwnPropertySymbols
          ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
              return Object.propertyIsEnumerable.call(target, symbol);
            })
          : [];
      }
      function getKeys(target) {
        return Object.keys(target).concat(
          getEnumerableOwnPropertySymbols(target)
        );
      }
      function propertyIsOnObject(object, property) {
        try {
          return property in object;
        } catch (_2) {
          return false;
        }
      }
      function propertyIsUnsafe(target, key) {
        return (
          propertyIsOnObject(target, key) &&
          !(
            Object.hasOwnProperty.call(target, key) &&
            Object.propertyIsEnumerable.call(target, key)
          )
        );
      }
      function mergeObject(target, source, options) {
        var destination = {};
        if (options.isMergeableObject(target)) {
          getKeys(target).forEach(function (key) {
            destination[key] = cloneUnlessOtherwiseSpecified(
              target[key],
              options
            );
          });
        }
        getKeys(source).forEach(function (key) {
          if (propertyIsUnsafe(target, key)) {
            return;
          }
          if (
            propertyIsOnObject(target, key) &&
            options.isMergeableObject(source[key])
          ) {
            destination[key] = getMergeFunction(key, options)(
              target[key],
              source[key],
              options
            );
          } else {
            destination[key] = cloneUnlessOtherwiseSpecified(
              source[key],
              options
            );
          }
        });
        return destination;
      }
      function deepmerge(target, source, options) {
        options = options || {};
        options.arrayMerge = options.arrayMerge || defaultArrayMerge;
        options.isMergeableObject =
          options.isMergeableObject || isMergeableObject;
        options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
        var sourceIsArray = Array.isArray(source);
        var targetIsArray = Array.isArray(target);
        var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
        if (!sourceAndTargetTypesMatch) {
          return cloneUnlessOtherwiseSpecified(source, options);
        } else if (sourceIsArray) {
          return options.arrayMerge(target, source, options);
        } else {
          return mergeObject(target, source, options);
        }
      }
      deepmerge.all = function deepmergeAll(array, options) {
        if (!Array.isArray(array)) {
          throw new Error("first argument should be an array");
        }
        return array.reduce(function (prev, next) {
          return deepmerge(prev, next, options);
        }, {});
      };
      var deepmerge_1 = deepmerge;
      module.exports = deepmerge_1;
    },
  });

  // node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js
  var require_color_name = __commonJS({
    "node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js"(
      exports,
      module
    ) {
      "use strict";
      module.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50],
      };
    },
  });

  // node_modules/.pnpm/is-arrayish@0.3.2/node_modules/is-arrayish/index.js
  var require_is_arrayish = __commonJS({
    "node_modules/.pnpm/is-arrayish@0.3.2/node_modules/is-arrayish/index.js"(
      exports,
      module
    ) {
      "use strict";
      module.exports = function isArrayish(obj) {
        if (!obj || typeof obj === "string") {
          return false;
        }
        return (
          obj instanceof Array ||
          Array.isArray(obj) ||
          (obj.length >= 0 &&
            (obj.splice instanceof Function ||
              (Object.getOwnPropertyDescriptor(obj, obj.length - 1) &&
                obj.constructor.name !== "String")))
        );
      };
    },
  });

  // node_modules/.pnpm/simple-swizzle@0.2.2/node_modules/simple-swizzle/index.js
  var require_simple_swizzle = __commonJS({
    "node_modules/.pnpm/simple-swizzle@0.2.2/node_modules/simple-swizzle/index.js"(
      exports,
      module
    ) {
      "use strict";
      var isArrayish = require_is_arrayish();
      var concat = Array.prototype.concat;
      var slice = Array.prototype.slice;
      var swizzle = (module.exports = function swizzle2(args) {
        var results = [];
        for (var i = 0, len = args.length; i < len; i++) {
          var arg = args[i];
          if (isArrayish(arg)) {
            results = concat.call(results, slice.call(arg));
          } else {
            results.push(arg);
          }
        }
        return results;
      });
      swizzle.wrap = function (fn2) {
        return function () {
          return fn2(swizzle(arguments));
        };
      };
    },
  });

  // node_modules/.pnpm/color-string@1.9.1/node_modules/color-string/index.js
  var require_color_string = __commonJS({
    "node_modules/.pnpm/color-string@1.9.1/node_modules/color-string/index.js"(
      exports,
      module
    ) {
      "use strict";
      var colorNames = require_color_name();
      var swizzle = require_simple_swizzle();
      var hasOwnProperty = Object.hasOwnProperty;
      var reverseNames = /* @__PURE__ */ Object.create(null);
      for (name in colorNames) {
        if (hasOwnProperty.call(colorNames, name)) {
          reverseNames[colorNames[name]] = name;
        }
      }
      var name;
      var cs2 = (module.exports = {
        to: {},
        get: {},
      });
      cs2.get = function (string) {
        var prefix = string.substring(0, 3).toLowerCase();
        var val;
        var model;
        switch (prefix) {
          case "hsl":
            val = cs2.get.hsl(string);
            model = "hsl";
            break;
          case "hwb":
            val = cs2.get.hwb(string);
            model = "hwb";
            break;
          default:
            val = cs2.get.rgb(string);
            model = "rgb";
            break;
        }
        if (!val) {
          return null;
        }
        return { model, value: val };
      };
      cs2.get.rgb = function (string) {
        if (!string) {
          return null;
        }
        var abbr = /^#([a-f0-9]{3,4})$/i;
        var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
        var rgba =
          /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
        var per =
          /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
        var keyword = /^(\w+)$/;
        var rgb = [0, 0, 0, 1];
        var match;
        var i;
        var hexAlpha;
        if ((match = string.match(hex))) {
          hexAlpha = match[2];
          match = match[1];
          for (i = 0; i < 3; i++) {
            var i2 = i * 2;
            rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
          }
          if (hexAlpha) {
            rgb[3] = parseInt(hexAlpha, 16) / 255;
          }
        } else if ((match = string.match(abbr))) {
          match = match[1];
          hexAlpha = match[3];
          for (i = 0; i < 3; i++) {
            rgb[i] = parseInt(match[i] + match[i], 16);
          }
          if (hexAlpha) {
            rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
          }
        } else if ((match = string.match(rgba))) {
          for (i = 0; i < 3; i++) {
            rgb[i] = parseInt(match[i + 1], 0);
          }
          if (match[4]) {
            if (match[5]) {
              rgb[3] = parseFloat(match[4]) * 0.01;
            } else {
              rgb[3] = parseFloat(match[4]);
            }
          }
        } else if ((match = string.match(per))) {
          for (i = 0; i < 3; i++) {
            rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
          }
          if (match[4]) {
            if (match[5]) {
              rgb[3] = parseFloat(match[4]) * 0.01;
            } else {
              rgb[3] = parseFloat(match[4]);
            }
          }
        } else if ((match = string.match(keyword))) {
          if (match[1] === "transparent") {
            return [0, 0, 0, 0];
          }
          if (!hasOwnProperty.call(colorNames, match[1])) {
            return null;
          }
          rgb = colorNames[match[1]];
          rgb[3] = 1;
          return rgb;
        } else {
          return null;
        }
        for (i = 0; i < 3; i++) {
          rgb[i] = clamp(rgb[i], 0, 255);
        }
        rgb[3] = clamp(rgb[3], 0, 1);
        return rgb;
      };
      cs2.get.hsl = function (string) {
        if (!string) {
          return null;
        }
        var hsl =
          /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
        var match = string.match(hsl);
        if (match) {
          var alpha = parseFloat(match[4]);
          var h2 = ((parseFloat(match[1]) % 360) + 360) % 360;
          var s = clamp(parseFloat(match[2]), 0, 100);
          var l2 = clamp(parseFloat(match[3]), 0, 100);
          var a2 = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
          return [h2, s, l2, a2];
        }
        return null;
      };
      cs2.get.hwb = function (string) {
        if (!string) {
          return null;
        }
        var hwb =
          /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
        var match = string.match(hwb);
        if (match) {
          var alpha = parseFloat(match[4]);
          var h2 = ((parseFloat(match[1]) % 360) + 360) % 360;
          var w2 = clamp(parseFloat(match[2]), 0, 100);
          var b2 = clamp(parseFloat(match[3]), 0, 100);
          var a2 = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
          return [h2, w2, b2, a2];
        }
        return null;
      };
      cs2.to.hex = function () {
        var rgba = swizzle(arguments);
        return (
          "#" +
          hexDouble(rgba[0]) +
          hexDouble(rgba[1]) +
          hexDouble(rgba[2]) +
          (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "")
        );
      };
      cs2.to.rgb = function () {
        var rgba = swizzle(arguments);
        return rgba.length < 4 || rgba[3] === 1
          ? "rgb(" +
              Math.round(rgba[0]) +
              ", " +
              Math.round(rgba[1]) +
              ", " +
              Math.round(rgba[2]) +
              ")"
          : "rgba(" +
              Math.round(rgba[0]) +
              ", " +
              Math.round(rgba[1]) +
              ", " +
              Math.round(rgba[2]) +
              ", " +
              rgba[3] +
              ")";
      };
      cs2.to.rgb.percent = function () {
        var rgba = swizzle(arguments);
        var r2 = Math.round((rgba[0] / 255) * 100);
        var g2 = Math.round((rgba[1] / 255) * 100);
        var b2 = Math.round((rgba[2] / 255) * 100);
        return rgba.length < 4 || rgba[3] === 1
          ? "rgb(" + r2 + "%, " + g2 + "%, " + b2 + "%)"
          : "rgba(" + r2 + "%, " + g2 + "%, " + b2 + "%, " + rgba[3] + ")";
      };
      cs2.to.hsl = function () {
        var hsla = swizzle(arguments);
        return hsla.length < 4 || hsla[3] === 1
          ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)"
          : "hsla(" +
              hsla[0] +
              ", " +
              hsla[1] +
              "%, " +
              hsla[2] +
              "%, " +
              hsla[3] +
              ")";
      };
      cs2.to.hwb = function () {
        var hwba = swizzle(arguments);
        var a2 = "";
        if (hwba.length >= 4 && hwba[3] !== 1) {
          a2 = ", " + hwba[3];
        }
        return (
          "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a2 + ")"
        );
      };
      cs2.to.keyword = function (rgb) {
        return reverseNames[rgb.slice(0, 3)];
      };
      function clamp(num, min, max) {
        return Math.min(Math.max(min, num), max);
      }
      function hexDouble(num) {
        var str = Math.round(num).toString(16).toUpperCase();
        return str.length < 2 ? "0" + str : str;
      }
    },
  });

  // node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/conversions.js
  var require_conversions = __commonJS({
    "node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/conversions.js"(
      exports,
      module
    ) {
      "use strict";
      var cssKeywords = require_color_name();
      var reverseKeywords = {};
      for (const key of Object.keys(cssKeywords)) {
        reverseKeywords[cssKeywords[key]] = key;
      }
      var convert = {
        rgb: { channels: 3, labels: "rgb" },
        hsl: { channels: 3, labels: "hsl" },
        hsv: { channels: 3, labels: "hsv" },
        hwb: { channels: 3, labels: "hwb" },
        cmyk: { channels: 4, labels: "cmyk" },
        xyz: { channels: 3, labels: "xyz" },
        lab: { channels: 3, labels: "lab" },
        lch: { channels: 3, labels: "lch" },
        hex: { channels: 1, labels: ["hex"] },
        keyword: { channels: 1, labels: ["keyword"] },
        ansi16: { channels: 1, labels: ["ansi16"] },
        ansi256: { channels: 1, labels: ["ansi256"] },
        hcg: { channels: 3, labels: ["h", "c", "g"] },
        apple: { channels: 3, labels: ["r16", "g16", "b16"] },
        gray: { channels: 1, labels: ["gray"] },
      };
      module.exports = convert;
      for (const model of Object.keys(convert)) {
        if (!("channels" in convert[model])) {
          throw new Error("missing channels property: " + model);
        }
        if (!("labels" in convert[model])) {
          throw new Error("missing channel labels property: " + model);
        }
        if (convert[model].labels.length !== convert[model].channels) {
          throw new Error("channel and label counts mismatch: " + model);
        }
        const { channels, labels } = convert[model];
        delete convert[model].channels;
        delete convert[model].labels;
        Object.defineProperty(convert[model], "channels", { value: channels });
        Object.defineProperty(convert[model], "labels", { value: labels });
      }
      convert.rgb.hsl = function (rgb) {
        const r2 = rgb[0] / 255;
        const g2 = rgb[1] / 255;
        const b2 = rgb[2] / 255;
        const min = Math.min(r2, g2, b2);
        const max = Math.max(r2, g2, b2);
        const delta = max - min;
        let h2;
        let s;
        if (max === min) {
          h2 = 0;
        } else if (r2 === max) {
          h2 = (g2 - b2) / delta;
        } else if (g2 === max) {
          h2 = 2 + (b2 - r2) / delta;
        } else if (b2 === max) {
          h2 = 4 + (r2 - g2) / delta;
        }
        h2 = Math.min(h2 * 60, 360);
        if (h2 < 0) {
          h2 += 360;
        }
        const l2 = (min + max) / 2;
        if (max === min) {
          s = 0;
        } else if (l2 <= 0.5) {
          s = delta / (max + min);
        } else {
          s = delta / (2 - max - min);
        }
        return [h2, s * 100, l2 * 100];
      };
      convert.rgb.hsv = function (rgb) {
        let rdif;
        let gdif;
        let bdif;
        let h2;
        let s;
        const r2 = rgb[0] / 255;
        const g2 = rgb[1] / 255;
        const b2 = rgb[2] / 255;
        const v2 = Math.max(r2, g2, b2);
        const diff = v2 - Math.min(r2, g2, b2);
        const diffc = function (c2) {
          return (v2 - c2) / 6 / diff + 1 / 2;
        };
        if (diff === 0) {
          h2 = 0;
          s = 0;
        } else {
          s = diff / v2;
          rdif = diffc(r2);
          gdif = diffc(g2);
          bdif = diffc(b2);
          if (r2 === v2) {
            h2 = bdif - gdif;
          } else if (g2 === v2) {
            h2 = 1 / 3 + rdif - bdif;
          } else if (b2 === v2) {
            h2 = 2 / 3 + gdif - rdif;
          }
          if (h2 < 0) {
            h2 += 1;
          } else if (h2 > 1) {
            h2 -= 1;
          }
        }
        return [h2 * 360, s * 100, v2 * 100];
      };
      convert.rgb.hwb = function (rgb) {
        const r2 = rgb[0];
        const g2 = rgb[1];
        let b2 = rgb[2];
        const h2 = convert.rgb.hsl(rgb)[0];
        const w2 = (1 / 255) * Math.min(r2, Math.min(g2, b2));
        b2 = 1 - (1 / 255) * Math.max(r2, Math.max(g2, b2));
        return [h2, w2 * 100, b2 * 100];
      };
      convert.rgb.cmyk = function (rgb) {
        const r2 = rgb[0] / 255;
        const g2 = rgb[1] / 255;
        const b2 = rgb[2] / 255;
        const k2 = Math.min(1 - r2, 1 - g2, 1 - b2);
        const c2 = (1 - r2 - k2) / (1 - k2) || 0;
        const m2 = (1 - g2 - k2) / (1 - k2) || 0;
        const y2 = (1 - b2 - k2) / (1 - k2) || 0;
        return [c2 * 100, m2 * 100, y2 * 100, k2 * 100];
      };
      function comparativeDistance(x2, y2) {
        return (
          __pow(x2[0] - y2[0], 2) +
          __pow(x2[1] - y2[1], 2) +
          __pow(x2[2] - y2[2], 2)
        );
      }
      convert.rgb.keyword = function (rgb) {
        const reversed = reverseKeywords[rgb];
        if (reversed) {
          return reversed;
        }
        let currentClosestDistance = Infinity;
        let currentClosestKeyword;
        for (const keyword of Object.keys(cssKeywords)) {
          const value = cssKeywords[keyword];
          const distance = comparativeDistance(rgb, value);
          if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
          }
        }
        return currentClosestKeyword;
      };
      convert.keyword.rgb = function (keyword) {
        return cssKeywords[keyword];
      };
      convert.rgb.xyz = function (rgb) {
        let r2 = rgb[0] / 255;
        let g2 = rgb[1] / 255;
        let b2 = rgb[2] / 255;
        r2 = r2 > 0.04045 ? __pow((r2 + 0.055) / 1.055, 2.4) : r2 / 12.92;
        g2 = g2 > 0.04045 ? __pow((g2 + 0.055) / 1.055, 2.4) : g2 / 12.92;
        b2 = b2 > 0.04045 ? __pow((b2 + 0.055) / 1.055, 2.4) : b2 / 12.92;
        const x2 = r2 * 0.4124 + g2 * 0.3576 + b2 * 0.1805;
        const y2 = r2 * 0.2126 + g2 * 0.7152 + b2 * 0.0722;
        const z2 = r2 * 0.0193 + g2 * 0.1192 + b2 * 0.9505;
        return [x2 * 100, y2 * 100, z2 * 100];
      };
      convert.rgb.lab = function (rgb) {
        const xyz = convert.rgb.xyz(rgb);
        let x2 = xyz[0];
        let y2 = xyz[1];
        let z2 = xyz[2];
        x2 /= 95.047;
        y2 /= 100;
        z2 /= 108.883;
        x2 = x2 > 8856e-6 ? __pow(x2, 1 / 3) : 7.787 * x2 + 16 / 116;
        y2 = y2 > 8856e-6 ? __pow(y2, 1 / 3) : 7.787 * y2 + 16 / 116;
        z2 = z2 > 8856e-6 ? __pow(z2, 1 / 3) : 7.787 * z2 + 16 / 116;
        const l2 = 116 * y2 - 16;
        const a2 = 500 * (x2 - y2);
        const b2 = 200 * (y2 - z2);
        return [l2, a2, b2];
      };
      convert.hsl.rgb = function (hsl) {
        const h2 = hsl[0] / 360;
        const s = hsl[1] / 100;
        const l2 = hsl[2] / 100;
        let t2;
        let t3;
        let val;
        if (s === 0) {
          val = l2 * 255;
          return [val, val, val];
        }
        if (l2 < 0.5) {
          t2 = l2 * (1 + s);
        } else {
          t2 = l2 + s - l2 * s;
        }
        const t1 = 2 * l2 - t2;
        const rgb = [0, 0, 0];
        for (let i = 0; i < 3; i++) {
          t3 = h2 + (1 / 3) * -(i - 1);
          if (t3 < 0) {
            t3++;
          }
          if (t3 > 1) {
            t3--;
          }
          if (6 * t3 < 1) {
            val = t1 + (t2 - t1) * 6 * t3;
          } else if (2 * t3 < 1) {
            val = t2;
          } else if (3 * t3 < 2) {
            val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
          } else {
            val = t1;
          }
          rgb[i] = val * 255;
        }
        return rgb;
      };
      convert.hsl.hsv = function (hsl) {
        const h2 = hsl[0];
        let s = hsl[1] / 100;
        let l2 = hsl[2] / 100;
        let smin = s;
        const lmin = Math.max(l2, 0.01);
        l2 *= 2;
        s *= l2 <= 1 ? l2 : 2 - l2;
        smin *= lmin <= 1 ? lmin : 2 - lmin;
        const v2 = (l2 + s) / 2;
        const sv = l2 === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l2 + s);
        return [h2, sv * 100, v2 * 100];
      };
      convert.hsv.rgb = function (hsv) {
        const h2 = hsv[0] / 60;
        const s = hsv[1] / 100;
        let v2 = hsv[2] / 100;
        const hi2 = Math.floor(h2) % 6;
        const f2 = h2 - Math.floor(h2);
        const p2 = 255 * v2 * (1 - s);
        const q2 = 255 * v2 * (1 - s * f2);
        const t = 255 * v2 * (1 - s * (1 - f2));
        v2 *= 255;
        switch (hi2) {
          case 0:
            return [v2, t, p2];
          case 1:
            return [q2, v2, p2];
          case 2:
            return [p2, v2, t];
          case 3:
            return [p2, q2, v2];
          case 4:
            return [t, p2, v2];
          case 5:
            return [v2, p2, q2];
        }
      };
      convert.hsv.hsl = function (hsv) {
        const h2 = hsv[0];
        const s = hsv[1] / 100;
        const v2 = hsv[2] / 100;
        const vmin = Math.max(v2, 0.01);
        let sl;
        let l2;
        l2 = (2 - s) * v2;
        const lmin = (2 - s) * vmin;
        sl = s * vmin;
        sl /= lmin <= 1 ? lmin : 2 - lmin;
        sl = sl || 0;
        l2 /= 2;
        return [h2, sl * 100, l2 * 100];
      };
      convert.hwb.rgb = function (hwb) {
        const h2 = hwb[0] / 360;
        let wh = hwb[1] / 100;
        let bl = hwb[2] / 100;
        const ratio = wh + bl;
        let f2;
        if (ratio > 1) {
          wh /= ratio;
          bl /= ratio;
        }
        const i = Math.floor(6 * h2);
        const v2 = 1 - bl;
        f2 = 6 * h2 - i;
        if ((i & 1) !== 0) {
          f2 = 1 - f2;
        }
        const n = wh + f2 * (v2 - wh);
        let r2;
        let g2;
        let b2;
        switch (i) {
          default:
          case 6:
          case 0:
            r2 = v2;
            g2 = n;
            b2 = wh;
            break;
          case 1:
            r2 = n;
            g2 = v2;
            b2 = wh;
            break;
          case 2:
            r2 = wh;
            g2 = v2;
            b2 = n;
            break;
          case 3:
            r2 = wh;
            g2 = n;
            b2 = v2;
            break;
          case 4:
            r2 = n;
            g2 = wh;
            b2 = v2;
            break;
          case 5:
            r2 = v2;
            g2 = wh;
            b2 = n;
            break;
        }
        return [r2 * 255, g2 * 255, b2 * 255];
      };
      convert.cmyk.rgb = function (cmyk) {
        const c2 = cmyk[0] / 100;
        const m2 = cmyk[1] / 100;
        const y2 = cmyk[2] / 100;
        const k2 = cmyk[3] / 100;
        const r2 = 1 - Math.min(1, c2 * (1 - k2) + k2);
        const g2 = 1 - Math.min(1, m2 * (1 - k2) + k2);
        const b2 = 1 - Math.min(1, y2 * (1 - k2) + k2);
        return [r2 * 255, g2 * 255, b2 * 255];
      };
      convert.xyz.rgb = function (xyz) {
        const x2 = xyz[0] / 100;
        const y2 = xyz[1] / 100;
        const z2 = xyz[2] / 100;
        let r2;
        let g2;
        let b2;
        r2 = x2 * 3.2406 + y2 * -1.5372 + z2 * -0.4986;
        g2 = x2 * -0.9689 + y2 * 1.8758 + z2 * 0.0415;
        b2 = x2 * 0.0557 + y2 * -0.204 + z2 * 1.057;
        r2 = r2 > 31308e-7 ? 1.055 * __pow(r2, 1 / 2.4) - 0.055 : r2 * 12.92;
        g2 = g2 > 31308e-7 ? 1.055 * __pow(g2, 1 / 2.4) - 0.055 : g2 * 12.92;
        b2 = b2 > 31308e-7 ? 1.055 * __pow(b2, 1 / 2.4) - 0.055 : b2 * 12.92;
        r2 = Math.min(Math.max(0, r2), 1);
        g2 = Math.min(Math.max(0, g2), 1);
        b2 = Math.min(Math.max(0, b2), 1);
        return [r2 * 255, g2 * 255, b2 * 255];
      };
      convert.xyz.lab = function (xyz) {
        let x2 = xyz[0];
        let y2 = xyz[1];
        let z2 = xyz[2];
        x2 /= 95.047;
        y2 /= 100;
        z2 /= 108.883;
        x2 = x2 > 8856e-6 ? __pow(x2, 1 / 3) : 7.787 * x2 + 16 / 116;
        y2 = y2 > 8856e-6 ? __pow(y2, 1 / 3) : 7.787 * y2 + 16 / 116;
        z2 = z2 > 8856e-6 ? __pow(z2, 1 / 3) : 7.787 * z2 + 16 / 116;
        const l2 = 116 * y2 - 16;
        const a2 = 500 * (x2 - y2);
        const b2 = 200 * (y2 - z2);
        return [l2, a2, b2];
      };
      convert.lab.xyz = function (lab) {
        const l2 = lab[0];
        const a2 = lab[1];
        const b2 = lab[2];
        let x2;
        let y2;
        let z2;
        y2 = (l2 + 16) / 116;
        x2 = a2 / 500 + y2;
        z2 = y2 - b2 / 200;
        const y22 = __pow(y2, 3);
        const x22 = __pow(x2, 3);
        const z22 = __pow(z2, 3);
        y2 = y22 > 8856e-6 ? y22 : (y2 - 16 / 116) / 7.787;
        x2 = x22 > 8856e-6 ? x22 : (x2 - 16 / 116) / 7.787;
        z2 = z22 > 8856e-6 ? z22 : (z2 - 16 / 116) / 7.787;
        x2 *= 95.047;
        y2 *= 100;
        z2 *= 108.883;
        return [x2, y2, z2];
      };
      convert.lab.lch = function (lab) {
        const l2 = lab[0];
        const a2 = lab[1];
        const b2 = lab[2];
        let h2;
        const hr = Math.atan2(b2, a2);
        h2 = (hr * 360) / 2 / Math.PI;
        if (h2 < 0) {
          h2 += 360;
        }
        const c2 = Math.sqrt(a2 * a2 + b2 * b2);
        return [l2, c2, h2];
      };
      convert.lch.lab = function (lch) {
        const l2 = lch[0];
        const c2 = lch[1];
        const h2 = lch[2];
        const hr = (h2 / 360) * 2 * Math.PI;
        const a2 = c2 * Math.cos(hr);
        const b2 = c2 * Math.sin(hr);
        return [l2, a2, b2];
      };
      convert.rgb.ansi16 = function (args, saturation = null) {
        const [r2, g2, b2] = args;
        let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
        value = Math.round(value / 50);
        if (value === 0) {
          return 30;
        }
        let ansi =
          30 +
          ((Math.round(b2 / 255) << 2) |
            (Math.round(g2 / 255) << 1) |
            Math.round(r2 / 255));
        if (value === 2) {
          ansi += 60;
        }
        return ansi;
      };
      convert.hsv.ansi16 = function (args) {
        return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
      };
      convert.rgb.ansi256 = function (args) {
        const r2 = args[0];
        const g2 = args[1];
        const b2 = args[2];
        if (r2 === g2 && g2 === b2) {
          if (r2 < 8) {
            return 16;
          }
          if (r2 > 248) {
            return 231;
          }
          return Math.round(((r2 - 8) / 247) * 24) + 232;
        }
        const ansi =
          16 +
          36 * Math.round((r2 / 255) * 5) +
          6 * Math.round((g2 / 255) * 5) +
          Math.round((b2 / 255) * 5);
        return ansi;
      };
      convert.ansi16.rgb = function (args) {
        let color = args % 10;
        if (color === 0 || color === 7) {
          if (args > 50) {
            color += 3.5;
          }
          color = (color / 10.5) * 255;
          return [color, color, color];
        }
        const mult = (~~(args > 50) + 1) * 0.5;
        const r2 = (color & 1) * mult * 255;
        const g2 = ((color >> 1) & 1) * mult * 255;
        const b2 = ((color >> 2) & 1) * mult * 255;
        return [r2, g2, b2];
      };
      convert.ansi256.rgb = function (args) {
        if (args >= 232) {
          const c2 = (args - 232) * 10 + 8;
          return [c2, c2, c2];
        }
        args -= 16;
        let rem;
        const r2 = (Math.floor(args / 36) / 5) * 255;
        const g2 = (Math.floor((rem = args % 36) / 6) / 5) * 255;
        const b2 = ((rem % 6) / 5) * 255;
        return [r2, g2, b2];
      };
      convert.rgb.hex = function (args) {
        const integer =
          ((Math.round(args[0]) & 255) << 16) +
          ((Math.round(args[1]) & 255) << 8) +
          (Math.round(args[2]) & 255);
        const string = integer.toString(16).toUpperCase();
        return "000000".substring(string.length) + string;
      };
      convert.hex.rgb = function (args) {
        const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!match) {
          return [0, 0, 0];
        }
        let colorString = match[0];
        if (match[0].length === 3) {
          colorString = colorString
            .split("")
            .map((char) => {
              return char + char;
            })
            .join("");
        }
        const integer = parseInt(colorString, 16);
        const r2 = (integer >> 16) & 255;
        const g2 = (integer >> 8) & 255;
        const b2 = integer & 255;
        return [r2, g2, b2];
      };
      convert.rgb.hcg = function (rgb) {
        const r2 = rgb[0] / 255;
        const g2 = rgb[1] / 255;
        const b2 = rgb[2] / 255;
        const max = Math.max(Math.max(r2, g2), b2);
        const min = Math.min(Math.min(r2, g2), b2);
        const chroma = max - min;
        let grayscale;
        let hue;
        if (chroma < 1) {
          grayscale = min / (1 - chroma);
        } else {
          grayscale = 0;
        }
        if (chroma <= 0) {
          hue = 0;
        } else if (max === r2) {
          hue = ((g2 - b2) / chroma) % 6;
        } else if (max === g2) {
          hue = 2 + (b2 - r2) / chroma;
        } else {
          hue = 4 + (r2 - g2) / chroma;
        }
        hue /= 6;
        hue %= 1;
        return [hue * 360, chroma * 100, grayscale * 100];
      };
      convert.hsl.hcg = function (hsl) {
        const s = hsl[1] / 100;
        const l2 = hsl[2] / 100;
        const c2 = l2 < 0.5 ? 2 * s * l2 : 2 * s * (1 - l2);
        let f2 = 0;
        if (c2 < 1) {
          f2 = (l2 - 0.5 * c2) / (1 - c2);
        }
        return [hsl[0], c2 * 100, f2 * 100];
      };
      convert.hsv.hcg = function (hsv) {
        const s = hsv[1] / 100;
        const v2 = hsv[2] / 100;
        const c2 = s * v2;
        let f2 = 0;
        if (c2 < 1) {
          f2 = (v2 - c2) / (1 - c2);
        }
        return [hsv[0], c2 * 100, f2 * 100];
      };
      convert.hcg.rgb = function (hcg) {
        const h2 = hcg[0] / 360;
        const c2 = hcg[1] / 100;
        const g2 = hcg[2] / 100;
        if (c2 === 0) {
          return [g2 * 255, g2 * 255, g2 * 255];
        }
        const pure = [0, 0, 0];
        const hi2 = (h2 % 1) * 6;
        const v2 = hi2 % 1;
        const w2 = 1 - v2;
        let mg = 0;
        switch (Math.floor(hi2)) {
          case 0:
            pure[0] = 1;
            pure[1] = v2;
            pure[2] = 0;
            break;
          case 1:
            pure[0] = w2;
            pure[1] = 1;
            pure[2] = 0;
            break;
          case 2:
            pure[0] = 0;
            pure[1] = 1;
            pure[2] = v2;
            break;
          case 3:
            pure[0] = 0;
            pure[1] = w2;
            pure[2] = 1;
            break;
          case 4:
            pure[0] = v2;
            pure[1] = 0;
            pure[2] = 1;
            break;
          default:
            pure[0] = 1;
            pure[1] = 0;
            pure[2] = w2;
        }
        mg = (1 - c2) * g2;
        return [
          (c2 * pure[0] + mg) * 255,
          (c2 * pure[1] + mg) * 255,
          (c2 * pure[2] + mg) * 255,
        ];
      };
      convert.hcg.hsv = function (hcg) {
        const c2 = hcg[1] / 100;
        const g2 = hcg[2] / 100;
        const v2 = c2 + g2 * (1 - c2);
        let f2 = 0;
        if (v2 > 0) {
          f2 = c2 / v2;
        }
        return [hcg[0], f2 * 100, v2 * 100];
      };
      convert.hcg.hsl = function (hcg) {
        const c2 = hcg[1] / 100;
        const g2 = hcg[2] / 100;
        const l2 = g2 * (1 - c2) + 0.5 * c2;
        let s = 0;
        if (l2 > 0 && l2 < 0.5) {
          s = c2 / (2 * l2);
        } else if (l2 >= 0.5 && l2 < 1) {
          s = c2 / (2 * (1 - l2));
        }
        return [hcg[0], s * 100, l2 * 100];
      };
      convert.hcg.hwb = function (hcg) {
        const c2 = hcg[1] / 100;
        const g2 = hcg[2] / 100;
        const v2 = c2 + g2 * (1 - c2);
        return [hcg[0], (v2 - c2) * 100, (1 - v2) * 100];
      };
      convert.hwb.hcg = function (hwb) {
        const w2 = hwb[1] / 100;
        const b2 = hwb[2] / 100;
        const v2 = 1 - b2;
        const c2 = v2 - w2;
        let g2 = 0;
        if (c2 < 1) {
          g2 = (v2 - c2) / (1 - c2);
        }
        return [hwb[0], c2 * 100, g2 * 100];
      };
      convert.apple.rgb = function (apple) {
        return [
          (apple[0] / 65535) * 255,
          (apple[1] / 65535) * 255,
          (apple[2] / 65535) * 255,
        ];
      };
      convert.rgb.apple = function (rgb) {
        return [
          (rgb[0] / 255) * 65535,
          (rgb[1] / 255) * 65535,
          (rgb[2] / 255) * 65535,
        ];
      };
      convert.gray.rgb = function (args) {
        return [
          (args[0] / 100) * 255,
          (args[0] / 100) * 255,
          (args[0] / 100) * 255,
        ];
      };
      convert.gray.hsl = function (args) {
        return [0, 0, args[0]];
      };
      convert.gray.hsv = convert.gray.hsl;
      convert.gray.hwb = function (gray) {
        return [0, 100, gray[0]];
      };
      convert.gray.cmyk = function (gray) {
        return [0, 0, 0, gray[0]];
      };
      convert.gray.lab = function (gray) {
        return [gray[0], 0, 0];
      };
      convert.gray.hex = function (gray) {
        const val = Math.round((gray[0] / 100) * 255) & 255;
        const integer = (val << 16) + (val << 8) + val;
        const string = integer.toString(16).toUpperCase();
        return "000000".substring(string.length) + string;
      };
      convert.rgb.gray = function (rgb) {
        const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
        return [(val / 255) * 100];
      };
    },
  });

  // node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/route.js
  var require_route = __commonJS({
    "node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/route.js"(
      exports,
      module
    ) {
      "use strict";
      var conversions = require_conversions();
      function buildGraph() {
        const graph = {};
        const models = Object.keys(conversions);
        for (let len = models.length, i = 0; i < len; i++) {
          graph[models[i]] = {
            // http://jsperf.com/1-vs-infinity
            // micro-opt, but this is simple.
            distance: -1,
            parent: null,
          };
        }
        return graph;
      }
      function deriveBFS(fromModel) {
        const graph = buildGraph();
        const queue = [fromModel];
        graph[fromModel].distance = 0;
        while (queue.length) {
          const current = queue.pop();
          const adjacents = Object.keys(conversions[current]);
          for (let len = adjacents.length, i = 0; i < len; i++) {
            const adjacent = adjacents[i];
            const node = graph[adjacent];
            if (node.distance === -1) {
              node.distance = graph[current].distance + 1;
              node.parent = current;
              queue.unshift(adjacent);
            }
          }
        }
        return graph;
      }
      function link(from, to) {
        return function (args) {
          return to(from(args));
        };
      }
      function wrapConversion(toModel, graph) {
        const path = [graph[toModel].parent, toModel];
        let fn2 = conversions[graph[toModel].parent][toModel];
        let cur = graph[toModel].parent;
        while (graph[cur].parent) {
          path.unshift(graph[cur].parent);
          fn2 = link(conversions[graph[cur].parent][cur], fn2);
          cur = graph[cur].parent;
        }
        fn2.conversion = path;
        return fn2;
      }
      module.exports = function (fromModel) {
        const graph = deriveBFS(fromModel);
        const conversion = {};
        const models = Object.keys(graph);
        for (let len = models.length, i = 0; i < len; i++) {
          const toModel = models[i];
          const node = graph[toModel];
          if (node.parent === null) {
            continue;
          }
          conversion[toModel] = wrapConversion(toModel, graph);
        }
        return conversion;
      };
    },
  });

  // node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/index.js
  var require_color_convert = __commonJS({
    "node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/index.js"(
      exports,
      module
    ) {
      "use strict";
      var conversions = require_conversions();
      var route = require_route();
      var convert = {};
      var models = Object.keys(conversions);
      function wrapRaw(fn2) {
        const wrappedFn = function (...args) {
          const arg0 = args[0];
          if (arg0 === void 0 || arg0 === null) {
            return arg0;
          }
          if (arg0.length > 1) {
            args = arg0;
          }
          return fn2(args);
        };
        if ("conversion" in fn2) {
          wrappedFn.conversion = fn2.conversion;
        }
        return wrappedFn;
      }
      function wrapRounded(fn2) {
        const wrappedFn = function (...args) {
          const arg0 = args[0];
          if (arg0 === void 0 || arg0 === null) {
            return arg0;
          }
          if (arg0.length > 1) {
            args = arg0;
          }
          const result = fn2(args);
          if (typeof result === "object") {
            for (let len = result.length, i = 0; i < len; i++) {
              result[i] = Math.round(result[i]);
            }
          }
          return result;
        };
        if ("conversion" in fn2) {
          wrappedFn.conversion = fn2.conversion;
        }
        return wrappedFn;
      }
      models.forEach((fromModel) => {
        convert[fromModel] = {};
        Object.defineProperty(convert[fromModel], "channels", {
          value: conversions[fromModel].channels,
        });
        Object.defineProperty(convert[fromModel], "labels", {
          value: conversions[fromModel].labels,
        });
        const routes = route(fromModel);
        const routeModels = Object.keys(routes);
        routeModels.forEach((toModel) => {
          const fn2 = routes[toModel];
          convert[fromModel][toModel] = wrapRounded(fn2);
          convert[fromModel][toModel].raw = wrapRaw(fn2);
        });
      });
      module.exports = convert;
    },
  });

  // node_modules/.pnpm/color@4.2.3/node_modules/color/index.js
  var require_color = __commonJS({
    "node_modules/.pnpm/color@4.2.3/node_modules/color/index.js"(
      exports,
      module
    ) {
      "use strict";
      var colorString = require_color_string();
      var convert = require_color_convert();
      var skippedModels = [
        // To be honest, I don't really feel like keyword belongs in color convert, but eh.
        "keyword",
        // Gray conflicts with some method names, and has its own method defined.
        "gray",
        // Shouldn't really be in color-convert either...
        "hex",
      ];
      var hashedModelKeys = {};
      for (const model of Object.keys(convert)) {
        hashedModelKeys[[...convert[model].labels].sort().join("")] = model;
      }
      var limiters = {};
      function Color2(object, model) {
        if (!(this instanceof Color2)) {
          return new Color2(object, model);
        }
        if (model && model in skippedModels) {
          model = null;
        }
        if (model && !(model in convert)) {
          throw new Error("Unknown model: " + model);
        }
        let i;
        let channels;
        if (object == null) {
          this.model = "rgb";
          this.color = [0, 0, 0];
          this.valpha = 1;
        } else if (object instanceof Color2) {
          this.model = object.model;
          this.color = [...object.color];
          this.valpha = object.valpha;
        } else if (typeof object === "string") {
          const result = colorString.get(object);
          if (result === null) {
            throw new Error("Unable to parse color from string: " + object);
          }
          this.model = result.model;
          channels = convert[this.model].channels;
          this.color = result.value.slice(0, channels);
          this.valpha =
            typeof result.value[channels] === "number"
              ? result.value[channels]
              : 1;
        } else if (object.length > 0) {
          this.model = model || "rgb";
          channels = convert[this.model].channels;
          const newArray = Array.prototype.slice.call(object, 0, channels);
          this.color = zeroArray(newArray, channels);
          this.valpha =
            typeof object[channels] === "number" ? object[channels] : 1;
        } else if (typeof object === "number") {
          this.model = "rgb";
          this.color = [
            (object >> 16) & 255,
            (object >> 8) & 255,
            object & 255,
          ];
          this.valpha = 1;
        } else {
          this.valpha = 1;
          const keys = Object.keys(object);
          if ("alpha" in object) {
            keys.splice(keys.indexOf("alpha"), 1);
            this.valpha = typeof object.alpha === "number" ? object.alpha : 0;
          }
          const hashedKeys = keys.sort().join("");
          if (!(hashedKeys in hashedModelKeys)) {
            throw new Error(
              "Unable to parse color from object: " + JSON.stringify(object)
            );
          }
          this.model = hashedModelKeys[hashedKeys];
          const { labels } = convert[this.model];
          const color = [];
          for (i = 0; i < labels.length; i++) {
            color.push(object[labels[i]]);
          }
          this.color = zeroArray(color);
        }
        if (limiters[this.model]) {
          channels = convert[this.model].channels;
          for (i = 0; i < channels; i++) {
            const limit = limiters[this.model][i];
            if (limit) {
              this.color[i] = limit(this.color[i]);
            }
          }
        }
        this.valpha = Math.max(0, Math.min(1, this.valpha));
        if (Object.freeze) {
          Object.freeze(this);
        }
      }
      Color2.prototype = {
        toString() {
          return this.string();
        },
        toJSON() {
          return this[this.model]();
        },
        string(places) {
          let self2 = this.model in colorString.to ? this : this.rgb();
          self2 = self2.round(typeof places === "number" ? places : 1);
          const args =
            self2.valpha === 1 ? self2.color : [...self2.color, this.valpha];
          return colorString.to[self2.model](args);
        },
        percentString(places) {
          const self2 = this.rgb().round(
            typeof places === "number" ? places : 1
          );
          const args =
            self2.valpha === 1 ? self2.color : [...self2.color, this.valpha];
          return colorString.to.rgb.percent(args);
        },
        array() {
          return this.valpha === 1
            ? [...this.color]
            : [...this.color, this.valpha];
        },
        object() {
          const result = {};
          const { channels } = convert[this.model];
          const { labels } = convert[this.model];
          for (let i = 0; i < channels; i++) {
            result[labels[i]] = this.color[i];
          }
          if (this.valpha !== 1) {
            result.alpha = this.valpha;
          }
          return result;
        },
        unitArray() {
          const rgb = this.rgb().color;
          rgb[0] /= 255;
          rgb[1] /= 255;
          rgb[2] /= 255;
          if (this.valpha !== 1) {
            rgb.push(this.valpha);
          }
          return rgb;
        },
        unitObject() {
          const rgb = this.rgb().object();
          rgb.r /= 255;
          rgb.g /= 255;
          rgb.b /= 255;
          if (this.valpha !== 1) {
            rgb.alpha = this.valpha;
          }
          return rgb;
        },
        round(places) {
          places = Math.max(places || 0, 0);
          return new Color2(
            [...this.color.map(roundToPlace(places)), this.valpha],
            this.model
          );
        },
        alpha(value) {
          if (value !== void 0) {
            return new Color2(
              [...this.color, Math.max(0, Math.min(1, value))],
              this.model
            );
          }
          return this.valpha;
        },
        // Rgb
        red: getset("rgb", 0, maxfn(255)),
        green: getset("rgb", 1, maxfn(255)),
        blue: getset("rgb", 2, maxfn(255)),
        hue: getset(
          ["hsl", "hsv", "hsl", "hwb", "hcg"],
          0,
          (value) => ((value % 360) + 360) % 360
        ),
        saturationl: getset("hsl", 1, maxfn(100)),
        lightness: getset("hsl", 2, maxfn(100)),
        saturationv: getset("hsv", 1, maxfn(100)),
        value: getset("hsv", 2, maxfn(100)),
        chroma: getset("hcg", 1, maxfn(100)),
        gray: getset("hcg", 2, maxfn(100)),
        white: getset("hwb", 1, maxfn(100)),
        wblack: getset("hwb", 2, maxfn(100)),
        cyan: getset("cmyk", 0, maxfn(100)),
        magenta: getset("cmyk", 1, maxfn(100)),
        yellow: getset("cmyk", 2, maxfn(100)),
        black: getset("cmyk", 3, maxfn(100)),
        x: getset("xyz", 0, maxfn(95.047)),
        y: getset("xyz", 1, maxfn(100)),
        z: getset("xyz", 2, maxfn(108.833)),
        l: getset("lab", 0, maxfn(100)),
        a: getset("lab", 1),
        b: getset("lab", 2),
        keyword(value) {
          if (value !== void 0) {
            return new Color2(value);
          }
          return convert[this.model].keyword(this.color);
        },
        hex(value) {
          if (value !== void 0) {
            return new Color2(value);
          }
          return colorString.to.hex(this.rgb().round().color);
        },
        hexa(value) {
          if (value !== void 0) {
            return new Color2(value);
          }
          const rgbArray = this.rgb().round().color;
          let alphaHex = Math.round(this.valpha * 255)
            .toString(16)
            .toUpperCase();
          if (alphaHex.length === 1) {
            alphaHex = "0" + alphaHex;
          }
          return colorString.to.hex(rgbArray) + alphaHex;
        },
        rgbNumber() {
          const rgb = this.rgb().color;
          return (
            ((rgb[0] & 255) << 16) | ((rgb[1] & 255) << 8) | (rgb[2] & 255)
          );
        },
        luminosity() {
          const rgb = this.rgb().color;
          const lum = [];
          for (const [i, element] of rgb.entries()) {
            const chan = element / 255;
            lum[i] =
              chan <= 0.04045
                ? chan / 12.92
                : __pow((chan + 0.055) / 1.055, 2.4);
          }
          return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
        },
        contrast(color2) {
          const lum1 = this.luminosity();
          const lum2 = color2.luminosity();
          if (lum1 > lum2) {
            return (lum1 + 0.05) / (lum2 + 0.05);
          }
          return (lum2 + 0.05) / (lum1 + 0.05);
        },
        level(color2) {
          const contrastRatio = this.contrast(color2);
          if (contrastRatio >= 7) {
            return "AAA";
          }
          return contrastRatio >= 4.5 ? "AA" : "";
        },
        isDark() {
          const rgb = this.rgb().color;
          const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 1e4;
          return yiq < 128;
        },
        isLight() {
          return !this.isDark();
        },
        negate() {
          const rgb = this.rgb();
          for (let i = 0; i < 3; i++) {
            rgb.color[i] = 255 - rgb.color[i];
          }
          return rgb;
        },
        lighten(ratio) {
          const hsl = this.hsl();
          hsl.color[2] += hsl.color[2] * ratio;
          return hsl;
        },
        darken(ratio) {
          const hsl = this.hsl();
          hsl.color[2] -= hsl.color[2] * ratio;
          return hsl;
        },
        saturate(ratio) {
          const hsl = this.hsl();
          hsl.color[1] += hsl.color[1] * ratio;
          return hsl;
        },
        desaturate(ratio) {
          const hsl = this.hsl();
          hsl.color[1] -= hsl.color[1] * ratio;
          return hsl;
        },
        whiten(ratio) {
          const hwb = this.hwb();
          hwb.color[1] += hwb.color[1] * ratio;
          return hwb;
        },
        blacken(ratio) {
          const hwb = this.hwb();
          hwb.color[2] += hwb.color[2] * ratio;
          return hwb;
        },
        grayscale() {
          const rgb = this.rgb().color;
          const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
          return Color2.rgb(value, value, value);
        },
        fade(ratio) {
          return this.alpha(this.valpha - this.valpha * ratio);
        },
        opaquer(ratio) {
          return this.alpha(this.valpha + this.valpha * ratio);
        },
        rotate(degrees) {
          const hsl = this.hsl();
          let hue = hsl.color[0];
          hue = (hue + degrees) % 360;
          hue = hue < 0 ? 360 + hue : hue;
          hsl.color[0] = hue;
          return hsl;
        },
        mix(mixinColor, weight) {
          if (!mixinColor || !mixinColor.rgb) {
            throw new Error(
              'Argument to "mix" was not a Color instance, but rather an instance of ' +
                typeof mixinColor
            );
          }
          const color1 = mixinColor.rgb();
          const color2 = this.rgb();
          const p2 = weight === void 0 ? 0.5 : weight;
          const w2 = 2 * p2 - 1;
          const a2 = color1.alpha() - color2.alpha();
          const w1 =
            ((w2 * a2 === -1 ? w2 : (w2 + a2) / (1 + w2 * a2)) + 1) / 2;
          const w22 = 1 - w1;
          return Color2.rgb(
            w1 * color1.red() + w22 * color2.red(),
            w1 * color1.green() + w22 * color2.green(),
            w1 * color1.blue() + w22 * color2.blue(),
            color1.alpha() * p2 + color2.alpha() * (1 - p2)
          );
        },
      };
      for (const model of Object.keys(convert)) {
        if (skippedModels.includes(model)) {
          continue;
        }
        const { channels } = convert[model];
        Color2.prototype[model] = function (...args) {
          if (this.model === model) {
            return new Color2(this);
          }
          if (args.length > 0) {
            return new Color2(args, model);
          }
          return new Color2(
            [
              ...assertArray(convert[this.model][model].raw(this.color)),
              this.valpha,
            ],
            model
          );
        };
        Color2[model] = function (...args) {
          let color = args[0];
          if (typeof color === "number") {
            color = zeroArray(args, channels);
          }
          return new Color2(color, model);
        };
      }
      function roundTo(number, places) {
        return Number(number.toFixed(places));
      }
      function roundToPlace(places) {
        return function (number) {
          return roundTo(number, places);
        };
      }
      function getset(model, channel, modifier) {
        model = Array.isArray(model) ? model : [model];
        for (const m2 of model) {
          (limiters[m2] || (limiters[m2] = []))[channel] = modifier;
        }
        model = model[0];
        return function (value) {
          let result;
          if (value !== void 0) {
            if (modifier) {
              value = modifier(value);
            }
            result = this[model]();
            result.color[channel] = value;
            return result;
          }
          result = this[model]().color[channel];
          if (modifier) {
            result = modifier(result);
          }
          return result;
        };
      }
      function maxfn(max) {
        return function (v2) {
          return Math.max(0, Math.min(max, v2));
        };
      }
      function assertArray(value) {
        return Array.isArray(value) ? value : [value];
      }
      function zeroArray(array, length) {
        for (let i = 0; i < length; i++) {
          if (typeof array[i] !== "number") {
            array[i] = 0;
          }
        }
        return array;
      }
      module.exports = Color2;
    },
  });

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    ColorType: () => bn,
    CrosshairMode: () => it,
    LastPriceAnimationMode: () => vn,
    LineStyle: () => r,
    LineType: () => e,
    MismatchDirection: () => yi,
    PriceLineSource: () => mn,
    PriceScaleMode: () => qi,
    TickMarkType: () => fn,
    TrackingModeExitMode: () => pn,
    createChart: () => Ys,
    csvToJson: () => csvToJson,
    fileToJson: () => fileToJson,
    initChart: () => initChart,
    isBusinessDay: () => yn,
    isUTCTimestamp: () => kn,
    version: () => Xs,
  });

  // node_modules/.pnpm/fancy-canvas@2.1.0/node_modules/fancy-canvas/size.mjs
  function size(_a) {
    var width = _a.width,
      height = _a.height;
    if (width < 0) {
      throw new Error("Negative width is not allowed for Size");
    }
    if (height < 0) {
      throw new Error("Negative height is not allowed for Size");
    }
    return {
      width,
      height,
    };
  }
  function equalSizes(first, second) {
    return first.width === second.width && first.height === second.height;
  }

  // node_modules/.pnpm/fancy-canvas@2.1.0/node_modules/fancy-canvas/device-pixel-ratio.mjs
  var Observable =
    /** @class */
    (function () {
      function Observable2(win) {
        var _this = this;
        this._resolutionListener = function () {
          return _this._onResolutionChanged();
        };
        this._resolutionMediaQueryList = null;
        this._observers = [];
        this._window = win;
        this._installResolutionListener();
      }
      Observable2.prototype.dispose = function () {
        this._uninstallResolutionListener();
        this._window = null;
      };
      Object.defineProperty(Observable2.prototype, "value", {
        get: function () {
          return this._window.devicePixelRatio;
        },
        enumerable: false,
        configurable: true,
      });
      Observable2.prototype.subscribe = function (next) {
        var _this = this;
        var observer = { next };
        this._observers.push(observer);
        return {
          unsubscribe: function () {
            _this._observers = _this._observers.filter(function (o2) {
              return o2 !== observer;
            });
          },
        };
      };
      Observable2.prototype._installResolutionListener = function () {
        if (this._resolutionMediaQueryList !== null) {
          throw new Error("Resolution listener is already installed");
        }
        var dppx = this._window.devicePixelRatio;
        this._resolutionMediaQueryList = this._window.matchMedia(
          "all and (resolution: ".concat(dppx, "dppx)")
        );
        this._resolutionMediaQueryList.addListener(this._resolutionListener);
      };
      Observable2.prototype._uninstallResolutionListener = function () {
        if (this._resolutionMediaQueryList !== null) {
          this._resolutionMediaQueryList.removeListener(
            this._resolutionListener
          );
          this._resolutionMediaQueryList = null;
        }
      };
      Observable2.prototype._reinstallResolutionListener = function () {
        this._uninstallResolutionListener();
        this._installResolutionListener();
      };
      Observable2.prototype._onResolutionChanged = function () {
        var _this = this;
        this._observers.forEach(function (observer) {
          return observer.next(_this._window.devicePixelRatio);
        });
        this._reinstallResolutionListener();
      };
      return Observable2;
    })();
  function createObservable(win) {
    return new Observable(win);
  }

  // node_modules/.pnpm/fancy-canvas@2.1.0/node_modules/fancy-canvas/canvas-element-bitmap-size.mjs
  var DevicePixelContentBoxBinding =
    /** @class */
    (function () {
      function DevicePixelContentBoxBinding2(
        canvasElement,
        transformBitmapSize,
        options
      ) {
        var _a;
        this._canvasElement = null;
        this._bitmapSizeChangedListeners = [];
        this._suggestedBitmapSize = null;
        this._suggestedBitmapSizeChangedListeners = [];
        this._devicePixelRatioObservable = null;
        this._canvasElementResizeObserver = null;
        this._canvasElement = canvasElement;
        this._canvasElementClientSize = size({
          width: this._canvasElement.clientWidth,
          height: this._canvasElement.clientHeight,
        });
        this._transformBitmapSize =
          transformBitmapSize !== null && transformBitmapSize !== void 0
            ? transformBitmapSize
            : function (size2) {
                return size2;
              };
        this._allowResizeObserver =
          (_a =
            options === null || options === void 0
              ? void 0
              : options.allowResizeObserver) !== null && _a !== void 0
            ? _a
            : true;
        this._chooseAndInitObserver();
      }
      DevicePixelContentBoxBinding2.prototype.dispose = function () {
        var _a, _b;
        if (this._canvasElement === null) {
          throw new Error("Object is disposed");
        }
        (_a = this._canvasElementResizeObserver) === null || _a === void 0
          ? void 0
          : _a.disconnect();
        this._canvasElementResizeObserver = null;
        (_b = this._devicePixelRatioObservable) === null || _b === void 0
          ? void 0
          : _b.dispose();
        this._devicePixelRatioObservable = null;
        this._suggestedBitmapSizeChangedListeners.length = 0;
        this._bitmapSizeChangedListeners.length = 0;
        this._canvasElement = null;
      };
      Object.defineProperty(
        DevicePixelContentBoxBinding2.prototype,
        "canvasElement",
        {
          get: function () {
            if (this._canvasElement === null) {
              throw new Error("Object is disposed");
            }
            return this._canvasElement;
          },
          enumerable: false,
          configurable: true,
        }
      );
      Object.defineProperty(
        DevicePixelContentBoxBinding2.prototype,
        "canvasElementClientSize",
        {
          get: function () {
            return this._canvasElementClientSize;
          },
          enumerable: false,
          configurable: true,
        }
      );
      Object.defineProperty(
        DevicePixelContentBoxBinding2.prototype,
        "bitmapSize",
        {
          get: function () {
            return size({
              width: this.canvasElement.width,
              height: this.canvasElement.height,
            });
          },
          enumerable: false,
          configurable: true,
        }
      );
      DevicePixelContentBoxBinding2.prototype.resizeCanvasElement = function (
        clientSize
      ) {
        this._canvasElementClientSize = size(clientSize);
        this.canvasElement.style.width = "".concat(
          this._canvasElementClientSize.width,
          "px"
        );
        this.canvasElement.style.height = "".concat(
          this._canvasElementClientSize.height,
          "px"
        );
        this._invalidateBitmapSize();
      };
      DevicePixelContentBoxBinding2.prototype.subscribeBitmapSizeChanged =
        function (listener) {
          this._bitmapSizeChangedListeners.push(listener);
        };
      DevicePixelContentBoxBinding2.prototype.unsubscribeBitmapSizeChanged =
        function (listener) {
          this._bitmapSizeChangedListeners =
            this._bitmapSizeChangedListeners.filter(function (l2) {
              return l2 !== listener;
            });
        };
      Object.defineProperty(
        DevicePixelContentBoxBinding2.prototype,
        "suggestedBitmapSize",
        {
          get: function () {
            return this._suggestedBitmapSize;
          },
          enumerable: false,
          configurable: true,
        }
      );
      DevicePixelContentBoxBinding2.prototype.subscribeSuggestedBitmapSizeChanged =
        function (listener) {
          this._suggestedBitmapSizeChangedListeners.push(listener);
        };
      DevicePixelContentBoxBinding2.prototype.unsubscribeSuggestedBitmapSizeChanged =
        function (listener) {
          this._suggestedBitmapSizeChangedListeners =
            this._suggestedBitmapSizeChangedListeners.filter(function (l2) {
              return l2 !== listener;
            });
        };
      DevicePixelContentBoxBinding2.prototype.applySuggestedBitmapSize =
        function () {
          if (this._suggestedBitmapSize === null) {
            return;
          }
          var oldSuggestedSize = this._suggestedBitmapSize;
          this._suggestedBitmapSize = null;
          this._resizeBitmap(oldSuggestedSize);
          this._emitSuggestedBitmapSizeChanged(
            oldSuggestedSize,
            this._suggestedBitmapSize
          );
        };
      DevicePixelContentBoxBinding2.prototype._resizeBitmap = function (
        newSize
      ) {
        var oldSize = this.bitmapSize;
        if (equalSizes(oldSize, newSize)) {
          return;
        }
        this.canvasElement.width = newSize.width;
        this.canvasElement.height = newSize.height;
        this._emitBitmapSizeChanged(oldSize, newSize);
      };
      DevicePixelContentBoxBinding2.prototype._emitBitmapSizeChanged =
        function (oldSize, newSize) {
          var _this = this;
          this._bitmapSizeChangedListeners.forEach(function (listener) {
            return listener.call(_this, oldSize, newSize);
          });
        };
      DevicePixelContentBoxBinding2.prototype._suggestNewBitmapSize = function (
        newSize
      ) {
        var oldSuggestedSize = this._suggestedBitmapSize;
        var finalNewSize = size(
          this._transformBitmapSize(newSize, this._canvasElementClientSize)
        );
        var newSuggestedSize = equalSizes(this.bitmapSize, finalNewSize)
          ? null
          : finalNewSize;
        if (oldSuggestedSize === null && newSuggestedSize === null) {
          return;
        }
        if (
          oldSuggestedSize !== null &&
          newSuggestedSize !== null &&
          equalSizes(oldSuggestedSize, newSuggestedSize)
        ) {
          return;
        }
        this._suggestedBitmapSize = newSuggestedSize;
        this._emitSuggestedBitmapSizeChanged(
          oldSuggestedSize,
          newSuggestedSize
        );
      };
      DevicePixelContentBoxBinding2.prototype._emitSuggestedBitmapSizeChanged =
        function (oldSize, newSize) {
          var _this = this;
          this._suggestedBitmapSizeChangedListeners.forEach(function (
            listener
          ) {
            return listener.call(_this, oldSize, newSize);
          });
        };
      DevicePixelContentBoxBinding2.prototype._chooseAndInitObserver =
        function () {
          var _this = this;
          if (!this._allowResizeObserver) {
            this._initDevicePixelRatioObservable();
            return;
          }
          isDevicePixelContentBoxSupported().then(function (isSupported) {
            return isSupported
              ? _this._initResizeObserver()
              : _this._initDevicePixelRatioObservable();
          });
        };
      DevicePixelContentBoxBinding2.prototype._initDevicePixelRatioObservable =
        function () {
          var _this = this;
          if (this._canvasElement === null) {
            return;
          }
          var win = canvasElementWindow(this._canvasElement);
          if (win === null) {
            throw new Error("No window is associated with the canvas");
          }
          this._devicePixelRatioObservable = createObservable(win);
          this._devicePixelRatioObservable.subscribe(function () {
            return _this._invalidateBitmapSize();
          });
          this._invalidateBitmapSize();
        };
      DevicePixelContentBoxBinding2.prototype._invalidateBitmapSize =
        function () {
          var _a, _b;
          if (this._canvasElement === null) {
            return;
          }
          var win = canvasElementWindow(this._canvasElement);
          if (win === null) {
            return;
          }
          var ratio =
            (_b =
              (_a = this._devicePixelRatioObservable) === null || _a === void 0
                ? void 0
                : _a.value) !== null && _b !== void 0
              ? _b
              : win.devicePixelRatio;
          var canvasRects = this._canvasElement.getClientRects();
          var newSize =
            // eslint-disable-next-line no-negated-condition
            canvasRects[0] !== void 0
              ? predictedBitmapSize(canvasRects[0], ratio)
              : size({
                  width: this._canvasElementClientSize.width * ratio,
                  height: this._canvasElementClientSize.height * ratio,
                });
          this._suggestNewBitmapSize(newSize);
        };
      DevicePixelContentBoxBinding2.prototype._initResizeObserver =
        function () {
          var _this = this;
          if (this._canvasElement === null) {
            return;
          }
          this._canvasElementResizeObserver = new ResizeObserver(function (
            entries
          ) {
            var entry = entries.find(function (entry2) {
              return entry2.target === _this._canvasElement;
            });
            if (
              !entry ||
              !entry.devicePixelContentBoxSize ||
              !entry.devicePixelContentBoxSize[0]
            ) {
              return;
            }
            var entrySize = entry.devicePixelContentBoxSize[0];
            var newSize = size({
              width: entrySize.inlineSize,
              height: entrySize.blockSize,
            });
            _this._suggestNewBitmapSize(newSize);
          });
          this._canvasElementResizeObserver.observe(this._canvasElement, {
            box: "device-pixel-content-box",
          });
        };
      return DevicePixelContentBoxBinding2;
    })();
  function bindTo(canvasElement, target) {
    if (target.type === "device-pixel-content-box") {
      return new DevicePixelContentBoxBinding(
        canvasElement,
        target.transform,
        target.options
      );
    }
    throw new Error("Unsupported binding target");
  }
  function canvasElementWindow(canvasElement) {
    return canvasElement.ownerDocument.defaultView;
  }
  function isDevicePixelContentBoxSupported() {
    return new Promise(function (resolve) {
      var ro = new ResizeObserver(function (entries) {
        resolve(
          entries.every(function (entry) {
            return "devicePixelContentBoxSize" in entry;
          })
        );
        ro.disconnect();
      });
      ro.observe(document.body, { box: "device-pixel-content-box" });
    }).catch(function () {
      return false;
    });
  }
  function predictedBitmapSize(canvasRect, ratio) {
    return size({
      width:
        Math.round(canvasRect.left * ratio + canvasRect.width * ratio) -
        Math.round(canvasRect.left * ratio),
      height:
        Math.round(canvasRect.top * ratio + canvasRect.height * ratio) -
        Math.round(canvasRect.top * ratio),
    });
  }

  // node_modules/.pnpm/fancy-canvas@2.1.0/node_modules/fancy-canvas/canvas-rendering-target.mjs
  var CanvasRenderingTarget2D =
    /** @class */
    (function () {
      function CanvasRenderingTarget2D2(context, mediaSize, bitmapSize) {
        if (mediaSize.width === 0 || mediaSize.height === 0) {
          throw new TypeError(
            "Rendering target could only be created on a media with positive width and height"
          );
        }
        this._mediaSize = mediaSize;
        if (bitmapSize.width === 0 || bitmapSize.height === 0) {
          throw new TypeError(
            "Rendering target could only be created using a bitmap with positive integer width and height"
          );
        }
        this._bitmapSize = bitmapSize;
        this._context = context;
      }
      CanvasRenderingTarget2D2.prototype.useMediaCoordinateSpace = function (
        f2
      ) {
        try {
          this._context.save();
          this._context.setTransform(1, 0, 0, 1, 0, 0);
          this._context.scale(
            this._horizontalPixelRatio,
            this._verticalPixelRatio
          );
          return f2({
            context: this._context,
            mediaSize: this._mediaSize,
          });
        } finally {
          this._context.restore();
        }
      };
      CanvasRenderingTarget2D2.prototype.useBitmapCoordinateSpace = function (
        f2
      ) {
        try {
          this._context.save();
          this._context.setTransform(1, 0, 0, 1, 0, 0);
          return f2({
            context: this._context,
            mediaSize: this._mediaSize,
            bitmapSize: this._bitmapSize,
            horizontalPixelRatio: this._horizontalPixelRatio,
            verticalPixelRatio: this._verticalPixelRatio,
          });
        } finally {
          this._context.restore();
        }
      };
      Object.defineProperty(
        CanvasRenderingTarget2D2.prototype,
        "_horizontalPixelRatio",
        {
          get: function () {
            return this._bitmapSize.width / this._mediaSize.width;
          },
          enumerable: false,
          configurable: true,
        }
      );
      Object.defineProperty(
        CanvasRenderingTarget2D2.prototype,
        "_verticalPixelRatio",
        {
          get: function () {
            return this._bitmapSize.height / this._mediaSize.height;
          },
          enumerable: false,
          configurable: true,
        }
      );
      return CanvasRenderingTarget2D2;
    })();
  function tryCreateCanvasRenderingTarget2D(binding, contextOptions) {
    var mediaSize = binding.canvasElementClientSize;
    if (mediaSize.width === 0 || mediaSize.height === 0) {
      return null;
    }
    var bitmapSize = binding.bitmapSize;
    if (bitmapSize.width === 0 || bitmapSize.height === 0) {
      return null;
    }
    var context = binding.canvasElement.getContext("2d", contextOptions);
    if (context === null) {
      return null;
    }
    return new CanvasRenderingTarget2D(context, mediaSize, bitmapSize);
  }

  // node_modules/.pnpm/lightweight-charts@4.0.1/node_modules/lightweight-charts/dist/lightweight-charts.production.mjs
  var e;
  var r;
  function h(t, i) {
    const n = {
      0: [],
      1: [t.lineWidth, t.lineWidth],
      2: [2 * t.lineWidth, 2 * t.lineWidth],
      3: [6 * t.lineWidth, 6 * t.lineWidth],
      4: [t.lineWidth, 4 * t.lineWidth],
    }[i];
    t.setLineDash(n);
  }
  function l(t, i, n, s) {
    t.beginPath();
    const e2 = t.lineWidth % 2 ? 0.5 : 0;
    t.moveTo(n, i + e2), t.lineTo(s, i + e2), t.stroke();
  }
  function a(t, i) {
    if (!t) throw new Error("Assertion failed" + (i ? ": " + i : ""));
  }
  function o(t) {
    if (void 0 === t) throw new Error("Value is undefined");
    return t;
  }
  function _(t) {
    if (null === t) throw new Error("Value is null");
    return t;
  }
  function u(t) {
    return _(o(t));
  }
  !(function (t) {
    (t[(t.Simple = 0)] = "Simple"),
      (t[(t.WithSteps = 1)] = "WithSteps"),
      (t[(t.Curved = 2)] = "Curved");
  })(e || (e = {})),
    (function (t) {
      (t[(t.Solid = 0)] = "Solid"),
        (t[(t.Dotted = 1)] = "Dotted"),
        (t[(t.Dashed = 2)] = "Dashed"),
        (t[(t.LargeDashed = 3)] = "LargeDashed"),
        (t[(t.SparseDotted = 4)] = "SparseDotted");
    })(r || (r = {}));
  var c = {
    khaki: "#f0e68c",
    azure: "#f0ffff",
    aliceblue: "#f0f8ff",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gainsboro: "#dcdcdc",
    gray: "#808080",
    green: "#008000",
    honeydew: "#f0fff0",
    floralwhite: "#fffaf0",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lemonchiffon: "#fffacd",
    hotpink: "#ff69b4",
    lightyellow: "#ffffe0",
    greenyellow: "#adff2f",
    lightgoldenrodyellow: "#fafad2",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    lightcyan: "#e0ffff",
    magenta: "#f0f",
    maroon: "#800000",
    olive: "#808000",
    orange: "#ffa500",
    oldlace: "#fdf5e6",
    mediumblue: "#0000cd",
    transparent: "#0000",
    lime: "#0f0",
    lightpink: "#ffb6c1",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    midnightblue: "#191970",
    orchid: "#da70d6",
    mediumorchid: "#ba55d3",
    mediumturquoise: "#48d1cc",
    orangered: "#ff4500",
    royalblue: "#4169e1",
    powderblue: "#b0e0e6",
    red: "#f00",
    coral: "#ff7f50",
    turquoise: "#40e0d0",
    white: "#fff",
    whitesmoke: "#f5f5f5",
    wheat: "#f5deb3",
    teal: "#008080",
    steelblue: "#4682b4",
    bisque: "#ffe4c4",
    aquamarine: "#7fffd4",
    aqua: "#0ff",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    springgreen: "#00ff7f",
    antiquewhite: "#faebd7",
    burlywood: "#deb887",
    brown: "#a52a2a",
    beige: "#f5f5dc",
    chocolate: "#d2691e",
    chartreuse: "#7fff00",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cadetblue: "#5f9ea0",
    tomato: "#ff6347",
    fuchsia: "#f0f",
    blue: "#00f",
    salmon: "#fa8072",
    blanchedalmond: "#ffebcd",
    slateblue: "#6a5acd",
    slategray: "#708090",
    thistle: "#d8bfd8",
    tan: "#d2b48c",
    cyan: "#0ff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    blueviolet: "#8a2be2",
    black: "#000",
    darkmagenta: "#8b008b",
    darkslateblue: "#483d8b",
    darkkhaki: "#bdb76b",
    darkorchid: "#9932cc",
    darkorange: "#ff8c00",
    darkgreen: "#006400",
    darkred: "#8b0000",
    dodgerblue: "#1e90ff",
    darkslategray: "#2f4f4f",
    dimgray: "#696969",
    deepskyblue: "#00bfff",
    firebrick: "#b22222",
    forestgreen: "#228b22",
    indigo: "#4b0082",
    ivory: "#fffff0",
    lavenderblush: "#fff0f5",
    feldspar: "#d19275",
    indianred: "#cd5c5c",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightskyblue: "#87cefa",
    lightslategray: "#789",
    lightslateblue: "#8470ff",
    snow: "#fffafa",
    lightseagreen: "#20b2aa",
    lightsalmon: "#ffa07a",
    darksalmon: "#e9967a",
    darkviolet: "#9400d3",
    mediumpurple: "#9370d8",
    mediumaquamarine: "#66cdaa",
    skyblue: "#87ceeb",
    lavender: "#e6e6fa",
    lightsteelblue: "#b0c4de",
    mediumvioletred: "#c71585",
    mintcream: "#f5fffa",
    navajowhite: "#ffdead",
    navy: "#000080",
    olivedrab: "#6b8e23",
    palevioletred: "#d87093",
    violetred: "#d02090",
    yellow: "#ff0",
    yellowgreen: "#9acd32",
    lawngreen: "#7cfc00",
    pink: "#ffc0cb",
    paleturquoise: "#afeeee",
    palegoldenrod: "#eee8aa",
    darkolivegreen: "#556b2f",
    darkseagreen: "#8fbc8f",
    darkturquoise: "#00ced1",
    peachpuff: "#ffdab9",
    deeppink: "#ff1493",
    violet: "#ee82ee",
    palegreen: "#98fb98",
    mediumseagreen: "#3cb371",
    peru: "#cd853f",
    saddlebrown: "#8b4513",
    sandybrown: "#f4a460",
    rosybrown: "#bc8f8f",
    purple: "#800080",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    papayawhip: "#ffefd5",
    mediumslateblue: "#7b68ee",
    plum: "#dda0dd",
    mediumspringgreen: "#00fa9a",
  };
  function d(t) {
    return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0;
  }
  function f(t) {
    return t <= 0 || t > 0
      ? t < 0
        ? 0
        : t > 1
        ? 1
        : Math.round(1e4 * t) / 1e4
      : 0;
  }
  var p = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i;
  var v = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i;
  var m = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/;
  var b =
    /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/;
  function g(t) {
    (t = t.toLowerCase()) in c && (t = c[t]);
    {
      const i = b.exec(t) || m.exec(t);
      if (i)
        return [
          d(parseInt(i[1], 10)),
          d(parseInt(i[2], 10)),
          d(parseInt(i[3], 10)),
          f(i.length < 5 ? 1 : parseFloat(i[4])),
        ];
    }
    {
      const i = v.exec(t);
      if (i)
        return [
          d(parseInt(i[1], 16)),
          d(parseInt(i[2], 16)),
          d(parseInt(i[3], 16)),
          1,
        ];
    }
    {
      const i = p.exec(t);
      if (i)
        return [
          d(17 * parseInt(i[1], 16)),
          d(17 * parseInt(i[2], 16)),
          d(17 * parseInt(i[3], 16)),
          1,
        ];
    }
    throw new Error(`Cannot parse color: ${t}`);
  }
  function w(t) {
    const i = g(t);
    return {
      t: `rgb(${i[0]}, ${i[1]}, ${i[2]})`,
      i:
        ((n = i),
        0.199 * n[0] + 0.687 * n[1] + 0.114 * n[2] > 160 ? "black" : "white"),
    };
    var n;
  }
  var M = class {
    constructor() {
      this.h = [];
    }
    l(t, i, n) {
      const s = { o: t, _: i, u: true === n };
      this.h.push(s);
    }
    p(t) {
      const i = this.h.findIndex((i2) => t === i2.o);
      i > -1 && this.h.splice(i, 1);
    }
    v(t) {
      this.h = this.h.filter((i) => i._ !== t);
    }
    m(t, i, n) {
      const s = [...this.h];
      (this.h = this.h.filter((t2) => !t2.u)), s.forEach((s2) => s2.o(t, i, n));
    }
    g() {
      return this.h.length > 0;
    }
    M() {
      this.h = [];
    }
  };
  function S(t, ...i) {
    for (const n of i)
      for (const i2 in n)
        void 0 !== n[i2] &&
          ("object" != typeof n[i2] || void 0 === t[i2]
            ? (t[i2] = n[i2])
            : S(t[i2], n[i2]));
    return t;
  }
  function x(t) {
    return "number" == typeof t && isFinite(t);
  }
  function y(t) {
    return "number" == typeof t && t % 1 == 0;
  }
  function k(t) {
    return "string" == typeof t;
  }
  function C(t) {
    return "boolean" == typeof t;
  }
  function T(t) {
    const i = t;
    if (!i || "object" != typeof i) return i;
    let n, s, e2;
    for (s in ((n = Array.isArray(i) ? [] : {}), i))
      i.hasOwnProperty(s) &&
        ((e2 = i[s]), (n[s] = e2 && "object" == typeof e2 ? T(e2) : e2));
    return n;
  }
  function P(t) {
    return null !== t;
  }
  function R(t) {
    return null === t ? void 0 : t;
  }
  var D =
    "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";
  function B(t, i, n) {
    return (
      void 0 === i && (i = D), `${(n = void 0 !== n ? `${n} ` : "")}${t}px ${i}`
    );
  }
  var A = class {
    constructor(t) {
      (this.S = {
        k: 1,
        C: 5,
        T: NaN,
        P: "",
        R: "",
        D: "",
        B: "",
        A: 0,
        O: 0,
        L: 0,
        I: 0,
        V: 0,
      }),
        (this.N = t);
    }
    F() {
      const t = this.S,
        i = this.W(),
        n = this.j();
      return (
        (t.T === i && t.R === n) ||
          ((t.T = i),
          (t.R = n),
          (t.P = B(i, n)),
          (t.I = (2.5 / 12) * i),
          (t.A = t.I),
          (t.O = (i / 12) * t.C),
          (t.L = (i / 12) * t.C),
          (t.V = 0)),
        (t.D = this.$()),
        (t.B = this.H()),
        this.S
      );
    }
    $() {
      return this.N.F().layout.textColor;
    }
    H() {
      return this.N.U();
    }
    W() {
      return this.N.F().layout.fontSize;
    }
    j() {
      return this.N.F().layout.fontFamily;
    }
  };
  var O = class {
    constructor() {
      this.q = [];
    }
    Y(t) {
      this.q = t;
    }
    X(t, i, n) {
      this.q.forEach((s) => {
        s.X(t, i, n);
      });
    }
  };
  var L = class {
    X(t, i, n) {
      t.useMediaCoordinateSpace((t2) => this.Z(t2, i, n));
    }
    K(t, i, n) {
      t.useMediaCoordinateSpace((t2) => this.G(t2, i, n));
    }
    G(t, i, n) {}
  };
  var I = class extends L {
    constructor() {
      super(...arguments), (this.J = null);
    }
    tt(t) {
      this.J = t;
    }
    Z({ context: t }) {
      if (null === this.J || null === this.J.it) return;
      const i = this.J.it,
        n = this.J,
        s = (s2) => {
          t.beginPath();
          for (let e2 = i.to - 1; e2 >= i.from; --e2) {
            const i2 = n.nt[e2];
            t.moveTo(i2.st, i2.et), t.arc(i2.st, i2.et, s2, 0, 2 * Math.PI);
          }
          t.fill();
        };
      n.rt > 0 && ((t.fillStyle = n.ht), s(n.lt + n.rt)),
        (t.fillStyle = n.ot),
        s(n.lt);
    }
  };
  function E() {
    return {
      nt: [{ st: 0, et: 0, _t: 0, ut: 0 }],
      ot: "",
      ht: "",
      lt: 0,
      rt: 0,
      it: null,
    };
  }
  var z = { from: 0, to: 1 };
  var V = class {
    constructor(t, i) {
      (this.ct = new O()),
        (this.dt = []),
        (this.ft = []),
        (this.vt = true),
        (this.N = t),
        (this.bt = i),
        this.ct.Y(this.dt);
    }
    gt(t) {
      const i = this.N.wt();
      i.length !== this.dt.length &&
        ((this.ft = i.map(E)),
        (this.dt = this.ft.map((t2) => {
          const i2 = new I();
          return i2.tt(t2), i2;
        })),
        this.ct.Y(this.dt)),
        (this.vt = true);
    }
    Mt() {
      return this.vt && (this.St(), (this.vt = false)), this.ct;
    }
    St() {
      const t = this.N.wt(),
        i = this.bt.xt(),
        n = this.N.yt();
      t.forEach((t2, s) => {
        var e2;
        const r2 = this.ft[s],
          h2 = t2.kt(i);
        if (null === h2 || !t2.Ct()) return void (r2.it = null);
        const l2 = _(t2.Tt());
        (r2.ot = h2.Pt),
          (r2.lt = h2.lt),
          (r2.rt = h2.Rt),
          (r2.nt[0].ut = h2.ut),
          (r2.nt[0].et = t2.Bt().Dt(h2.ut, l2.At)),
          (r2.ht =
            null !== (e2 = h2.Ot) && void 0 !== e2
              ? e2
              : this.N.Lt(r2.nt[0].et / t2.Bt().It())),
          (r2.nt[0]._t = i),
          (r2.nt[0].st = n.Et(i)),
          (r2.it = z);
      });
    }
  };
  var N = class {
    X(t, i, n) {
      t.useBitmapCoordinateSpace((t2) => this.Z(t2, i, n));
    }
  };
  var F = class extends N {
    constructor(t) {
      super(), (this.zt = t);
    }
    Z({
      context: t,
      bitmapSize: i,
      horizontalPixelRatio: n,
      verticalPixelRatio: s,
    }) {
      if (null === this.zt) return;
      const e2 = this.zt.Vt.Ct,
        r2 = this.zt.Nt.Ct;
      if (!e2 && !r2) return;
      const a2 = Math.round(this.zt.st * n),
        o2 = Math.round(this.zt.et * s);
      (t.lineCap = "butt"),
        e2 &&
          a2 >= 0 &&
          ((t.lineWidth = Math.floor(this.zt.Vt.rt * n)),
          (t.strokeStyle = this.zt.Vt.D),
          (t.fillStyle = this.zt.Vt.D),
          h(t, this.zt.Vt.Ft),
          (function (t2, i2, n2, s2) {
            t2.beginPath();
            const e3 = t2.lineWidth % 2 ? 0.5 : 0;
            t2.moveTo(i2 + e3, n2), t2.lineTo(i2 + e3, s2), t2.stroke();
          })(t, a2, 0, i.height)),
        r2 &&
          o2 >= 0 &&
          ((t.lineWidth = Math.floor(this.zt.Nt.rt * s)),
          (t.strokeStyle = this.zt.Nt.D),
          (t.fillStyle = this.zt.Nt.D),
          h(t, this.zt.Nt.Ft),
          l(t, o2, 0, i.width));
    }
  };
  var W = class {
    constructor(t) {
      (this.vt = true),
        (this.Wt = {
          Vt: { rt: 1, Ft: 0, D: "", Ct: false },
          Nt: { rt: 1, Ft: 0, D: "", Ct: false },
          st: 0,
          et: 0,
        }),
        (this.jt = new F(this.Wt)),
        (this.$t = t);
    }
    gt() {
      this.vt = true;
    }
    Mt() {
      return this.vt && (this.St(), (this.vt = false)), this.jt;
    }
    St() {
      const t = this.$t.Ct(),
        i = _(this.$t.Ht()),
        n = i.Ut().F().crosshair,
        s = this.Wt;
      (s.Nt.Ct = t && this.$t.qt(i)),
        (s.Vt.Ct = t && this.$t.Yt()),
        (s.Nt.rt = n.horzLine.width),
        (s.Nt.Ft = n.horzLine.style),
        (s.Nt.D = n.horzLine.color),
        (s.Vt.rt = n.vertLine.width),
        (s.Vt.Ft = n.vertLine.style),
        (s.Vt.D = n.vertLine.color),
        (s.st = this.$t.Xt()),
        (s.et = this.$t.Zt());
    }
  };
  function j(t, i, n, s, e2, r2) {
    t.fillRect(i + r2, n, s - 2 * r2, r2),
      t.fillRect(i + r2, n + e2 - r2, s - 2 * r2, r2),
      t.fillRect(i, n, r2, e2),
      t.fillRect(i + s - r2, n, r2, e2);
  }
  function $(t, i, n, s, e2, r2) {
    t.save(),
      (t.globalCompositeOperation = "copy"),
      (t.fillStyle = r2),
      t.fillRect(i, n, s, e2),
      t.restore();
  }
  function H(t, i) {
    return Array.isArray(t) ? t.map((t2) => (0 === t2 ? t2 : t2 + i)) : t + i;
  }
  function U(t, i, n, s, e2, r2) {
    let h2, l2, a2, o2;
    if (Array.isArray(r2))
      if (2 === r2.length) {
        const t2 = Math.max(0, r2[0]),
          i2 = Math.max(0, r2[1]);
        (h2 = t2), (l2 = t2), (a2 = i2), (o2 = i2);
      } else {
        if (4 !== r2.length)
          throw new Error(
            "Wrong border radius - it should be like css border radius"
          );
        (h2 = Math.max(0, r2[0])),
          (l2 = Math.max(0, r2[1])),
          (a2 = Math.max(0, r2[2])),
          (o2 = Math.max(0, r2[3]));
      }
    else {
      const t2 = Math.max(0, r2);
      (h2 = t2), (l2 = t2), (a2 = t2), (o2 = t2);
    }
    t.beginPath(),
      t.moveTo(i + h2, n),
      t.lineTo(i + s - l2, n),
      0 !== l2 && t.arcTo(i + s, n, i + s, n + l2, l2),
      t.lineTo(i + s, n + e2 - a2),
      0 !== a2 && t.arcTo(i + s, n + e2, i + s - a2, n + e2, a2),
      t.lineTo(i + o2, n + e2),
      0 !== o2 && t.arcTo(i, n + e2, i, n + e2 - o2, o2),
      t.lineTo(i, n + h2),
      0 !== h2 && t.arcTo(i, n, i + h2, n, h2);
  }
  function q(t, i, n, s, e2, r2, h2 = 0, l2 = 0, a2 = "") {
    if ((t.save(), !h2 || !a2 || a2 === r2))
      return (
        U(t, i, n, s, e2, l2), (t.fillStyle = r2), t.fill(), void t.restore()
      );
    const o2 = h2 / 2;
    if ("transparent" !== r2) {
      U(t, i + h2, n + h2, s - 2 * h2, e2 - 2 * h2, H(l2, -h2)),
        (t.fillStyle = r2),
        t.fill();
    }
    if ("transparent" !== a2) {
      U(t, i + o2, n + o2, s - h2, e2 - h2, H(l2, -o2)),
        (t.lineWidth = h2),
        (t.strokeStyle = a2),
        t.closePath(),
        t.stroke();
    }
    t.restore();
  }
  function Y(t, i, n, s, e2, r2, h2) {
    t.save(), (t.globalCompositeOperation = "copy");
    const l2 = t.createLinearGradient(0, 0, 0, e2);
    l2.addColorStop(0, r2),
      l2.addColorStop(1, h2),
      (t.fillStyle = l2),
      t.fillRect(i, n, s, e2),
      t.restore();
  }
  var X = class {
    constructor(t, i) {
      this.tt(t, i);
    }
    tt(t, i) {
      (this.zt = t), (this.Kt = i);
    }
    It(t, i) {
      return this.zt.Ct ? t.T + t.I + t.A : 0;
    }
    X(t, i, n, s) {
      if (!this.zt.Ct || 0 === this.zt.Gt.length) return;
      const e2 = this.zt.D,
        r2 = this.Kt.t,
        h2 = t.useBitmapCoordinateSpace((t2) => {
          const h3 = t2.context;
          h3.font = i.P;
          const l2 = this.Jt(t2, i, n, s),
            a2 = l2.Qt,
            o2 = (t3, i2) => {
              l2.ti
                ? q(
                    h3,
                    a2.ii,
                    a2.ni,
                    a2.si,
                    a2.ei,
                    t3,
                    a2.ri,
                    [a2.lt, 0, 0, a2.lt],
                    i2
                  )
                : q(
                    h3,
                    a2.hi,
                    a2.ni,
                    a2.si,
                    a2.ei,
                    t3,
                    a2.ri,
                    [0, a2.lt, a2.lt, 0],
                    i2
                  );
            };
          return (
            o2(r2, "transparent"),
            this.zt.li &&
              ((h3.fillStyle = e2),
              h3.fillRect(a2.hi, a2.ai, a2.oi - a2.hi, a2._i)),
            o2("transparent", r2),
            this.zt.ui &&
              ((h3.fillStyle = i.B),
              h3.fillRect(
                l2.ti ? a2.ci - a2.ri : 0,
                a2.ni,
                a2.ri,
                a2.di - a2.ni
              )),
            l2
          );
        });
      t.useMediaCoordinateSpace(({ context: t2 }) => {
        const n2 = h2.fi;
        (t2.font = i.P),
          (t2.textAlign = h2.ti ? "right" : "left"),
          (t2.textBaseline = "middle"),
          (t2.fillStyle = e2),
          t2.fillText(this.zt.Gt, n2.pi, (n2.ni + n2.di) / 2 + n2.vi);
      });
    }
    Jt(t, i, n, s) {
      var e2;
      const {
          context: r2,
          bitmapSize: h2,
          mediaSize: l2,
          horizontalPixelRatio: a2,
          verticalPixelRatio: o2,
        } = t,
        _2 = this.zt.li || !this.zt.mi ? i.C : 0,
        u2 = this.zt.bi ? i.k : 0,
        c2 = i.I + this.Kt.gi,
        d2 = i.A + this.Kt.wi,
        f2 = i.O,
        p2 = i.L,
        v2 = this.zt.Gt,
        m2 = i.T,
        b2 = n.Mi(r2, v2),
        g2 = Math.ceil(n.Si(r2, v2)),
        w2 = m2 + c2 + d2,
        M2 = i.k + f2 + p2 + g2 + _2,
        S2 = Math.max(1, Math.floor(o2));
      let x2 = Math.round(w2 * o2);
      x2 % 2 != S2 % 2 && (x2 += 1);
      const y2 = u2 > 0 ? Math.max(1, Math.floor(u2 * a2)) : 0,
        k2 = Math.round(M2 * a2),
        C2 = Math.round(_2 * a2),
        T2 = null !== (e2 = this.Kt.xi) && void 0 !== e2 ? e2 : this.Kt.yi,
        P2 = Math.round(T2 * o2) - Math.floor(0.5 * o2),
        R2 = Math.floor(P2 + S2 / 2 - x2 / 2),
        D2 = R2 + x2,
        B2 = "right" === s,
        A2 = B2 ? l2.width - u2 : u2,
        O2 = B2 ? h2.width - y2 : y2;
      let L2, I2, E2;
      return (
        B2
          ? ((L2 = O2 - k2), (I2 = O2 - C2), (E2 = A2 - _2 - f2 - u2))
          : ((L2 = O2 + k2), (I2 = O2 + C2), (E2 = A2 + _2 + f2)),
        {
          ti: B2,
          Qt: {
            ni: R2,
            ai: P2,
            di: D2,
            si: k2,
            ei: x2,
            lt: 2 * a2,
            ri: y2,
            ii: L2,
            hi: O2,
            oi: I2,
            _i: S2,
            ci: h2.width,
          },
          fi: { ni: R2 / o2, di: D2 / o2, pi: E2, vi: b2 },
        }
      );
    }
  };
  var Z = class {
    constructor(t) {
      (this.ki = { yi: 0, t: "#000", wi: 0, gi: 0 }),
        (this.Ci = {
          Gt: "",
          Ct: false,
          li: true,
          mi: false,
          Ot: "",
          D: "#FFF",
          ui: false,
          bi: false,
        }),
        (this.Ti = {
          Gt: "",
          Ct: false,
          li: false,
          mi: true,
          Ot: "",
          D: "#FFF",
          ui: true,
          bi: true,
        }),
        (this.vt = true),
        (this.Pi = new (t || X)(this.Ci, this.ki)),
        (this.Ri = new (t || X)(this.Ti, this.ki));
    }
    Gt() {
      return this.Di(), this.Ci.Gt;
    }
    yi() {
      return this.Di(), this.ki.yi;
    }
    gt() {
      this.vt = true;
    }
    It(t, i = false) {
      return Math.max(this.Pi.It(t, i), this.Ri.It(t, i));
    }
    Bi() {
      return this.ki.xi || 0;
    }
    Ai(t) {
      this.ki.xi = t;
    }
    Oi() {
      return this.Di(), this.Ci.Ct || this.Ti.Ct;
    }
    Li() {
      return this.Di(), this.Ci.Ct;
    }
    Mt(t) {
      return (
        this.Di(),
        (this.Ci.li = this.Ci.li && t.F().ticksVisible),
        (this.Ti.li = this.Ti.li && t.F().ticksVisible),
        this.Pi.tt(this.Ci, this.ki),
        this.Ri.tt(this.Ti, this.ki),
        this.Pi
      );
    }
    Ii() {
      return (
        this.Di(),
        this.Pi.tt(this.Ci, this.ki),
        this.Ri.tt(this.Ti, this.ki),
        this.Ri
      );
    }
    Di() {
      this.vt &&
        ((this.Ci.li = true),
        (this.Ti.li = false),
        this.Ei(this.Ci, this.Ti, this.ki));
    }
  };
  var K = class extends Z {
    constructor(t, i, n) {
      super(), (this.$t = t), (this.zi = i), (this.Vi = n);
    }
    Ei(t, i, n) {
      t.Ct = false;
      const s = this.$t.F().horzLine;
      if (!s.labelVisible) return;
      const e2 = this.zi.Tt();
      if (!this.$t.Ct() || this.zi.Ni() || null === e2) return;
      const r2 = w(s.labelBackgroundColor);
      (n.t = r2.t), (t.D = r2.i);
      const h2 = (2 / 12) * this.zi.T();
      (n.gi = h2), (n.wi = h2);
      const l2 = this.Vi(this.zi);
      (n.yi = l2.yi), (t.Gt = this.zi.Fi(l2.ut, e2)), (t.Ct = true);
    }
  };
  var G = /[1-9]/g;
  var J = class {
    constructor() {
      this.zt = null;
    }
    tt(t) {
      this.zt = t;
    }
    X(t, i) {
      if (null === this.zt || false === this.zt.Ct || 0 === this.zt.Gt.length)
        return;
      const n = t.useMediaCoordinateSpace(
        ({ context: t2 }) => (
          (t2.font = i.P), Math.round(i.Wi.Si(t2, _(this.zt).Gt, G))
        )
      );
      if (n <= 0) return;
      const s = i.ji,
        e2 = n + 2 * s,
        r2 = e2 / 2,
        h2 = this.zt.$i;
      let l2 = this.zt.yi,
        a2 = Math.floor(l2 - r2) + 0.5;
      a2 < 0
        ? ((l2 += Math.abs(0 - a2)), (a2 = Math.floor(l2 - r2) + 0.5))
        : a2 + e2 > h2 &&
          ((l2 -= Math.abs(h2 - (a2 + e2))), (a2 = Math.floor(l2 - r2) + 0.5));
      const o2 = a2 + e2,
        u2 = Math.ceil(0 + i.k + i.C + i.I + i.T + i.A);
      t.useBitmapCoordinateSpace(
        ({ context: t2, horizontalPixelRatio: n2, verticalPixelRatio: s2 }) => {
          const e3 = _(this.zt);
          t2.fillStyle = e3.t;
          const r3 = Math.round(a2 * n2),
            h3 = Math.round(0 * s2),
            l3 = Math.round(o2 * n2),
            c2 = Math.round(u2 * s2),
            d2 = Math.round(2 * n2);
          if (
            (t2.beginPath(),
            t2.moveTo(r3, h3),
            t2.lineTo(r3, c2 - d2),
            t2.arcTo(r3, c2, r3 + d2, c2, d2),
            t2.lineTo(l3 - d2, c2),
            t2.arcTo(l3, c2, l3, c2 - d2, d2),
            t2.lineTo(l3, h3),
            t2.fill(),
            e3.li)
          ) {
            const r4 = Math.round(e3.yi * n2),
              l4 = h3,
              a3 = Math.round((l4 + i.C) * s2);
            t2.fillStyle = e3.D;
            const o3 = Math.max(1, Math.floor(n2)),
              _2 = Math.floor(0.5 * n2);
            t2.fillRect(r4 - _2, l4, o3, a3 - l4);
          }
        }
      ),
        t.useMediaCoordinateSpace(({ context: t2 }) => {
          const n2 = _(this.zt),
            e3 = 0 + i.k + i.C + i.I + i.T / 2;
          (t2.font = i.P),
            (t2.textAlign = "left"),
            (t2.textBaseline = "middle"),
            (t2.fillStyle = n2.D);
          const r3 = i.Wi.Mi(t2, "Apr0");
          t2.translate(a2 + s, e3 + r3), t2.fillText(n2.Gt, 0, 0);
        });
    }
  };
  var Q = class {
    constructor(t, i, n) {
      (this.vt = true),
        (this.jt = new J()),
        (this.Wt = {
          Ct: false,
          t: "#4c525e",
          D: "white",
          Gt: "",
          $i: 0,
          yi: NaN,
          li: true,
        }),
        (this.bt = t),
        (this.Hi = i),
        (this.Vi = n);
    }
    gt() {
      this.vt = true;
    }
    Mt() {
      return (
        this.vt && (this.St(), (this.vt = false)), this.jt.tt(this.Wt), this.jt
      );
    }
    St() {
      const t = this.Wt;
      t.Ct = false;
      const i = this.bt.F().vertLine;
      if (!i.labelVisible) return;
      const n = this.Hi.yt();
      if (n.Ni()) return;
      t.$i = n.$i();
      const s = this.Vi();
      if (null === s) return;
      t.yi = s.yi;
      const e2 = n.Ui(this.bt.xt());
      (t.Gt = n.qi(_(e2))), (t.Ct = true);
      const r2 = w(i.labelBackgroundColor);
      (t.t = r2.t), (t.D = r2.i), (t.li = n.F().ticksVisible);
    }
  };
  var tt = class {
    constructor() {
      (this.Yi = null), (this.Xi = 0);
    }
    Zi() {
      return this.Xi;
    }
    Ki(t) {
      this.Xi = t;
    }
    Bt() {
      return this.Yi;
    }
    Gi(t) {
      this.Yi = t;
    }
    Ji(t) {
      return [];
    }
    Qi() {
      return [];
    }
    Ct() {
      return true;
    }
  };
  var it;
  !(function (t) {
    (t[(t.Normal = 0)] = "Normal"), (t[(t.Magnet = 1)] = "Magnet");
  })(it || (it = {}));
  var nt = class extends tt {
    constructor(t, i) {
      super(),
        (this.tn = null),
        (this.nn = NaN),
        (this.sn = 0),
        (this.en = true),
        (this.rn = /* @__PURE__ */ new Map()),
        (this.hn = false),
        (this.ln = NaN),
        (this.an = NaN),
        (this.on = NaN),
        (this._n = NaN),
        (this.Hi = t),
        (this.un = i),
        (this.cn = new V(t, this));
      this.dn = ((t2, i2) => (n2) => {
        const s = i2(),
          e2 = t2();
        if (n2 === _(this.tn).fn()) return { ut: e2, yi: s };
        {
          const t3 = _(n2.Tt());
          return { ut: n2.pn(s, t3), yi: s };
        }
      })(
        () => this.nn,
        () => this.an
      );
      const n = ((t2, i2) => () => {
        const n2 = this.Hi.yt().vn(t2()),
          s = i2();
        return n2 && Number.isFinite(s) ? { _t: n2, yi: s } : null;
      })(
        () => this.sn,
        () => this.Xt()
      );
      (this.mn = new Q(this, t, n)), (this.bn = new W(this));
    }
    F() {
      return this.un;
    }
    gn(t, i) {
      (this.on = t), (this._n = i);
    }
    wn() {
      (this.on = NaN), (this._n = NaN);
    }
    Mn() {
      return this.on;
    }
    Sn() {
      return this._n;
    }
    xn(t, i, n) {
      this.hn || (this.hn = true), (this.en = true), this.yn(t, i, n);
    }
    xt() {
      return this.sn;
    }
    Xt() {
      return this.ln;
    }
    Zt() {
      return this.an;
    }
    Ct() {
      return this.en;
    }
    kn() {
      (this.en = false),
        this.Cn(),
        (this.nn = NaN),
        (this.ln = NaN),
        (this.an = NaN),
        (this.tn = null),
        this.wn();
    }
    Tn(t) {
      return null !== this.tn ? [this.bn, this.cn] : [];
    }
    qt(t) {
      return t === this.tn && this.un.horzLine.visible;
    }
    Yt() {
      return this.un.vertLine.visible;
    }
    Pn(t, i) {
      (this.en && this.tn === t) || this.rn.clear();
      const n = [];
      return this.tn === t && n.push(this.Rn(this.rn, i, this.dn)), n;
    }
    Qi() {
      return this.en ? [this.mn] : [];
    }
    Ht() {
      return this.tn;
    }
    Dn() {
      this.bn.gt(), this.rn.forEach((t) => t.gt()), this.mn.gt(), this.cn.gt();
    }
    Bn(t) {
      return t && !t.fn().Ni() ? t.fn() : null;
    }
    yn(t, i, n) {
      this.An(t, i, n) && this.Dn();
    }
    An(t, i, n) {
      const s = this.ln,
        e2 = this.an,
        r2 = this.nn,
        h2 = this.sn,
        l2 = this.tn,
        a2 = this.Bn(n);
      (this.sn = t),
        (this.ln = isNaN(t) ? NaN : this.Hi.yt().Et(t)),
        (this.tn = n);
      const o2 = null !== a2 ? a2.Tt() : null;
      return (
        null !== a2 && null !== o2
          ? ((this.nn = i), (this.an = a2.Dt(i, o2)))
          : ((this.nn = NaN), (this.an = NaN)),
        s !== this.ln ||
          e2 !== this.an ||
          h2 !== this.sn ||
          r2 !== this.nn ||
          l2 !== this.tn
      );
    }
    Cn() {
      const t = this.Hi.wt()
          .map((t2) => t2.Ln().On())
          .filter(P),
        i = 0 === t.length ? null : Math.max(...t);
      this.sn = null !== i ? i : NaN;
    }
    Rn(t, i, n) {
      let s = t.get(i);
      return void 0 === s && ((s = new K(this, i, n)), t.set(i, s)), s;
    }
  };
  function st(t) {
    return "left" === t || "right" === t;
  }
  var et = class _et {
    constructor(t) {
      (this.In = /* @__PURE__ */ new Map()), (this.En = []), (this.zn = t);
    }
    Vn(t, i) {
      const n = (function (t2, i2) {
        return void 0 === t2
          ? i2
          : { Nn: Math.max(t2.Nn, i2.Nn), Fn: t2.Fn || i2.Fn };
      })(this.In.get(t), i);
      this.In.set(t, n);
    }
    Wn() {
      return this.zn;
    }
    jn(t) {
      const i = this.In.get(t);
      return void 0 === i
        ? { Nn: this.zn }
        : { Nn: Math.max(this.zn, i.Nn), Fn: i.Fn };
    }
    $n() {
      this.Hn(), (this.En = [{ Un: 0 }]);
    }
    qn(t) {
      this.Hn(), (this.En = [{ Un: 1, At: t }]);
    }
    Yn(t) {
      this.Xn(), this.En.push({ Un: 5, At: t });
    }
    Hn() {
      this.Xn(), this.En.push({ Un: 6 });
    }
    Zn() {
      this.Hn(), (this.En = [{ Un: 4 }]);
    }
    Kn(t) {
      this.Hn(), this.En.push({ Un: 2, At: t });
    }
    Gn(t) {
      this.Hn(), this.En.push({ Un: 3, At: t });
    }
    Jn() {
      return this.En;
    }
    Qn(t) {
      for (const i of t.En) this.ts(i);
      (this.zn = Math.max(this.zn, t.zn)),
        t.In.forEach((t2, i) => {
          this.Vn(i, t2);
        });
    }
    static ns() {
      return new _et(2);
    }
    static ss() {
      return new _et(3);
    }
    ts(t) {
      switch (t.Un) {
        case 0:
          this.$n();
          break;
        case 1:
          this.qn(t.At);
          break;
        case 2:
          this.Kn(t.At);
          break;
        case 3:
          this.Gn(t.At);
          break;
        case 4:
          this.Zn();
          break;
        case 5:
          this.Yn(t.At);
          break;
        case 6:
          this.Xn();
      }
    }
    Xn() {
      const t = this.En.findIndex((t2) => 5 === t2.Un);
      -1 !== t && this.En.splice(t, 1);
    }
  };
  var rt = ".";
  function ht(t, i) {
    if (!x(t)) return "n/a";
    if (!y(i)) throw new TypeError("invalid length");
    if (i < 0 || i > 16) throw new TypeError("invalid length");
    if (0 === i) return t.toString();
    return ("0000000000000000" + t.toString()).slice(-i);
  }
  var lt = class {
    constructor(t, i) {
      if ((i || (i = 1), (x(t) && y(t)) || (t = 100), t < 0))
        throw new TypeError("invalid base");
      (this.zi = t), (this.es = i), this.rs();
    }
    format(t) {
      const i = t < 0 ? "\u2212" : "";
      return (t = Math.abs(t)), i + this.hs(t);
    }
    rs() {
      if (((this.ls = 0), this.zi > 0 && this.es > 0)) {
        let t = this.zi;
        for (; t > 1; ) (t /= 10), this.ls++;
      }
    }
    hs(t) {
      const i = this.zi / this.es;
      let n = Math.floor(t),
        s = "";
      const e2 = void 0 !== this.ls ? this.ls : NaN;
      if (i > 1) {
        let r2 = +(Math.round(t * i) - n * i).toFixed(this.ls);
        r2 >= i && ((r2 -= i), (n += 1)),
          (s = rt + ht(+r2.toFixed(this.ls) * this.es, e2));
      } else (n = Math.round(n * i) / i), e2 > 0 && (s = rt + ht(0, e2));
      return n.toFixed(0) + s;
    }
  };
  var at = class extends lt {
    constructor(t = 100) {
      super(t);
    }
    format(t) {
      return `${super.format(t)}%`;
    }
  };
  var ot = class {
    constructor(t) {
      this.os = t;
    }
    format(t) {
      let i = "";
      return (
        t < 0 && ((i = "-"), (t = -t)),
        t < 995
          ? i + this._s(t)
          : t < 999995
          ? i + this._s(t / 1e3) + "K"
          : t < 999999995
          ? ((t = 1e3 * Math.round(t / 1e3)), i + this._s(t / 1e6) + "M")
          : ((t = 1e6 * Math.round(t / 1e6)), i + this._s(t / 1e9) + "B")
      );
    }
    _s(t) {
      let i;
      const n = Math.pow(10, this.os);
      return (
        (i =
          (t = Math.round(t * n) / n) >= 1e-15 && t < 1
            ? t.toFixed(this.os).replace(/\.?0+$/, "")
            : String(t)),
        i.replace(/(\.[1-9]*)0+$/, (t2, i2) => i2)
      );
    }
  };
  function _t(t, i, n, s, e2, r2, h2) {
    if (0 === i.length || s.from >= i.length || s.to <= 0) return;
    const l2 = t.context,
      a2 = i[s.from];
    let o2 = r2(t, a2),
      _2 = a2;
    if (s.to - s.from < 2) {
      const t2 = e2 / 2;
      l2.beginPath();
      const i2 = { st: a2.st - t2, et: a2.et },
        n2 = { st: a2.st + t2, et: a2.et };
      return (
        l2.moveTo(i2.st, i2.et),
        l2.lineTo(n2.st, n2.et),
        void h2(l2, o2, i2, n2)
      );
    }
    const u2 = (t2, i2) => {
      h2(l2, o2, _2, i2), l2.beginPath(), (o2 = t2), (_2 = i2);
    };
    let c2 = _2;
    l2.beginPath(), l2.moveTo(a2.st, a2.et);
    for (let e3 = s.from + 1; e3 < s.to; ++e3) {
      c2 = i[e3];
      const s2 = r2(t, c2);
      switch (n) {
        case 0:
          l2.lineTo(c2.st, c2.et);
          break;
        case 1:
          l2.lineTo(c2.st, i[e3 - 1].et),
            s2 !== o2 && (u2(s2, c2), l2.lineTo(c2.st, i[e3 - 1].et)),
            l2.lineTo(c2.st, c2.et);
          break;
        case 2: {
          const [t2, n2] = ft(i, e3 - 1, e3);
          l2.bezierCurveTo(t2.st, t2.et, n2.st, n2.et, c2.st, c2.et);
          break;
        }
      }
      1 !== n && s2 !== o2 && (u2(s2, c2), l2.moveTo(c2.st, c2.et));
    }
    (_2 !== c2 || (_2 === c2 && 1 === n)) && h2(l2, o2, _2, c2);
  }
  var ut = 6;
  function ct(t, i) {
    return { st: t.st - i.st, et: t.et - i.et };
  }
  function dt(t, i) {
    return { st: t.st / i, et: t.et / i };
  }
  function ft(t, i, n) {
    const s = Math.max(0, i - 1),
      e2 = Math.min(t.length - 1, n + 1);
    var r2, h2;
    return [
      ((r2 = t[i]),
      (h2 = dt(ct(t[n], t[s]), ut)),
      { st: r2.st + h2.st, et: r2.et + h2.et }),
      ct(t[n], dt(ct(t[e2], t[i]), ut)),
    ];
  }
  function pt(t, i, n, s, e2) {
    i.lineTo(e2.st, t),
      i.lineTo(s.st, t),
      i.closePath(),
      (i.fillStyle = n),
      i.fill();
  }
  var vt = class extends L {
    constructor() {
      super(...arguments), (this.J = null);
    }
    tt(t) {
      this.J = t;
    }
    Z(t) {
      var i;
      if (null === this.J) return;
      const { nt: n, it: s, us: e2, rt: r2, Ft: l2, cs: a2 } = this.J,
        o2 =
          null !== (i = this.J.ds) && void 0 !== i
            ? i
            : this.J.fs
            ? 0
            : t.mediaSize.height;
      if (null === s) return;
      const _2 = t.context;
      (_2.lineCap = "butt"),
        (_2.lineJoin = "round"),
        (_2.lineWidth = r2),
        h(_2, l2),
        (_2.lineWidth = 1),
        _t(t, n, a2, s, e2, this.ps.bind(this), pt.bind(null, o2));
    }
  };
  var mt = class extends vt {
    constructor() {
      super(...arguments), (this.vs = null);
    }
    ps(t, i) {
      const { context: n, mediaSize: s } = t,
        { bs: e2, gs: r2 } = i,
        h2 = s.height;
      if (
        null !== this.vs &&
        this.vs.topColor === e2 &&
        this.vs.bottomColor === r2 &&
        this.vs.bottom === h2
      )
        return this.vs.fillStyle;
      const l2 = n.createLinearGradient(0, 0, 0, h2);
      return (
        l2.addColorStop(0, e2),
        l2.addColorStop(1, r2),
        (this.vs = {
          topColor: e2,
          bottomColor: r2,
          fillStyle: l2,
          bottom: h2,
        }),
        l2
      );
    }
  };
  function bt(t, i) {
    (t.strokeStyle = i), t.stroke();
  }
  var gt = class extends L {
    constructor() {
      super(...arguments), (this.J = null);
    }
    tt(t) {
      this.J = t;
    }
    Z(t) {
      if (null === this.J) return;
      const { nt: i, it: n, us: s, cs: e2, rt: r2, Ft: l2 } = this.J;
      if (null === n) return;
      const a2 = t.context;
      (a2.lineCap = "butt"),
        (a2.lineWidth = r2),
        h(a2, l2),
        (a2.lineJoin = "round"),
        _t(t, i, e2, n, s, this.ws.bind(this), bt);
    }
  };
  var wt = class extends gt {
    ws(t, i) {
      return i.ot;
    }
  };
  function Mt(t, i, n, s = 0, e2 = t.length) {
    let r2 = e2 - s;
    for (; 0 < r2; ) {
      const e3 = r2 >> 1,
        h2 = s + e3;
      n(t[h2], i) ? ((s = h2 + 1), (r2 -= e3 + 1)) : (r2 = e3);
    }
    return s;
  }
  function St(t, i, n, s = 0, e2 = t.length) {
    let r2 = e2 - s;
    for (; 0 < r2; ) {
      const e3 = r2 >> 1,
        h2 = s + e3;
      n(i, t[h2]) ? (r2 = e3) : ((s = h2 + 1), (r2 -= e3 + 1));
    }
    return s;
  }
  function xt(t, i) {
    return t._t < i;
  }
  function yt(t, i) {
    return t < i._t;
  }
  function kt(t, i, n) {
    const s = i.Ms(),
      e2 = i.ci(),
      r2 = Mt(t, s, xt),
      h2 = St(t, e2, yt);
    if (!n) return { from: r2, to: h2 };
    let l2 = r2,
      a2 = h2;
    return (
      r2 > 0 && r2 < t.length && t[r2]._t >= s && (l2 = r2 - 1),
      h2 > 0 && h2 < t.length && t[h2 - 1]._t <= e2 && (a2 = h2 + 1),
      { from: l2, to: a2 }
    );
  }
  var Ct = class {
    constructor(t, i, n) {
      (this.Ss = true),
        (this.xs = true),
        (this.ys = true),
        (this.ks = []),
        (this.Cs = null),
        (this.Ts = t),
        (this.Ps = i),
        (this.Rs = n);
    }
    gt(t) {
      (this.Ss = true),
        "data" === t && (this.xs = true),
        "options" === t && (this.ys = true);
    }
    Mt() {
      return this.Ts.Ct()
        ? (this.Ds(), null === this.Cs ? null : this.Bs)
        : null;
    }
    As() {
      this.ks = this.ks.map((t) =>
        Object.assign(Object.assign({}, t), this.Ts.Ls().Os(t._t))
      );
    }
    Is() {
      this.Cs = null;
    }
    Ds() {
      this.xs && (this.Es(), (this.xs = false)),
        this.ys && (this.As(), (this.ys = false)),
        this.Ss && (this.zs(), (this.Ss = false));
    }
    zs() {
      const t = this.Ts.Bt(),
        i = this.Ps.yt();
      if ((this.Is(), i.Ni() || t.Ni())) return;
      const n = i.Vs();
      if (null === n) return;
      if (0 === this.Ts.Ln().Ns()) return;
      const s = this.Ts.Tt();
      null !== s &&
        ((this.Cs = kt(this.ks, n, this.Rs)), this.Fs(t, i, s.At), this.Ws());
    }
  };
  var Tt = class extends Ct {
    constructor(t, i) {
      super(t, i, true);
    }
    Fs(t, i, n) {
      i.js(this.ks, R(this.Cs)), t.$s(this.ks, n, R(this.Cs));
    }
    Hs(t, i) {
      return { _t: t, ut: i, st: NaN, et: NaN };
    }
    Es() {
      const t = this.Ts.Ls();
      this.ks = this.Ts.Ln()
        .Us()
        .map((i) => {
          const n = i.At[3];
          return this.qs(i.Ys, n, t);
        });
    }
  };
  var Pt = class extends Tt {
    constructor(t, i) {
      super(t, i),
        (this.Bs = new O()),
        (this.Xs = new mt()),
        (this.Zs = new wt()),
        this.Bs.Y([this.Xs, this.Zs]);
    }
    qs(t, i, n) {
      return Object.assign(Object.assign({}, this.Hs(t, i)), n.Os(t));
    }
    Ws() {
      const t = this.Ts.F();
      this.Xs.tt({
        cs: t.lineType,
        nt: this.ks,
        Ft: t.lineStyle,
        rt: t.lineWidth,
        ds: null,
        fs: t.invertFilledArea,
        it: this.Cs,
        us: this.Ps.yt().Ks(),
      }),
        this.Zs.tt({
          cs: t.lineType,
          nt: this.ks,
          Ft: t.lineStyle,
          rt: t.lineWidth,
          it: this.Cs,
          us: this.Ps.yt().Ks(),
        });
    }
  };
  var Rt = class extends N {
    constructor() {
      super(...arguments), (this.zt = null), (this.Gs = 0), (this.Js = 0);
    }
    tt(t) {
      this.zt = t;
    }
    Z({ context: t, horizontalPixelRatio: i, verticalPixelRatio: n }) {
      if (null === this.zt || 0 === this.zt.Ln.length || null === this.zt.it)
        return;
      if (((this.Gs = this.Qs(i)), this.Gs >= 2)) {
        Math.max(1, Math.floor(i)) % 2 != this.Gs % 2 && this.Gs--;
      }
      this.Js = this.zt.te ? Math.min(this.Gs, Math.floor(i)) : this.Gs;
      let s = null;
      const e2 = this.Js <= this.Gs && this.zt.Ks >= Math.floor(1.5 * i);
      for (let r2 = this.zt.it.from; r2 < this.zt.it.to; ++r2) {
        const h2 = this.zt.Ln[r2];
        s !== h2.ie && ((t.fillStyle = h2.ie), (s = h2.ie));
        const l2 = Math.floor(0.5 * this.Js),
          a2 = Math.round(h2.st * i),
          o2 = a2 - l2,
          _2 = this.Js,
          u2 = o2 + _2 - 1,
          c2 = Math.min(h2.ne, h2.se),
          d2 = Math.max(h2.ne, h2.se),
          f2 = Math.round(c2 * n) - l2,
          p2 = Math.round(d2 * n) + l2,
          v2 = Math.max(p2 - f2, this.Js);
        t.fillRect(o2, f2, _2, v2);
        const m2 = Math.ceil(1.5 * this.Gs);
        if (e2) {
          if (this.zt.ee) {
            const i3 = a2 - m2;
            let s3 = Math.max(f2, Math.round(h2.re * n) - l2),
              e4 = s3 + _2 - 1;
            e4 > f2 + v2 - 1 && ((e4 = f2 + v2 - 1), (s3 = e4 - _2 + 1)),
              t.fillRect(i3, s3, o2 - i3, e4 - s3 + 1);
          }
          const i2 = a2 + m2;
          let s2 = Math.max(f2, Math.round(h2.he * n) - l2),
            e3 = s2 + _2 - 1;
          e3 > f2 + v2 - 1 && ((e3 = f2 + v2 - 1), (s2 = e3 - _2 + 1)),
            t.fillRect(u2 + 1, s2, i2 - u2, e3 - s2 + 1);
        }
      }
    }
    Qs(t) {
      const i = Math.floor(t);
      return Math.max(
        i,
        Math.floor(
          (function (t2, i2) {
            return Math.floor(0.3 * t2 * i2);
          })(_(this.zt).Ks, t)
        )
      );
    }
  };
  var Dt = class extends Ct {
    constructor(t, i) {
      super(t, i, false);
    }
    Fs(t, i, n) {
      i.js(this.ks, R(this.Cs)), t.le(this.ks, n, R(this.Cs));
    }
    ae(t, i, n) {
      return {
        _t: t,
        oe: i.At[0],
        _e: i.At[1],
        ue: i.At[2],
        ce: i.At[3],
        st: NaN,
        re: NaN,
        ne: NaN,
        se: NaN,
        he: NaN,
      };
    }
    Es() {
      const t = this.Ts.Ls();
      this.ks = this.Ts.Ln()
        .Us()
        .map((i) => this.qs(i.Ys, i, t));
    }
  };
  var Bt = class extends Dt {
    constructor() {
      super(...arguments), (this.Bs = new Rt());
    }
    qs(t, i, n) {
      return Object.assign(Object.assign({}, this.ae(t, i, n)), n.Os(t));
    }
    Ws() {
      const t = this.Ts.F();
      this.Bs.tt({
        Ln: this.ks,
        Ks: this.Ps.yt().Ks(),
        ee: t.openVisible,
        te: t.thinBars,
        it: this.Cs,
      });
    }
  };
  function At(t, i, n) {
    return Math.min(Math.max(t, i), n);
  }
  function Ot(t, i, n) {
    return i - t <= n;
  }
  function Lt(t) {
    return t <= 0 ? NaN : Math.log(t) / Math.log(10);
  }
  function It(t) {
    const i = Math.ceil(t);
    return i % 2 == 0 ? i - 1 : i;
  }
  var Et = class extends vt {
    constructor() {
      super(...arguments), (this.vs = null);
    }
    ps(t, i) {
      var n;
      const { context: s, mediaSize: e2 } = t,
        r2 = this.J,
        { de: h2, fe: l2, pe: a2, ve: o2 } = i,
        _2 = null !== (n = r2.ds) && void 0 !== n ? n : e2.height,
        u2 = e2.height;
      if (
        null !== this.vs &&
        this.vs.topFillColor1 === h2 &&
        this.vs.topFillColor2 === l2 &&
        this.vs.bottomFillColor1 === a2 &&
        this.vs.bottomFillColor2 === o2 &&
        this.vs.baseLevelCoordinate === _2 &&
        this.vs.bottom === u2
      )
        return this.vs.fillStyle;
      const c2 = s.createLinearGradient(0, 0, 0, u2),
        d2 = At(_2 / u2, 0, 1);
      return (
        c2.addColorStop(0, h2),
        c2.addColorStop(d2, l2),
        c2.addColorStop(d2, a2),
        c2.addColorStop(1, o2),
        (this.vs = {
          topFillColor1: h2,
          topFillColor2: l2,
          bottomFillColor1: a2,
          bottomFillColor2: o2,
          fillStyle: c2,
          baseLevelCoordinate: _2,
          bottom: u2,
        }),
        c2
      );
    }
  };
  var zt = class extends gt {
    constructor() {
      super(...arguments), (this.me = null);
    }
    ws(t, i) {
      const { context: n, mediaSize: s } = t,
        e2 = this.J,
        { be: r2, ge: h2 } = i,
        { ds: l2 } = e2,
        a2 = s.height;
      if (
        null !== this.me &&
        this.me.topLineColor === r2 &&
        this.me.bottomLineColor === h2 &&
        this.me.baseLevelCoordinate === l2 &&
        this.me.bottom === a2
      )
        return this.me.strokeStyle;
      const o2 = n.createLinearGradient(0, 0, 0, a2),
        _2 = At(l2 / a2, 0, 1);
      return (
        o2.addColorStop(0, r2),
        o2.addColorStop(_2, r2),
        o2.addColorStop(_2, h2),
        o2.addColorStop(1, h2),
        (this.me = {
          topLineColor: r2,
          bottomLineColor: h2,
          strokeStyle: o2,
          baseLevelCoordinate: l2,
          bottom: a2,
        }),
        o2
      );
    }
  };
  var Vt = class extends Tt {
    constructor(t, i) {
      super(t, i),
        (this.Bs = new O()),
        (this.we = new Et()),
        (this.Me = new zt()),
        this.Bs.Y([this.we, this.Me]);
    }
    qs(t, i, n) {
      return Object.assign(Object.assign({}, this.Hs(t, i)), n.Os(t));
    }
    Ws() {
      const t = this.Ts.Tt();
      if (null === t) return;
      const i = this.Ts.F(),
        n = this.Ts.Bt().Dt(i.baseValue.price, t.At),
        s = this.Ps.yt().Ks();
      this.we.tt({
        nt: this.ks,
        rt: i.lineWidth,
        Ft: i.lineStyle,
        cs: i.lineType,
        ds: n,
        fs: false,
        it: this.Cs,
        us: s,
      }),
        this.Me.tt({
          nt: this.ks,
          rt: i.lineWidth,
          Ft: i.lineStyle,
          cs: i.lineType,
          ds: n,
          it: this.Cs,
          us: s,
        });
    }
  };
  var Nt = class extends N {
    constructor() {
      super(...arguments), (this.zt = null), (this.Gs = 0);
    }
    tt(t) {
      this.zt = t;
    }
    Z(t) {
      if (null === this.zt || 0 === this.zt.Ln.length || null === this.zt.it)
        return;
      const { horizontalPixelRatio: i } = t;
      if (
        ((this.Gs = (function (t2, i2) {
          if (t2 >= 2.5 && t2 <= 4) return Math.floor(3 * i2);
          const n2 =
              1 - (0.2 * Math.atan(Math.max(4, t2) - 4)) / (0.5 * Math.PI),
            s2 = Math.floor(t2 * n2 * i2),
            e2 = Math.floor(t2 * i2),
            r2 = Math.min(s2, e2);
          return Math.max(Math.floor(i2), r2);
        })(this.zt.Ks, i)),
        this.Gs >= 2)
      ) {
        Math.floor(i) % 2 != this.Gs % 2 && this.Gs--;
      }
      const n = this.zt.Ln;
      this.zt.Se && this.xe(t, n, this.zt.it),
        this.zt.ui && this.ye(t, n, this.zt.it);
      const s = this.ke(i);
      (!this.zt.ui || this.Gs > 2 * s) && this.Ce(t, n, this.zt.it);
    }
    xe(t, i, n) {
      if (null === this.zt) return;
      const {
        context: s,
        horizontalPixelRatio: e2,
        verticalPixelRatio: r2,
      } = t;
      let h2 = "",
        l2 = Math.min(Math.floor(e2), Math.floor(this.zt.Ks * e2));
      l2 = Math.max(Math.floor(e2), Math.min(l2, this.Gs));
      const a2 = Math.floor(0.5 * l2);
      let o2 = null;
      for (let t2 = n.from; t2 < n.to; t2++) {
        const n2 = i[t2];
        n2.Te !== h2 && ((s.fillStyle = n2.Te), (h2 = n2.Te));
        const _2 = Math.round(Math.min(n2.re, n2.he) * r2),
          u2 = Math.round(Math.max(n2.re, n2.he) * r2),
          c2 = Math.round(n2.ne * r2),
          d2 = Math.round(n2.se * r2);
        let f2 = Math.round(e2 * n2.st) - a2;
        const p2 = f2 + l2 - 1;
        null !== o2 && ((f2 = Math.max(o2 + 1, f2)), (f2 = Math.min(f2, p2)));
        const v2 = p2 - f2 + 1;
        s.fillRect(f2, c2, v2, _2 - c2),
          s.fillRect(f2, u2 + 1, v2, d2 - u2),
          (o2 = p2);
      }
    }
    ke(t) {
      let i = Math.floor(1 * t);
      this.Gs <= 2 * i && (i = Math.floor(0.5 * (this.Gs - 1)));
      const n = Math.max(Math.floor(t), i);
      return this.Gs <= 2 * n ? Math.max(Math.floor(t), Math.floor(1 * t)) : n;
    }
    ye(t, i, n) {
      if (null === this.zt) return;
      const {
        context: s,
        horizontalPixelRatio: e2,
        verticalPixelRatio: r2,
      } = t;
      let h2 = "";
      const l2 = this.ke(e2);
      let a2 = null;
      for (let t2 = n.from; t2 < n.to; t2++) {
        const n2 = i[t2];
        n2.Pe !== h2 && ((s.fillStyle = n2.Pe), (h2 = n2.Pe));
        let o2 = Math.round(n2.st * e2) - Math.floor(0.5 * this.Gs);
        const _2 = o2 + this.Gs - 1,
          u2 = Math.round(Math.min(n2.re, n2.he) * r2),
          c2 = Math.round(Math.max(n2.re, n2.he) * r2);
        if (
          (null !== a2 &&
            ((o2 = Math.max(a2 + 1, o2)), (o2 = Math.min(o2, _2))),
          this.zt.Ks * e2 > 2 * l2)
        )
          j(s, o2, u2, _2 - o2 + 1, c2 - u2 + 1, l2);
        else {
          const t3 = _2 - o2 + 1;
          s.fillRect(o2, u2, t3, c2 - u2 + 1);
        }
        a2 = _2;
      }
    }
    Ce(t, i, n) {
      if (null === this.zt) return;
      const {
        context: s,
        horizontalPixelRatio: e2,
        verticalPixelRatio: r2,
      } = t;
      let h2 = "";
      const l2 = this.ke(e2);
      for (let t2 = n.from; t2 < n.to; t2++) {
        const n2 = i[t2];
        let a2 = Math.round(Math.min(n2.re, n2.he) * r2),
          o2 = Math.round(Math.max(n2.re, n2.he) * r2),
          _2 = Math.round(n2.st * e2) - Math.floor(0.5 * this.Gs),
          u2 = _2 + this.Gs - 1;
        if (n2.ie !== h2) {
          const t3 = n2.ie;
          (s.fillStyle = t3), (h2 = t3);
        }
        this.zt.ui && ((_2 += l2), (a2 += l2), (u2 -= l2), (o2 -= l2)),
          a2 > o2 || s.fillRect(_2, a2, u2 - _2 + 1, o2 - a2 + 1);
      }
    }
  };
  var Ft = class extends Dt {
    constructor() {
      super(...arguments), (this.Bs = new Nt());
    }
    qs(t, i, n) {
      return Object.assign(Object.assign({}, this.ae(t, i, n)), n.Os(t));
    }
    Ws() {
      const t = this.Ts.F();
      this.Bs.tt({
        Ln: this.ks,
        Ks: this.Ps.yt().Ks(),
        Se: t.wickVisible,
        ui: t.borderVisible,
        it: this.Cs,
      });
    }
  };
  var Wt = class extends N {
    constructor() {
      super(...arguments), (this.zt = null), (this.Re = []);
    }
    tt(t) {
      (this.zt = t), (this.Re = []);
    }
    Z({ context: t, horizontalPixelRatio: i, verticalPixelRatio: n }) {
      if (null === this.zt || 0 === this.zt.nt.length || null === this.zt.it)
        return;
      this.Re.length || this.De(i);
      const s = Math.max(1, Math.floor(n)),
        e2 = Math.round(this.zt.Be * n) - Math.floor(s / 2),
        r2 = e2 + s;
      for (let i2 = this.zt.it.from; i2 < this.zt.it.to; i2++) {
        const h2 = this.zt.nt[i2],
          l2 = this.Re[i2 - this.zt.it.from],
          a2 = Math.round(h2.et * n);
        let o2, _2;
        (t.fillStyle = h2.ie),
          a2 <= e2
            ? ((o2 = a2), (_2 = r2))
            : ((o2 = e2), (_2 = a2 - Math.floor(s / 2) + s)),
          t.fillRect(l2.Ms, o2, l2.ci - l2.Ms + 1, _2 - o2);
      }
    }
    De(t) {
      if (null === this.zt || 0 === this.zt.nt.length || null === this.zt.it)
        return void (this.Re = []);
      const i = Math.ceil(this.zt.Ks * t) <= 1 ? 0 : Math.max(1, Math.floor(t)),
        n = Math.round(this.zt.Ks * t) - i;
      this.Re = new Array(this.zt.it.to - this.zt.it.from);
      for (let i2 = this.zt.it.from; i2 < this.zt.it.to; i2++) {
        const s2 = this.zt.nt[i2],
          e2 = Math.round(s2.st * t);
        let r2, h2;
        if (n % 2) {
          const t2 = (n - 1) / 2;
          (r2 = e2 - t2), (h2 = e2 + t2);
        } else {
          const t2 = n / 2;
          (r2 = e2 - t2), (h2 = e2 + t2 - 1);
        }
        this.Re[i2 - this.zt.it.from] = {
          Ms: r2,
          ci: h2,
          Ae: e2,
          Oe: s2.st * t,
          _t: s2._t,
        };
      }
      for (let t2 = this.zt.it.from + 1; t2 < this.zt.it.to; t2++) {
        const n2 = this.Re[t2 - this.zt.it.from],
          s2 = this.Re[t2 - this.zt.it.from - 1];
        n2._t === s2._t + 1 &&
          n2.Ms - s2.ci !== i + 1 &&
          (s2.Ae > s2.Oe ? (s2.ci = n2.Ms - i - 1) : (n2.Ms = s2.ci + i + 1));
      }
      let s = Math.ceil(this.zt.Ks * t);
      for (let t2 = this.zt.it.from; t2 < this.zt.it.to; t2++) {
        const i2 = this.Re[t2 - this.zt.it.from];
        i2.ci < i2.Ms && (i2.ci = i2.Ms);
        const n2 = i2.ci - i2.Ms + 1;
        s = Math.min(n2, s);
      }
      if (i > 0 && s < 4)
        for (let t2 = this.zt.it.from; t2 < this.zt.it.to; t2++) {
          const i2 = this.Re[t2 - this.zt.it.from];
          i2.ci - i2.Ms + 1 > s &&
            (i2.Ae > i2.Oe ? (i2.ci -= 1) : (i2.Ms += 1));
        }
    }
  };
  var jt = class extends Tt {
    constructor() {
      super(...arguments), (this.Bs = new Wt());
    }
    qs(t, i, n) {
      return Object.assign(Object.assign({}, this.Hs(t, i)), n.Os(t));
    }
    Ws() {
      const t = {
        nt: this.ks,
        Ks: this.Ps.yt().Ks(),
        it: this.Cs,
        Be: this.Ts.Bt().Dt(this.Ts.F().base, _(this.Ts.Tt()).At),
      };
      this.Bs.tt(t);
    }
  };
  var $t = class extends Tt {
    constructor() {
      super(...arguments), (this.Bs = new wt());
    }
    qs(t, i, n) {
      return Object.assign(Object.assign({}, this.Hs(t, i)), n.Os(t));
    }
    Ws() {
      const t = this.Ts.F(),
        i = {
          nt: this.ks,
          Ft: t.lineStyle,
          cs: t.lineType,
          rt: t.lineWidth,
          it: this.Cs,
          us: this.Ps.yt().Ks(),
        };
      this.Bs.tt(i);
    }
  };
  var Ht = /[2-9]/g;
  var Ut = class {
    constructor(t = 50) {
      (this.Le = 0),
        (this.Ie = 1),
        (this.Ee = 1),
        (this.ze = {}),
        (this.Ve = /* @__PURE__ */ new Map()),
        (this.Ne = t);
    }
    Fe() {
      (this.Le = 0),
        this.Ve.clear(),
        (this.Ie = 1),
        (this.Ee = 1),
        (this.ze = {});
    }
    Si(t, i, n) {
      return this.We(t, i, n).width;
    }
    Mi(t, i, n) {
      const s = this.We(t, i, n);
      return (
        ((s.actualBoundingBoxAscent || 0) - (s.actualBoundingBoxDescent || 0)) /
        2
      );
    }
    We(t, i, n) {
      const s = n || Ht,
        e2 = String(i).replace(s, "0");
      if (this.Ve.has(e2)) return o(this.Ve.get(e2)).je;
      if (this.Le === this.Ne) {
        const t2 = this.ze[this.Ee];
        delete this.ze[this.Ee], this.Ve.delete(t2), this.Ee++, this.Le--;
      }
      t.save(), (t.textBaseline = "middle");
      const r2 = t.measureText(e2);
      return (
        t.restore(),
        (0 === r2.width && i.length) ||
          (this.Ve.set(e2, { je: r2, $e: this.Ie }),
          (this.ze[this.Ie] = e2),
          this.Le++,
          this.Ie++),
        r2
      );
    }
  };
  var qt = class {
    constructor(t) {
      (this.He = null), (this.S = null), (this.Ue = "right"), (this.qe = t);
    }
    Ye(t, i, n) {
      (this.He = t), (this.S = i), (this.Ue = n);
    }
    X(t) {
      null !== this.S &&
        null !== this.He &&
        this.He.X(t, this.S, this.qe, this.Ue);
    }
  };
  var Yt = class {
    constructor(t, i, n) {
      (this.Xe = t),
        (this.qe = new Ut(50)),
        (this.Ze = i),
        (this.N = n),
        (this.W = -1),
        (this.jt = new qt(this.qe));
    }
    Mt() {
      const t = this.N.Ke(this.Ze);
      if (null === t) return null;
      const i = t.Ge(this.Ze) ? t.Je() : this.Ze.Bt();
      if (null === i) return null;
      const n = t.Qe(i);
      if ("overlay" === n) return null;
      const s = this.N.tr();
      return (
        s.T !== this.W && ((this.W = s.T), this.qe.Fe()),
        this.jt.Ye(this.Xe.Ii(), s, n),
        this.jt
      );
    }
  };
  var Xt = class extends N {
    constructor() {
      super(...arguments), (this.zt = null);
    }
    tt(t) {
      this.zt = t;
    }
    ir(t, i) {
      var n;
      if (!(null === (n = this.zt) || void 0 === n ? void 0 : n.Ct))
        return null;
      const { et: s, rt: e2, nr: r2 } = this.zt;
      return i >= s - e2 - 7 && i <= s + e2 + 7
        ? { sr: this.zt, nr: r2 }
        : null;
    }
    Z({
      context: t,
      bitmapSize: i,
      horizontalPixelRatio: n,
      verticalPixelRatio: s,
    }) {
      if (null === this.zt) return;
      if (false === this.zt.Ct) return;
      const e2 = Math.round(this.zt.et * s);
      e2 < 0 ||
        e2 > i.height ||
        ((t.lineCap = "butt"),
        (t.strokeStyle = this.zt.D),
        (t.lineWidth = Math.floor(this.zt.rt * n)),
        h(t, this.zt.Ft),
        l(t, e2, 0, i.width));
    }
  };
  var Zt = class {
    constructor(t) {
      (this.er = { et: 0, D: "rgba(0, 0, 0, 0)", rt: 1, Ft: 0, Ct: false }),
        (this.rr = new Xt()),
        (this.vt = true),
        (this.Ts = t),
        (this.Ps = t.Ut()),
        this.rr.tt(this.er);
    }
    gt() {
      this.vt = true;
    }
    Mt() {
      return this.Ts.Ct()
        ? (this.vt && (this.hr(), (this.vt = false)), this.rr)
        : null;
    }
  };
  var Kt = class extends Zt {
    constructor(t) {
      super(t);
    }
    hr() {
      this.er.Ct = false;
      const t = this.Ts.Bt(),
        i = t.lr().lr;
      if (2 !== i && 3 !== i) return;
      const n = this.Ts.F();
      if (!n.baseLineVisible || !this.Ts.Ct()) return;
      const s = this.Ts.Tt();
      null !== s &&
        ((this.er.Ct = true),
        (this.er.et = t.Dt(s.At, s.At)),
        (this.er.D = n.baseLineColor),
        (this.er.rt = n.baseLineWidth),
        (this.er.Ft = n.baseLineStyle));
    }
  };
  var Gt = class extends N {
    constructor() {
      super(...arguments), (this.zt = null);
    }
    tt(t) {
      this.zt = t;
    }
    ar() {
      return this.zt;
    }
    Z({ context: t, horizontalPixelRatio: i, verticalPixelRatio: n }) {
      const s = this.zt;
      if (null === s) return;
      const e2 = Math.max(1, Math.floor(i)),
        r2 = (e2 % 2) / 2,
        h2 = Math.round(s.Oe.x * i) + r2,
        l2 = s.Oe.y * n;
      (t.fillStyle = s._r), t.beginPath();
      const a2 = Math.max(2, 1.5 * s.ur) * i;
      t.arc(h2, l2, a2, 0, 2 * Math.PI, false),
        t.fill(),
        (t.fillStyle = s.cr),
        t.beginPath(),
        t.arc(h2, l2, s.lt * i, 0, 2 * Math.PI, false),
        t.fill(),
        (t.lineWidth = e2),
        (t.strokeStyle = s.dr),
        t.beginPath(),
        t.arc(h2, l2, s.lt * i + e2 / 2, 0, 2 * Math.PI, false),
        t.stroke();
    }
  };
  var Jt = [
    { pr: 0, vr: 0.25, mr: 4, br: 10, gr: 0.25, wr: 0, Mr: 0.4, Sr: 0.8 },
    { pr: 0.25, vr: 0.525, mr: 10, br: 14, gr: 0, wr: 0, Mr: 0.8, Sr: 0 },
    { pr: 0.525, vr: 1, mr: 14, br: 14, gr: 0, wr: 0, Mr: 0, Sr: 0 },
  ];
  function Qt(t, i, n, s) {
    return (function (t2, i2) {
      if ("transparent" === t2) return t2;
      const n2 = g(t2),
        s2 = n2[3];
      return `rgba(${n2[0]}, ${n2[1]}, ${n2[2]}, ${i2 * s2})`;
    })(t, n + (s - n) * i);
  }
  function ti(t, i) {
    const n = (t % 2600) / 2600;
    let s;
    for (const t2 of Jt)
      if (n >= t2.pr && n <= t2.vr) {
        s = t2;
        break;
      }
    a(void 0 !== s, "Last price animation internal logic error");
    const e2 = (n - s.pr) / (s.vr - s.pr);
    return {
      cr: Qt(i, e2, s.gr, s.wr),
      dr: Qt(i, e2, s.Mr, s.Sr),
      lt: ((r2 = e2), (h2 = s.mr), (l2 = s.br), h2 + (l2 - h2) * r2),
    };
    var r2, h2, l2;
  }
  var ii = class {
    constructor(t) {
      (this.jt = new Gt()),
        (this.vt = true),
        (this.yr = true),
        (this.kr = performance.now()),
        (this.Cr = this.kr - 1),
        (this.Tr = t);
    }
    Pr() {
      (this.Cr = this.kr - 1), this.gt();
    }
    Rr() {
      if ((this.gt(), 2 === this.Tr.F().lastPriceAnimation)) {
        const t = performance.now(),
          i = this.Cr - t;
        if (i > 0) return void (i < 650 && (this.Cr += 2600));
        (this.kr = t), (this.Cr = t + 2600);
      }
    }
    gt() {
      this.vt = true;
    }
    Dr() {
      this.yr = true;
    }
    Ct() {
      return 0 !== this.Tr.F().lastPriceAnimation;
    }
    Br() {
      switch (this.Tr.F().lastPriceAnimation) {
        case 0:
          return false;
        case 1:
          return true;
        case 2:
          return performance.now() <= this.Cr;
      }
    }
    Mt() {
      return (
        this.vt
          ? (this.St(), (this.vt = false), (this.yr = false))
          : this.yr && (this.Ar(), (this.yr = false)),
        this.jt
      );
    }
    St() {
      this.jt.tt(null);
      const t = this.Tr.Ut().yt(),
        i = t.Vs(),
        n = this.Tr.Tt();
      if (null === i || null === n) return;
      const s = this.Tr.Or(true);
      if (s.Lr || !i.Ir(s.Ys)) return;
      const e2 = { x: t.Et(s.Ys), y: this.Tr.Bt().Dt(s.ut, n.At) },
        r2 = s.D,
        h2 = this.Tr.F().lineWidth,
        l2 = ti(this.Er(), r2);
      this.jt.tt({ _r: r2, ur: h2, cr: l2.cr, dr: l2.dr, lt: l2.lt, Oe: e2 });
    }
    Ar() {
      const t = this.jt.ar();
      if (null !== t) {
        const i = ti(this.Er(), t._r);
        (t.cr = i.cr), (t.dr = i.dr), (t.lt = i.lt);
      }
    }
    Er() {
      return this.Br() ? performance.now() - this.kr : 2599;
    }
  };
  function ni(t, i) {
    return It(Math.min(Math.max(t, 12), 30) * i);
  }
  function si(t, i) {
    switch (t) {
      case "arrowDown":
      case "arrowUp":
        return ni(i, 1);
      case "circle":
        return ni(i, 0.8);
      case "square":
        return ni(i, 0.7);
    }
  }
  function ei(t) {
    return (function (t2) {
      const i = Math.ceil(t2);
      return i % 2 != 0 ? i - 1 : i;
    })(ni(t, 1));
  }
  function ri(t) {
    return Math.max(ni(t, 0.1), 3);
  }
  function hi(t, i, n, s, e2) {
    const r2 = si("square", n),
      h2 = (r2 - 1) / 2,
      l2 = t - h2,
      a2 = i - h2;
    return s >= l2 && s <= l2 + r2 && e2 >= a2 && e2 <= a2 + r2;
  }
  function li(t, i, n, s, e2) {
    const r2 = (si("arrowUp", e2) - 1) / 2,
      h2 = (It(e2 / 2) - 1) / 2;
    i.beginPath(),
      t
        ? (i.moveTo(n - r2, s),
          i.lineTo(n, s - r2),
          i.lineTo(n + r2, s),
          i.lineTo(n + h2, s),
          i.lineTo(n + h2, s + r2),
          i.lineTo(n - h2, s + r2),
          i.lineTo(n - h2, s))
        : (i.moveTo(n - r2, s),
          i.lineTo(n, s + r2),
          i.lineTo(n + r2, s),
          i.lineTo(n + h2, s),
          i.lineTo(n + h2, s - r2),
          i.lineTo(n - h2, s - r2),
          i.lineTo(n - h2, s)),
      i.fill();
  }
  function ai(t, i, n, s, e2, r2) {
    return hi(i, n, s, e2, r2);
  }
  var oi = class extends L {
    constructor() {
      super(...arguments),
        (this.zt = null),
        (this.qe = new Ut()),
        (this.W = -1),
        (this.j = ""),
        (this.zr = "");
    }
    tt(t) {
      this.zt = t;
    }
    Ye(t, i) {
      (this.W === t && this.j === i) ||
        ((this.W = t), (this.j = i), (this.zr = B(t, i)), this.qe.Fe());
    }
    ir(t, i) {
      if (null === this.zt || null === this.zt.it) return null;
      for (let n = this.zt.it.from; n < this.zt.it.to; n++) {
        const s = this.zt.nt[n];
        if (ui(s, t, i)) return { sr: s.Vr, nr: s.nr };
      }
      return null;
    }
    Z({ context: t }, i, n) {
      if (null !== this.zt && null !== this.zt.it) {
        (t.textBaseline = "middle"), (t.font = this.zr);
        for (let i2 = this.zt.it.from; i2 < this.zt.it.to; i2++) {
          const n2 = this.zt.nt[i2];
          void 0 !== n2.Gt &&
            ((n2.Gt.$i = this.qe.Si(t, n2.Gt.Nr)),
            (n2.Gt.It = this.W),
            (n2.Gt.st = n2.st - n2.Gt.$i / 2)),
            _i(n2, t);
        }
      }
    }
  };
  function _i(t, i) {
    (i.fillStyle = t.D),
      void 0 !== t.Gt &&
        (function (t2, i2, n, s) {
          t2.fillText(i2, n, s);
        })(i, t.Gt.Nr, t.Gt.st, t.Gt.et),
      (function (t2, i2) {
        if (0 === t2.Ns) return;
        switch (t2.Fr) {
          case "arrowDown":
            return void li(false, i2, t2.st, t2.et, t2.Ns);
          case "arrowUp":
            return void li(true, i2, t2.st, t2.et, t2.Ns);
          case "circle":
            return void (function (t3, i3, n, s) {
              const e2 = (si("circle", s) - 1) / 2;
              t3.beginPath(),
                t3.arc(i3, n, e2, 0, 2 * Math.PI, false),
                t3.fill();
            })(i2, t2.st, t2.et, t2.Ns);
          case "square":
            return void (function (t3, i3, n, s) {
              const e2 = si("square", s),
                r2 = (e2 - 1) / 2,
                h2 = i3 - r2,
                l2 = n - r2;
              t3.fillRect(h2, l2, e2, e2);
            })(i2, t2.st, t2.et, t2.Ns);
        }
        t2.Fr;
      })(t, i);
  }
  function ui(t, i, n) {
    return (
      !(
        void 0 === t.Gt ||
        !(function (t2, i2, n2, s, e2, r2) {
          const h2 = s / 2;
          return e2 >= t2 && e2 <= t2 + n2 && r2 >= i2 - h2 && r2 <= i2 + h2;
        })(t.Gt.st, t.Gt.et, t.Gt.$i, t.Gt.It, i, n)
      ) ||
      (function (t2, i2, n2) {
        if (0 === t2.Ns) return false;
        switch (t2.Fr) {
          case "arrowDown":
          case "arrowUp":
            return ai(0, t2.st, t2.et, t2.Ns, i2, n2);
          case "circle":
            return (function (t3, i3, n3, s, e2) {
              const r2 = 2 + si("circle", n3) / 2,
                h2 = t3 - s,
                l2 = i3 - e2;
              return Math.sqrt(h2 * h2 + l2 * l2) <= r2;
            })(t2.st, t2.et, t2.Ns, i2, n2);
          case "square":
            return hi(t2.st, t2.et, t2.Ns, i2, n2);
        }
      })(t, i, n)
    );
  }
  function ci(t, i, n, s, e2, r2, h2, l2, a2) {
    const o2 = x(n) ? n : n.ce,
      _2 = x(n) ? n : n._e,
      u2 = x(n) ? n : n.ue,
      c2 = x(i.size) ? Math.max(i.size, 0) : 1,
      d2 = ei(l2.Ks()) * c2,
      f2 = d2 / 2;
    switch (((t.Ns = d2), i.position)) {
      case "inBar":
        return (
          (t.et = h2.Dt(o2, a2)),
          void (void 0 !== t.Gt && (t.Gt.et = t.et + f2 + r2 + 0.6 * e2))
        );
      case "aboveBar":
        return (
          (t.et = h2.Dt(_2, a2) - f2 - s.Wr),
          void 0 !== t.Gt &&
            ((t.Gt.et = t.et - f2 - 0.6 * e2), (s.Wr += 1.2 * e2)),
          void (s.Wr += d2 + r2)
        );
      case "belowBar":
        return (
          (t.et = h2.Dt(u2, a2) + f2 + s.jr),
          void 0 !== t.Gt &&
            ((t.Gt.et = t.et + f2 + r2 + 0.6 * e2), (s.jr += 1.2 * e2)),
          void (s.jr += d2 + r2)
        );
    }
    i.position;
  }
  var di = class {
    constructor(t, i) {
      (this.vt = true),
        (this.$r = true),
        (this.Hr = true),
        (this.Ur = null),
        (this.jt = new oi()),
        (this.Tr = t),
        (this.Hi = i),
        (this.zt = { nt: [], it: null });
    }
    gt(t) {
      (this.vt = true), (this.Hr = true), "data" === t && (this.$r = true);
    }
    Mt(t) {
      if (!this.Tr.Ct()) return null;
      this.vt && this.qr();
      const i = this.Hi.F().layout;
      return this.jt.Ye(i.fontSize, i.fontFamily), this.jt.tt(this.zt), this.jt;
    }
    Yr() {
      if (this.Hr) {
        if (this.Tr.Xr().length > 0) {
          const t = this.Hi.yt().Ks(),
            i = ri(t),
            n = 1.5 * ei(t) + 2 * i;
          this.Ur = { above: n, below: n };
        } else this.Ur = null;
        this.Hr = false;
      }
      return this.Ur;
    }
    qr() {
      const t = this.Tr.Bt(),
        i = this.Hi.yt(),
        n = this.Tr.Xr();
      this.$r &&
        ((this.zt.nt = n.map((t2) => ({
          _t: t2.time,
          st: 0,
          et: 0,
          Ns: 0,
          Fr: t2.shape,
          D: t2.color,
          Vr: t2.internalId,
          nr: t2.id,
          Gt: void 0,
        }))),
        (this.$r = false));
      const s = this.Hi.F().layout;
      this.zt.it = null;
      const e2 = i.Vs();
      if (null === e2) return;
      const r2 = this.Tr.Tt();
      if (null === r2) return;
      if (0 === this.zt.nt.length) return;
      let h2 = NaN;
      const l2 = ri(i.Ks()),
        a2 = { Wr: l2, jr: l2 };
      this.zt.it = kt(this.zt.nt, e2, true);
      for (let e3 = this.zt.it.from; e3 < this.zt.it.to; e3++) {
        const o2 = n[e3];
        o2.time !== h2 && ((a2.Wr = l2), (a2.jr = l2), (h2 = o2.time));
        const _2 = this.zt.nt[e3];
        (_2.st = i.Et(o2.time)),
          void 0 !== o2.text &&
            o2.text.length > 0 &&
            (_2.Gt = { Nr: o2.text, st: 0, et: 0, $i: 0, It: 0 });
        const u2 = this.Tr.Zr(o2.time);
        null !== u2 && ci(_2, o2, u2, a2, s.fontSize, l2, t, i, r2.At);
      }
      this.vt = false;
    }
  };
  var fi = class extends Zt {
    constructor(t) {
      super(t);
    }
    hr() {
      const t = this.er;
      t.Ct = false;
      const i = this.Ts.F();
      if (!i.priceLineVisible || !this.Ts.Ct()) return;
      const n = this.Ts.Or(0 === i.priceLineSource);
      n.Lr ||
        ((t.Ct = true),
        (t.et = n.yi),
        (t.D = this.Ts.Kr(n.D)),
        (t.rt = i.priceLineWidth),
        (t.Ft = i.priceLineStyle));
    }
  };
  var pi = class extends Z {
    constructor(t) {
      super(), (this.$t = t);
    }
    Ei(t, i, n) {
      (t.Ct = false), (i.Ct = false);
      const s = this.$t;
      if (!s.Ct()) return;
      const e2 = s.F(),
        r2 = e2.lastValueVisible,
        h2 = "" !== s.Gr(),
        l2 = 0 === e2.seriesLastValueMode,
        a2 = s.Or(false);
      if (a2.Lr) return;
      r2 && ((t.Gt = this.Jr(a2, r2, l2)), (t.Ct = 0 !== t.Gt.length)),
        (h2 || l2) &&
          ((i.Gt = this.Qr(a2, r2, h2, l2)), (i.Ct = i.Gt.length > 0));
      const o2 = s.Kr(a2.D),
        _2 = w(o2);
      (n.t = _2.t),
        (n.yi = a2.yi),
        (i.Ot = s.Ut().Lt(a2.yi / s.Bt().It())),
        (t.Ot = o2),
        (t.D = _2.i),
        (i.D = _2.i);
    }
    Qr(t, i, n, s) {
      let e2 = "";
      const r2 = this.$t.Gr();
      return (
        n && 0 !== r2.length && (e2 += `${r2} `),
        i && s && (e2 += this.$t.Bt().th() ? t.ih : t.nh),
        e2.trim()
      );
    }
    Jr(t, i, n) {
      return i ? (n ? (this.$t.Bt().th() ? t.nh : t.ih) : t.Gt) : "";
    }
  };
  var vi = class _vi {
    constructor(t, i) {
      (this.sh = t), (this.eh = i);
    }
    rh(t) {
      return null !== t && this.sh === t.sh && this.eh === t.eh;
    }
    hh() {
      return new _vi(this.sh, this.eh);
    }
    lh() {
      return this.sh;
    }
    ah() {
      return this.eh;
    }
    oh() {
      return this.eh - this.sh;
    }
    Ni() {
      return (
        this.eh === this.sh || Number.isNaN(this.eh) || Number.isNaN(this.sh)
      );
    }
    Qn(t) {
      return null === t
        ? this
        : new _vi(Math.min(this.lh(), t.lh()), Math.max(this.ah(), t.ah()));
    }
    _h(t) {
      if (!x(t)) return;
      if (0 === this.eh - this.sh) return;
      const i = 0.5 * (this.eh + this.sh);
      let n = this.eh - i,
        s = this.sh - i;
      (n *= t), (s *= t), (this.eh = i + n), (this.sh = i + s);
    }
    uh(t) {
      x(t) && ((this.eh += t), (this.sh += t));
    }
    dh() {
      return { minValue: this.sh, maxValue: this.eh };
    }
    static fh(t) {
      return null === t ? null : new _vi(t.minValue, t.maxValue);
    }
  };
  var mi = class _mi {
    constructor(t, i) {
      (this.ph = t), (this.mh = i || null);
    }
    bh() {
      return this.ph;
    }
    gh() {
      return this.mh;
    }
    dh() {
      return null === this.ph
        ? null
        : { priceRange: this.ph.dh(), margins: this.mh || void 0 };
    }
    static fh(t) {
      return null === t ? null : new _mi(vi.fh(t.priceRange), t.margins);
    }
  };
  var bi = class extends Zt {
    constructor(t, i) {
      super(t), (this.wh = i);
    }
    hr() {
      const t = this.er;
      t.Ct = false;
      const i = this.wh.F();
      if (!this.Ts.Ct() || !i.lineVisible) return;
      const n = this.wh.Mh();
      null !== n &&
        ((t.Ct = true),
        (t.et = n),
        (t.D = i.color),
        (t.rt = i.lineWidth),
        (t.Ft = i.lineStyle),
        (t.nr = this.wh.F().id));
    }
  };
  var gi = class extends Z {
    constructor(t, i) {
      super(), (this.Tr = t), (this.wh = i);
    }
    Ei(t, i, n) {
      (t.Ct = false), (i.Ct = false);
      const s = this.wh.F(),
        e2 = s.axisLabelVisible,
        r2 = "" !== s.title,
        h2 = this.Tr;
      if (!e2 || !h2.Ct()) return;
      const l2 = this.wh.Mh();
      if (null === l2) return;
      r2 && ((i.Gt = s.title), (i.Ct = true)),
        (i.Ot = h2.Ut().Lt(l2 / h2.Bt().It())),
        (t.Gt = this.Sh(s.price)),
        (t.Ct = true);
      const a2 = w(s.axisLabelColor || s.color);
      n.t = a2.t;
      const o2 = s.axisLabelTextColor || a2.i;
      (t.D = o2), (i.D = o2), (n.yi = l2);
    }
    Sh(t) {
      const i = this.Tr.Tt();
      return null === i ? "" : this.Tr.Bt().Fi(t, i.At);
    }
  };
  var wi = class {
    constructor(t, i) {
      (this.Tr = t),
        (this.un = i),
        (this.xh = new bi(t, this)),
        (this.Xe = new gi(t, this)),
        (this.yh = new Yt(this.Xe, t, t.Ut()));
    }
    kh(t) {
      S(this.un, t), this.gt(), this.Tr.Ut().Ch();
    }
    F() {
      return this.un;
    }
    Th() {
      return this.xh;
    }
    Ph() {
      return this.yh;
    }
    Rh() {
      return this.Xe;
    }
    gt() {
      this.xh.gt(), this.Xe.gt();
    }
    Mh() {
      const t = this.Tr,
        i = t.Bt();
      if (t.Ut().yt().Ni() || i.Ni()) return null;
      const n = t.Tt();
      return null === n ? null : i.Dt(this.un.price, n.At);
    }
  };
  var Mi = class extends tt {
    constructor(t) {
      super(), (this.Hi = t);
    }
    Ut() {
      return this.Hi;
    }
  };
  var Si = {
    Bar: (t, i, n, s) => {
      var e2;
      const r2 = i.upColor,
        h2 = i.downColor,
        l2 = _(t(n, s)),
        a2 = u(l2.At[0]) <= u(l2.At[3]);
      return { ie: null !== (e2 = l2.D) && void 0 !== e2 ? e2 : a2 ? r2 : h2 };
    },
    Candlestick: (t, i, n, s) => {
      var e2, r2, h2;
      const l2 = i.upColor,
        a2 = i.downColor,
        o2 = i.borderUpColor,
        c2 = i.borderDownColor,
        d2 = i.wickUpColor,
        f2 = i.wickDownColor,
        p2 = _(t(n, s)),
        v2 = u(p2.At[0]) <= u(p2.At[3]);
      return {
        ie: null !== (e2 = p2.D) && void 0 !== e2 ? e2 : v2 ? l2 : a2,
        Pe: null !== (r2 = p2.Ot) && void 0 !== r2 ? r2 : v2 ? o2 : c2,
        Te: null !== (h2 = p2.Dh) && void 0 !== h2 ? h2 : v2 ? d2 : f2,
      };
    },
    Area: (t, i, n, s) => {
      var e2, r2, h2, l2;
      const a2 = _(t(n, s));
      return {
        ie: null !== (e2 = a2.ot) && void 0 !== e2 ? e2 : i.lineColor,
        ot: null !== (r2 = a2.ot) && void 0 !== r2 ? r2 : i.lineColor,
        bs: null !== (h2 = a2.bs) && void 0 !== h2 ? h2 : i.topColor,
        gs: null !== (l2 = a2.gs) && void 0 !== l2 ? l2 : i.bottomColor,
      };
    },
    Baseline: (t, i, n, s) => {
      var e2, r2, h2, l2, a2, o2;
      const u2 = _(t(n, s));
      return {
        ie: u2.At[3] >= i.baseValue.price ? i.topLineColor : i.bottomLineColor,
        be: null !== (e2 = u2.be) && void 0 !== e2 ? e2 : i.topLineColor,
        ge: null !== (r2 = u2.ge) && void 0 !== r2 ? r2 : i.bottomLineColor,
        de: null !== (h2 = u2.de) && void 0 !== h2 ? h2 : i.topFillColor1,
        fe: null !== (l2 = u2.fe) && void 0 !== l2 ? l2 : i.topFillColor2,
        pe: null !== (a2 = u2.pe) && void 0 !== a2 ? a2 : i.bottomFillColor1,
        ve: null !== (o2 = u2.ve) && void 0 !== o2 ? o2 : i.bottomFillColor2,
      };
    },
    Line: (t, i, n, s) => {
      var e2, r2;
      const h2 = _(t(n, s));
      return {
        ie: null !== (e2 = h2.D) && void 0 !== e2 ? e2 : i.color,
        ot: null !== (r2 = h2.D) && void 0 !== r2 ? r2 : i.color,
      };
    },
    Histogram: (t, i, n, s) => {
      var e2;
      return {
        ie: null !== (e2 = _(t(n, s)).D) && void 0 !== e2 ? e2 : i.color,
      };
    },
  };
  var xi = class {
    constructor(t) {
      (this.Bh = (t2, i) => (void 0 !== i ? i.At : this.Tr.Ln().Ah(t2))),
        (this.Tr = t),
        (this.Oh = Si[t.Lh()]);
    }
    Os(t, i) {
      return this.Oh(this.Bh, this.Tr.F(), t, i);
    }
  };
  var yi;
  !(function (t) {
    (t[(t.NearestLeft = -1)] = "NearestLeft"),
      (t[(t.None = 0)] = "None"),
      (t[(t.NearestRight = 1)] = "NearestRight");
  })(yi || (yi = {}));
  var ki = 30;
  var Ci = class {
    constructor() {
      (this.Ih = []),
        (this.Eh = /* @__PURE__ */ new Map()),
        (this.zh = /* @__PURE__ */ new Map());
    }
    Vh() {
      return this.Ns() > 0 ? this.Ih[this.Ih.length - 1] : null;
    }
    Nh() {
      return this.Ns() > 0 ? this.Fh(0) : null;
    }
    On() {
      return this.Ns() > 0 ? this.Fh(this.Ih.length - 1) : null;
    }
    Ns() {
      return this.Ih.length;
    }
    Ni() {
      return 0 === this.Ns();
    }
    Ir(t) {
      return null !== this.Wh(t, 0);
    }
    Ah(t) {
      return this.jh(t);
    }
    jh(t, i = 0) {
      const n = this.Wh(t, i);
      return null === n
        ? null
        : Object.assign(Object.assign({}, this.$h(n)), { Ys: this.Fh(n) });
    }
    Us() {
      return this.Ih;
    }
    Hh(t, i, n) {
      if (this.Ni()) return null;
      let s = null;
      for (const e2 of n) {
        s = Ti(s, this.Uh(t, i, e2));
      }
      return s;
    }
    tt(t) {
      this.zh.clear(), this.Eh.clear(), (this.Ih = t);
    }
    Fh(t) {
      return this.Ih[t].Ys;
    }
    $h(t) {
      return this.Ih[t];
    }
    Wh(t, i) {
      const n = this.qh(t);
      if (null === n && 0 !== i)
        switch (i) {
          case -1:
            return this.Yh(t);
          case 1:
            return this.Xh(t);
          default:
            throw new TypeError("Unknown search mode");
        }
      return n;
    }
    Yh(t) {
      let i = this.Zh(t);
      return (
        i > 0 && (i -= 1), i !== this.Ih.length && this.Fh(i) < t ? i : null
      );
    }
    Xh(t) {
      const i = this.Kh(t);
      return i !== this.Ih.length && t < this.Fh(i) ? i : null;
    }
    qh(t) {
      const i = this.Zh(t);
      return i === this.Ih.length || t < this.Ih[i].Ys ? null : i;
    }
    Zh(t) {
      return Mt(this.Ih, t, (t2, i) => t2.Ys < i);
    }
    Kh(t) {
      return St(this.Ih, t, (t2, i) => i.Ys > t2);
    }
    Gh(t, i, n) {
      let s = null;
      for (let e2 = t; e2 < i; e2++) {
        const t2 = this.Ih[e2].At[n];
        Number.isNaN(t2) ||
          (null === s
            ? (s = { Jh: t2, Qh: t2 })
            : (t2 < s.Jh && (s.Jh = t2), t2 > s.Qh && (s.Qh = t2)));
      }
      return s;
    }
    Uh(t, i, n) {
      if (this.Ni()) return null;
      let s = null;
      const e2 = _(this.Nh()),
        r2 = _(this.On()),
        h2 = Math.max(t, e2),
        l2 = Math.min(i, r2),
        a2 = Math.ceil(h2 / ki) * ki,
        o2 = Math.max(a2, Math.floor(l2 / ki) * ki);
      {
        const t2 = this.Zh(h2),
          e3 = this.Kh(Math.min(l2, a2, i));
        s = Ti(s, this.Gh(t2, e3, n));
      }
      let u2 = this.Eh.get(n);
      void 0 === u2 && ((u2 = /* @__PURE__ */ new Map()), this.Eh.set(n, u2));
      for (let t2 = Math.max(a2 + 1, h2); t2 < o2; t2 += ki) {
        const i2 = Math.floor(t2 / ki);
        let e3 = u2.get(i2);
        if (void 0 === e3) {
          const t3 = this.Zh(i2 * ki),
            s2 = this.Kh((i2 + 1) * ki - 1);
          (e3 = this.Gh(t3, s2, n)), u2.set(i2, e3);
        }
        s = Ti(s, e3);
      }
      {
        const t2 = this.Zh(o2),
          i2 = this.Kh(l2);
        s = Ti(s, this.Gh(t2, i2, n));
      }
      return s;
    }
  };
  function Ti(t, i) {
    if (null === t) return i;
    if (null === i) return t;
    return { Jh: Math.min(t.Jh, i.Jh), Qh: Math.max(t.Qh, i.Qh) };
  }
  var Pi = class extends Mi {
    constructor(t, i, n) {
      super(t),
        (this.zt = new Ci()),
        (this.xh = new fi(this)),
        (this.tl = []),
        (this.il = new Kt(this)),
        (this.nl = null),
        (this.sl = null),
        (this.el = []),
        (this.rl = []),
        (this.hl = null),
        (this.un = i),
        (this.ll = n);
      const s = new pi(this);
      (this.rn = [s]),
        (this.yh = new Yt(s, this, t)),
        ("Area" !== n && "Line" !== n && "Baseline" !== n) ||
          (this.nl = new ii(this)),
        this.al(),
        this.ol();
    }
    M() {
      null !== this.hl && clearTimeout(this.hl);
    }
    Kr(t) {
      return this.un.priceLineColor || t;
    }
    Or(t) {
      const i = { Lr: true },
        n = this.Bt();
      if (this.Ut().yt().Ni() || n.Ni() || this.zt.Ni()) return i;
      const s = this.Ut().yt().Vs(),
        e2 = this.Tt();
      if (null === s || null === e2) return i;
      let r2, h2;
      if (t) {
        const t2 = this.zt.Vh();
        if (null === t2) return i;
        (r2 = t2), (h2 = t2.Ys);
      } else {
        const t2 = this.zt.jh(s.ci(), -1);
        if (null === t2) return i;
        if (((r2 = this.zt.Ah(t2.Ys)), null === r2)) return i;
        h2 = t2.Ys;
      }
      const l2 = r2.At[3],
        a2 = this.Ls().Os(h2, { At: r2 }),
        o2 = n.Dt(l2, e2.At);
      return {
        Lr: false,
        ut: l2,
        Gt: n.Fi(l2, e2.At),
        ih: n._l(l2),
        nh: n.ul(l2, e2.At),
        D: a2.ie,
        yi: o2,
        Ys: h2,
      };
    }
    Ls() {
      return null !== this.sl || (this.sl = new xi(this)), this.sl;
    }
    F() {
      return this.un;
    }
    kh(t) {
      const i = t.priceScaleId;
      void 0 !== i && i !== this.un.priceScaleId && this.Ut().cl(this, i),
        S(this.un, t),
        void 0 !== t.priceFormat && (this.al(), this.Ut().dl()),
        this.Ut().fl(this),
        this.Ut().pl(),
        this.bn.gt("options");
    }
    tt(t, i) {
      this.zt.tt(t),
        this.vl(),
        this.bn.gt("data"),
        this.cn.gt("data"),
        null !== this.nl &&
          (i && i.ml ? this.nl.Rr() : 0 === t.length && this.nl.Pr());
      const n = this.Ut().Ke(this);
      this.Ut().bl(n), this.Ut().fl(this), this.Ut().pl(), this.Ut().Ch();
    }
    gl(t) {
      (this.el = t), this.vl();
      const i = this.Ut().Ke(this);
      this.cn.gt("data"),
        this.Ut().bl(i),
        this.Ut().fl(this),
        this.Ut().pl(),
        this.Ut().Ch();
    }
    wl() {
      return this.el;
    }
    Xr() {
      return this.rl;
    }
    Ml(t) {
      const i = new wi(this, t);
      return this.tl.push(i), this.Ut().fl(this), i;
    }
    Sl(t) {
      const i = this.tl.indexOf(t);
      -1 !== i && this.tl.splice(i, 1), this.Ut().fl(this);
    }
    Lh() {
      return this.ll;
    }
    Tt() {
      const t = this.xl();
      return null === t ? null : { At: t.At[3], yl: t._t };
    }
    xl() {
      const t = this.Ut().yt().Vs();
      if (null === t) return null;
      const i = t.Ms();
      return this.zt.jh(i, 1);
    }
    Ln() {
      return this.zt;
    }
    Zr(t) {
      const i = this.zt.Ah(t);
      return null === i
        ? null
        : "Bar" === this.ll || "Candlestick" === this.ll
        ? { oe: i.At[0], _e: i.At[1], ue: i.At[2], ce: i.At[3] }
        : i.At[3];
    }
    kl(t) {
      const i = this.nl;
      return null !== i && i.Ct()
        ? (null === this.hl &&
            i.Br() &&
            (this.hl = setTimeout(() => {
              (this.hl = null), this.Ut().Cl();
            }, 0)),
          i.Dr(),
          [i])
        : [];
    }
    Tn() {
      const t = [];
      this.Tl() || t.push(this.il), t.push(this.bn, this.xh, this.cn);
      const i = this.tl.map((t2) => t2.Th());
      return t.push(...i), t;
    }
    Ji(t) {
      return [this.yh, ...this.tl.map((t2) => t2.Ph())];
    }
    Pn(t, i) {
      if (i !== this.Yi && !this.Tl()) return [];
      const n = [...this.rn];
      for (const t2 of this.tl) n.push(t2.Rh());
      return n;
    }
    Pl(t, i) {
      if (void 0 !== this.un.autoscaleInfoProvider) {
        const n = this.un.autoscaleInfoProvider(() => {
          const n2 = this.Rl(t, i);
          return null === n2 ? null : n2.dh();
        });
        return mi.fh(n);
      }
      return this.Rl(t, i);
    }
    Dl() {
      return this.un.priceFormat.minMove;
    }
    Bl() {
      return this.Al;
    }
    Dn() {
      var t;
      this.bn.gt(), this.cn.gt();
      for (const t2 of this.rn) t2.gt();
      for (const t2 of this.tl) t2.gt();
      this.xh.gt(),
        this.il.gt(),
        null === (t = this.nl) || void 0 === t || t.gt();
    }
    Bt() {
      return _(super.Bt());
    }
    kt(t) {
      if (
        !(
          ("Line" === this.ll ||
            "Area" === this.ll ||
            "Baseline" === this.ll) &&
          this.un.crosshairMarkerVisible
        )
      )
        return null;
      const i = this.zt.Ah(t);
      if (null === i) return null;
      return {
        ut: i.At[3],
        lt: this.Ol(),
        Ot: this.Ll(),
        Rt: this.Il(),
        Pt: this.El(t),
      };
    }
    Gr() {
      return this.un.title;
    }
    Ct() {
      return this.un.visible;
    }
    Tl() {
      return !st(this.Bt().zl());
    }
    Rl(t, i) {
      if (!y(t) || !y(i) || this.zt.Ni()) return null;
      const n =
          "Line" === this.ll ||
          "Area" === this.ll ||
          "Baseline" === this.ll ||
          "Histogram" === this.ll
            ? [3]
            : [2, 1],
        s = this.zt.Hh(t, i, n);
      let e2 = null !== s ? new vi(s.Jh, s.Qh) : null;
      if ("Histogram" === this.Lh()) {
        const t2 = this.un.base,
          i2 = new vi(t2, t2);
        e2 = null !== e2 ? e2.Qn(i2) : i2;
      }
      return new mi(e2, this.cn.Yr());
    }
    Ol() {
      switch (this.ll) {
        case "Line":
        case "Area":
        case "Baseline":
          return this.un.crosshairMarkerRadius;
      }
      return 0;
    }
    Ll() {
      switch (this.ll) {
        case "Line":
        case "Area":
        case "Baseline": {
          const t = this.un.crosshairMarkerBorderColor;
          if (0 !== t.length) return t;
        }
      }
      return null;
    }
    Il() {
      switch (this.ll) {
        case "Line":
        case "Area":
        case "Baseline":
          return this.un.crosshairMarkerBorderWidth;
      }
      return 0;
    }
    El(t) {
      switch (this.ll) {
        case "Line":
        case "Area":
        case "Baseline": {
          const t2 = this.un.crosshairMarkerBackgroundColor;
          if (0 !== t2.length) return t2;
        }
      }
      return this.Ls().Os(t).ie;
    }
    al() {
      switch (this.un.priceFormat.type) {
        case "custom":
          this.Al = { format: this.un.priceFormat.formatter };
          break;
        case "volume":
          this.Al = new ot(this.un.priceFormat.precision);
          break;
        case "percent":
          this.Al = new at(this.un.priceFormat.precision);
          break;
        default: {
          const t = Math.pow(10, this.un.priceFormat.precision);
          this.Al = new lt(t, this.un.priceFormat.minMove * t);
        }
      }
      null !== this.Yi && this.Yi.Vl();
    }
    vl() {
      const t = this.Ut().yt();
      if (!t.Nl() || this.zt.Ni()) return void (this.rl = []);
      const i = _(this.zt.Nh());
      this.rl = this.el.map((n, s) => {
        const e2 = _(t.Fl(n.time, true)),
          r2 = e2 < i ? 1 : -1;
        return {
          time: _(this.zt.jh(e2, r2)).Ys,
          position: n.position,
          shape: n.shape,
          color: n.color,
          id: n.id,
          internalId: s,
          text: n.text,
          size: n.size,
        };
      });
    }
    ol() {
      switch (((this.cn = new di(this, this.Ut())), this.ll)) {
        case "Bar":
          this.bn = new Bt(this, this.Ut());
          break;
        case "Candlestick":
          this.bn = new Ft(this, this.Ut());
          break;
        case "Line":
          this.bn = new $t(this, this.Ut());
          break;
        case "Area":
          this.bn = new Pt(this, this.Ut());
          break;
        case "Baseline":
          this.bn = new Vt(this, this.Ut());
          break;
        case "Histogram":
          this.bn = new jt(this, this.Ut());
          break;
        default:
          throw Error("Unknown chart style assigned: " + this.ll);
      }
    }
  };
  var Ri = class {
    constructor(t) {
      this.un = t;
    }
    Wl(t, i, n) {
      let s = t;
      if (0 === this.un.mode) return s;
      const e2 = n.fn(),
        r2 = e2.Tt();
      if (null === r2) return s;
      const h2 = e2.Dt(t, r2),
        l2 = n
          .jl()
          .filter((t2) => t2 instanceof Pi)
          .reduce((t2, s2) => {
            if (n.Ge(s2) || !s2.Ct()) return t2;
            const e3 = s2.Bt(),
              r3 = s2.Ln();
            if (e3.Ni() || !r3.Ir(i)) return t2;
            const h3 = r3.Ah(i);
            if (null === h3) return t2;
            const l3 = u(s2.Tt());
            return t2.concat([e3.Dt(h3.At[3], l3.At)]);
          }, []);
      if (0 === l2.length) return s;
      l2.sort((t2, i2) => Math.abs(t2 - h2) - Math.abs(i2 - h2));
      const a2 = l2[0];
      return (s = e2.pn(a2, r2)), s;
    }
  };
  var Di = class extends N {
    constructor() {
      super(...arguments), (this.zt = null);
    }
    tt(t) {
      this.zt = t;
    }
    Z({
      context: t,
      bitmapSize: i,
      horizontalPixelRatio: n,
      verticalPixelRatio: s,
    }) {
      if (null === this.zt) return;
      const e2 = Math.max(1, Math.floor(n));
      (t.lineWidth = e2),
        (function (t2, i2) {
          t2.save(),
            t2.lineWidth % 2 && t2.translate(0.5, 0.5),
            i2(),
            t2.restore();
        })(t, () => {
          const r2 = _(this.zt);
          if (r2.$l) {
            (t.strokeStyle = r2.Hl), h(t, r2.Ul), t.beginPath();
            for (const s2 of r2.ql) {
              const r3 = Math.round(s2.Yl * n);
              t.moveTo(r3, -e2), t.lineTo(r3, i.height + e2);
            }
            t.stroke();
          }
          if (r2.Xl) {
            (t.strokeStyle = r2.Zl), h(t, r2.Kl), t.beginPath();
            for (const n2 of r2.Gl) {
              const r3 = Math.round(n2.Yl * s);
              t.moveTo(-e2, r3), t.lineTo(i.width + e2, r3);
            }
            t.stroke();
          }
        });
    }
  };
  var Bi = class {
    constructor(t) {
      (this.jt = new Di()), (this.vt = true), (this.tn = t);
    }
    gt() {
      this.vt = true;
    }
    Mt() {
      if (this.vt) {
        const t = this.tn.Ut().F().grid,
          i = {
            Xl: t.horzLines.visible,
            $l: t.vertLines.visible,
            Zl: t.horzLines.color,
            Hl: t.vertLines.color,
            Kl: t.horzLines.style,
            Ul: t.vertLines.style,
            Gl: this.tn.fn().Jl(),
            ql: this.tn.Ut().yt().Jl() || [],
          };
        this.jt.tt(i), (this.vt = false);
      }
      return this.jt;
    }
  };
  var Ai = class {
    constructor(t) {
      this.bn = new Bi(t);
    }
    Th() {
      return this.bn;
    }
  };
  var Oi = { Ql: 4, ta: 1e-4 };
  function Li(t, i) {
    const n = (100 * (t - i)) / i;
    return i < 0 ? -n : n;
  }
  function Ii(t, i) {
    const n = Li(t.lh(), i),
      s = Li(t.ah(), i);
    return new vi(n, s);
  }
  function Ei(t, i) {
    const n = (100 * (t - i)) / i + 100;
    return i < 0 ? -n : n;
  }
  function zi(t, i) {
    const n = Ei(t.lh(), i),
      s = Ei(t.ah(), i);
    return new vi(n, s);
  }
  function Vi(t, i) {
    const n = Math.abs(t);
    if (n < 1e-15) return 0;
    const s = Lt(n + i.ta) + i.Ql;
    return t < 0 ? -s : s;
  }
  function Ni(t, i) {
    const n = Math.abs(t);
    if (n < 1e-15) return 0;
    const s = Math.pow(10, n - i.Ql) - i.ta;
    return t < 0 ? -s : s;
  }
  function Fi(t, i) {
    if (null === t) return null;
    const n = Vi(t.lh(), i),
      s = Vi(t.ah(), i);
    return new vi(n, s);
  }
  function Wi(t, i) {
    if (null === t) return null;
    const n = Ni(t.lh(), i),
      s = Ni(t.ah(), i);
    return new vi(n, s);
  }
  function ji(t) {
    if (null === t) return Oi;
    const i = Math.abs(t.ah() - t.lh());
    if (i >= 1 || i < 1e-15) return Oi;
    const n = Math.ceil(Math.abs(Math.log10(i))),
      s = Oi.Ql + n;
    return { Ql: s, ta: 1 / Math.pow(10, s) };
  }
  var $i = class {
    constructor(t, i) {
      if (
        ((this.ia = t),
        (this.na = i),
        (function (t2) {
          if (t2 < 0) return false;
          for (let i2 = t2; i2 > 1; i2 /= 10) if (i2 % 10 != 0) return false;
          return true;
        })(this.ia))
      )
        this.sa = [2, 2.5, 2];
      else {
        this.sa = [];
        for (let t2 = this.ia; 1 !== t2; ) {
          if (t2 % 2 == 0) this.sa.push(2), (t2 /= 2);
          else {
            if (t2 % 5 != 0) throw new Error("unexpected base");
            this.sa.push(2, 2.5), (t2 /= 5);
          }
          if (this.sa.length > 100)
            throw new Error("something wrong with base");
        }
      }
    }
    ea(t, i, n) {
      const s = 0 === this.ia ? 0 : 1 / this.ia;
      let e2 = Math.pow(10, Math.max(0, Math.ceil(Lt(t - i)))),
        r2 = 0,
        h2 = this.na[0];
      for (;;) {
        const t2 = Ot(e2, s, 1e-14) && e2 > s + 1e-14,
          i2 = Ot(e2, n * h2, 1e-14),
          l3 = Ot(e2, 1, 1e-14);
        if (!(t2 && i2 && l3)) break;
        (e2 /= h2), (h2 = this.na[++r2 % this.na.length]);
      }
      if (
        (e2 <= s + 1e-14 && (e2 = s),
        (e2 = Math.max(1, e2)),
        this.sa.length > 0 &&
          ((l2 = e2), (a2 = 1), (o2 = 1e-14), Math.abs(l2 - a2) < o2))
      )
        for (r2 = 0, h2 = this.sa[0]; Ot(e2, n * h2, 1e-14) && e2 > s + 1e-14; )
          (e2 /= h2), (h2 = this.sa[++r2 % this.sa.length]);
      var l2, a2, o2;
      return e2;
    }
  };
  var Hi = class {
    constructor(t, i, n, s) {
      (this.ra = []),
        (this.zi = t),
        (this.ia = i),
        (this.ha = n),
        (this.la = s);
    }
    ea(t, i) {
      if (t < i) throw new Error("high < low");
      const n = this.zi.It(),
        s = ((t - i) * this.aa()) / n,
        e2 = new $i(this.ia, [2, 2.5, 2]),
        r2 = new $i(this.ia, [2, 2, 2.5]),
        h2 = new $i(this.ia, [2.5, 2, 2]),
        l2 = [];
      return (
        l2.push(e2.ea(t, i, s), r2.ea(t, i, s), h2.ea(t, i, s)),
        (function (t2) {
          if (t2.length < 1) throw Error("array is empty");
          let i2 = t2[0];
          for (let n2 = 1; n2 < t2.length; ++n2) t2[n2] < i2 && (i2 = t2[n2]);
          return i2;
        })(l2)
      );
    }
    oa() {
      const t = this.zi,
        i = t.Tt();
      if (null === i) return void (this.ra = []);
      const n = t.It(),
        s = this.ha(n - 1, i),
        e2 = this.ha(0, i),
        r2 = this.zi.F().entireTextOnly ? this._a() / 2 : 0,
        h2 = r2,
        l2 = n - 1 - r2,
        a2 = Math.max(s, e2),
        o2 = Math.min(s, e2);
      if (a2 === o2) return void (this.ra = []);
      let _2 = this.ea(a2, o2),
        u2 = a2 % _2;
      u2 += u2 < 0 ? _2 : 0;
      const c2 = a2 >= o2 ? 1 : -1;
      let d2 = null,
        f2 = 0;
      for (let n2 = a2 - u2; n2 > o2; n2 -= _2) {
        const s2 = this.la(n2, i, true);
        (null !== d2 && Math.abs(s2 - d2) < this.aa()) ||
          s2 < h2 ||
          s2 > l2 ||
          (f2 < this.ra.length
            ? ((this.ra[f2].Yl = s2), (this.ra[f2].ua = t.ca(n2)))
            : this.ra.push({ Yl: s2, ua: t.ca(n2) }),
          f2++,
          (d2 = s2),
          t.da() && (_2 = this.ea(n2 * c2, o2)));
      }
      this.ra.length = f2;
    }
    Jl() {
      return this.ra;
    }
    _a() {
      return this.zi.T();
    }
    aa() {
      return Math.ceil(2.5 * this._a());
    }
  };
  function Ui(t) {
    return t.slice().sort((t2, i) => _(t2.Zi()) - _(i.Zi()));
  }
  var qi;
  !(function (t) {
    (t[(t.Normal = 0)] = "Normal"),
      (t[(t.Logarithmic = 1)] = "Logarithmic"),
      (t[(t.Percentage = 2)] = "Percentage"),
      (t[(t.IndexedTo100 = 3)] = "IndexedTo100");
  })(qi || (qi = {}));
  var Yi = new at();
  var Xi = new lt(100, 1);
  var Zi = class {
    constructor(t, i, n, s) {
      (this.fa = 0),
        (this.pa = null),
        (this.ph = null),
        (this.va = null),
        (this.ma = { ba: false, ga: null }),
        (this.wa = 0),
        (this.Ma = 0),
        (this.Sa = new M()),
        (this.xa = new M()),
        (this.ya = []),
        (this.ka = null),
        (this.Ca = null),
        (this.Ta = null),
        (this.Pa = null),
        (this.Al = Xi),
        (this.Ra = ji(null)),
        (this.Da = t),
        (this.un = i),
        (this.Ba = n),
        (this.Aa = s),
        (this.Oa = new Hi(this, 100, this.La.bind(this), this.Ia.bind(this)));
    }
    zl() {
      return this.Da;
    }
    F() {
      return this.un;
    }
    kh(t) {
      if (
        (S(this.un, t),
        this.Vl(),
        void 0 !== t.mode && this.Ea({ lr: t.mode }),
        void 0 !== t.scaleMargins)
      ) {
        const i = o(t.scaleMargins.top),
          n = o(t.scaleMargins.bottom);
        if (i < 0 || i > 1)
          throw new Error(
            `Invalid top margin - expect value between 0 and 1, given=${i}`
          );
        if (n < 0 || n > 1 || i + n > 1)
          throw new Error(
            `Invalid bottom margin - expect value between 0 and 1, given=${n}`
          );
        if (i + n > 1)
          throw new Error(
            `Invalid margins - sum of margins must be less than 1, given=${
              i + n
            }`
          );
        this.za(), (this.Ca = null);
      }
    }
    Va() {
      return this.un.autoScale;
    }
    da() {
      return 1 === this.un.mode;
    }
    th() {
      return 2 === this.un.mode;
    }
    Na() {
      return 3 === this.un.mode;
    }
    lr() {
      return {
        Fn: this.un.autoScale,
        Fa: this.un.invertScale,
        lr: this.un.mode,
      };
    }
    Ea(t) {
      const i = this.lr();
      let n = null;
      void 0 !== t.Fn && (this.un.autoScale = t.Fn),
        void 0 !== t.lr &&
          ((this.un.mode = t.lr),
          (2 !== t.lr && 3 !== t.lr) || (this.un.autoScale = true),
          (this.ma.ba = false)),
        1 === i.lr &&
          t.lr !== i.lr &&
          (!(function (t2, i2) {
            if (null === t2) return false;
            const n2 = Ni(t2.lh(), i2),
              s2 = Ni(t2.ah(), i2);
            return isFinite(n2) && isFinite(s2);
          })(this.ph, this.Ra)
            ? (this.un.autoScale = true)
            : ((n = Wi(this.ph, this.Ra)), null !== n && this.Wa(n))),
        1 === t.lr &&
          t.lr !== i.lr &&
          ((n = Fi(this.ph, this.Ra)), null !== n && this.Wa(n));
      const s = i.lr !== this.un.mode;
      s && (2 === i.lr || this.th()) && this.Vl(),
        s && (3 === i.lr || this.Na()) && this.Vl(),
        void 0 !== t.Fa &&
          i.Fa !== t.Fa &&
          ((this.un.invertScale = t.Fa), this.ja()),
        this.xa.m(i, this.lr());
    }
    $a() {
      return this.xa;
    }
    T() {
      return this.Ba.fontSize;
    }
    It() {
      return this.fa;
    }
    Ha(t) {
      this.fa !== t && ((this.fa = t), this.za(), (this.Ca = null));
    }
    Ua() {
      if (this.pa) return this.pa;
      const t = this.It() - this.qa() - this.Ya();
      return (this.pa = t), t;
    }
    bh() {
      return this.Xa(), this.ph;
    }
    Wa(t, i) {
      const n = this.ph;
      (i || (null === n && null !== t) || (null !== n && !n.rh(t))) &&
        ((this.Ca = null), (this.ph = t));
    }
    Ni() {
      return this.Xa(), 0 === this.fa || !this.ph || this.ph.Ni();
    }
    Za(t) {
      return this.Fa() ? t : this.It() - 1 - t;
    }
    Dt(t, i) {
      return (
        this.th() ? (t = Li(t, i)) : this.Na() && (t = Ei(t, i)), this.Ia(t, i)
      );
    }
    $s(t, i, n) {
      this.Xa();
      const s = this.Ya(),
        e2 = _(this.bh()),
        r2 = e2.lh(),
        h2 = e2.ah(),
        l2 = this.Ua() - 1,
        a2 = this.Fa(),
        o2 = l2 / (h2 - r2),
        u2 = void 0 === n ? 0 : n.from,
        c2 = void 0 === n ? t.length : n.to,
        d2 = this.Ka();
      for (let n2 = u2; n2 < c2; n2++) {
        const e3 = t[n2],
          h3 = e3.ut;
        if (isNaN(h3)) continue;
        let l3 = h3;
        null !== d2 && (l3 = d2(e3.ut, i));
        const _2 = s + o2 * (l3 - r2),
          u3 = a2 ? _2 : this.fa - 1 - _2;
        e3.et = u3;
      }
    }
    le(t, i, n) {
      this.Xa();
      const s = this.Ya(),
        e2 = _(this.bh()),
        r2 = e2.lh(),
        h2 = e2.ah(),
        l2 = this.Ua() - 1,
        a2 = this.Fa(),
        o2 = l2 / (h2 - r2),
        u2 = void 0 === n ? 0 : n.from,
        c2 = void 0 === n ? t.length : n.to,
        d2 = this.Ka();
      for (let n2 = u2; n2 < c2; n2++) {
        const e3 = t[n2];
        let h3 = e3.oe,
          l3 = e3._e,
          _2 = e3.ue,
          u3 = e3.ce;
        null !== d2 &&
          ((h3 = d2(e3.oe, i)),
          (l3 = d2(e3._e, i)),
          (_2 = d2(e3.ue, i)),
          (u3 = d2(e3.ce, i)));
        let c3 = s + o2 * (h3 - r2),
          f2 = a2 ? c3 : this.fa - 1 - c3;
        (e3.re = f2),
          (c3 = s + o2 * (l3 - r2)),
          (f2 = a2 ? c3 : this.fa - 1 - c3),
          (e3.ne = f2),
          (c3 = s + o2 * (_2 - r2)),
          (f2 = a2 ? c3 : this.fa - 1 - c3),
          (e3.se = f2),
          (c3 = s + o2 * (u3 - r2)),
          (f2 = a2 ? c3 : this.fa - 1 - c3),
          (e3.he = f2);
      }
    }
    pn(t, i) {
      const n = this.La(t, i);
      return this.Ga(n, i);
    }
    Ga(t, i) {
      let n = t;
      return (
        this.th()
          ? (n = (function (t2, i2) {
              return i2 < 0 && (t2 = -t2), (t2 / 100) * i2 + i2;
            })(n, i))
          : this.Na() &&
            (n = (function (t2, i2) {
              return (t2 -= 100), i2 < 0 && (t2 = -t2), (t2 / 100) * i2 + i2;
            })(n, i)),
        n
      );
    }
    jl() {
      return this.ya;
    }
    Ja() {
      if (this.ka) return this.ka;
      let t = [];
      for (let i = 0; i < this.ya.length; i++) {
        const n = this.ya[i];
        null === n.Zi() && n.Ki(i + 1), t.push(n);
      }
      return (t = Ui(t)), (this.ka = t), this.ka;
    }
    Qa(t) {
      -1 === this.ya.indexOf(t) && (this.ya.push(t), this.Vl(), this.io());
    }
    no(t) {
      const i = this.ya.indexOf(t);
      if (-1 === i) throw new Error("source is not attached to scale");
      this.ya.splice(i, 1),
        0 === this.ya.length && (this.Ea({ Fn: true }), this.Wa(null)),
        this.Vl(),
        this.io();
    }
    Tt() {
      let t = null;
      for (const i of this.ya) {
        const n = i.Tt();
        null !== n && (null === t || n.yl < t.yl) && (t = n);
      }
      return null === t ? null : t.At;
    }
    Fa() {
      return this.un.invertScale;
    }
    Jl() {
      const t = null === this.Tt();
      if (null !== this.Ca && (t || this.Ca.so === t)) return this.Ca.Jl;
      this.Oa.oa();
      const i = this.Oa.Jl();
      return (this.Ca = { Jl: i, so: t }), this.Sa.m(), i;
    }
    eo() {
      return this.Sa;
    }
    ro(t) {
      this.th() ||
        this.Na() ||
        (null === this.Ta &&
          null === this.va &&
          (this.Ni() ||
            ((this.Ta = this.fa - t), (this.va = _(this.bh()).hh()))));
    }
    ho(t) {
      if (this.th() || this.Na()) return;
      if (null === this.Ta) return;
      this.Ea({ Fn: false }), (t = this.fa - t) < 0 && (t = 0);
      let i = (this.Ta + 0.2 * (this.fa - 1)) / (t + 0.2 * (this.fa - 1));
      const n = _(this.va).hh();
      (i = Math.max(i, 0.1)), n._h(i), this.Wa(n);
    }
    lo() {
      this.th() || this.Na() || ((this.Ta = null), (this.va = null));
    }
    ao(t) {
      this.Va() ||
        (null === this.Pa &&
          null === this.va &&
          (this.Ni() || ((this.Pa = t), (this.va = _(this.bh()).hh()))));
    }
    oo(t) {
      if (this.Va()) return;
      if (null === this.Pa) return;
      const i = _(this.bh()).oh() / (this.Ua() - 1);
      let n = t - this.Pa;
      this.Fa() && (n *= -1);
      const s = n * i,
        e2 = _(this.va).hh();
      e2.uh(s), this.Wa(e2, true), (this.Ca = null);
    }
    _o() {
      this.Va() || (null !== this.Pa && ((this.Pa = null), (this.va = null)));
    }
    Bl() {
      return this.Al || this.Vl(), this.Al;
    }
    Fi(t, i) {
      switch (this.un.mode) {
        case 2:
          return this.Bl().format(Li(t, i));
        case 3:
          return this.Bl().format(Ei(t, i));
        default:
          return this.Sh(t);
      }
    }
    ca(t) {
      switch (this.un.mode) {
        case 2:
        case 3:
          return this.Bl().format(t);
        default:
          return this.Sh(t);
      }
    }
    _l(t) {
      return this.Sh(t, _(this.uo()).Bl());
    }
    ul(t, i) {
      return (t = Li(t, i)), Yi.format(t);
    }
    co() {
      return this.ya;
    }
    do(t) {
      this.ma = { ga: t, ba: false };
    }
    Dn() {
      this.ya.forEach((t) => t.Dn());
    }
    Vl() {
      this.Ca = null;
      const t = this.uo();
      let i = 100;
      null !== t && (i = Math.round(1 / t.Dl())),
        (this.Al = Xi),
        this.th()
          ? ((this.Al = Yi), (i = 100))
          : this.Na()
          ? ((this.Al = new lt(100, 1)), (i = 100))
          : null !== t && (this.Al = t.Bl()),
        (this.Oa = new Hi(this, i, this.La.bind(this), this.Ia.bind(this))),
        this.Oa.oa();
    }
    io() {
      this.ka = null;
    }
    uo() {
      return this.ya[0] || null;
    }
    qa() {
      return this.Fa()
        ? this.un.scaleMargins.bottom * this.It() + this.Ma
        : this.un.scaleMargins.top * this.It() + this.wa;
    }
    Ya() {
      return this.Fa()
        ? this.un.scaleMargins.top * this.It() + this.wa
        : this.un.scaleMargins.bottom * this.It() + this.Ma;
    }
    Xa() {
      this.ma.ba || ((this.ma.ba = true), this.fo());
    }
    za() {
      this.pa = null;
    }
    Ia(t, i) {
      if ((this.Xa(), this.Ni())) return 0;
      t = this.da() && t ? Vi(t, this.Ra) : t;
      const n = _(this.bh()),
        s = this.Ya() + ((this.Ua() - 1) * (t - n.lh())) / n.oh();
      return this.Za(s);
    }
    La(t, i) {
      if ((this.Xa(), this.Ni())) return 0;
      const n = this.Za(t),
        s = _(this.bh()),
        e2 = s.lh() + s.oh() * ((n - this.Ya()) / (this.Ua() - 1));
      return this.da() ? Ni(e2, this.Ra) : e2;
    }
    ja() {
      (this.Ca = null), this.Oa.oa();
    }
    fo() {
      const t = this.ma.ga;
      if (null === t) return;
      let i = null;
      const n = this.co();
      let s = 0,
        e2 = 0;
      for (const r3 of n) {
        if (!r3.Ct()) continue;
        const n2 = r3.Tt();
        if (null === n2) continue;
        const h3 = r3.Pl(t.Ms(), t.ci());
        let l2 = h3 && h3.bh();
        if (null !== l2) {
          switch (this.un.mode) {
            case 1:
              l2 = Fi(l2, this.Ra);
              break;
            case 2:
              l2 = Ii(l2, n2.At);
              break;
            case 3:
              l2 = zi(l2, n2.At);
          }
          if (((i = null === i ? l2 : i.Qn(_(l2))), null !== h3)) {
            const t2 = h3.gh();
            null !== t2 &&
              ((s = Math.max(s, t2.above)), (e2 = Math.max(s, t2.below)));
          }
        }
      }
      if (
        ((s === this.wa && e2 === this.Ma) ||
          ((this.wa = s), (this.Ma = e2), (this.Ca = null), this.za()),
        null !== i)
      ) {
        if (i.lh() === i.ah()) {
          const t2 = this.uo(),
            n2 = 5 * (null === t2 || this.th() || this.Na() ? 1 : t2.Dl());
          this.da() && (i = Wi(i, this.Ra)),
            (i = new vi(i.lh() - n2, i.ah() + n2)),
            this.da() && (i = Fi(i, this.Ra));
        }
        if (this.da()) {
          const t2 = Wi(i, this.Ra),
            n2 = ji(t2);
          if (((r2 = n2), (h2 = this.Ra), r2.Ql !== h2.Ql || r2.ta !== h2.ta)) {
            const s2 = null !== this.va ? Wi(this.va, this.Ra) : null;
            (this.Ra = n2),
              (i = Fi(t2, n2)),
              null !== s2 && (this.va = Fi(s2, n2));
          }
        }
        this.Wa(i);
      } else
        null === this.ph && (this.Wa(new vi(-0.5, 0.5)), (this.Ra = ji(null)));
      var r2, h2;
      this.ma.ba = true;
    }
    Ka() {
      return this.th()
        ? Li
        : this.Na()
        ? Ei
        : this.da()
        ? (t) => Vi(t, this.Ra)
        : null;
    }
    Sh(t, i) {
      return void 0 === this.Aa.priceFormatter
        ? (void 0 === i && (i = this.Bl()), i.format(t))
        : this.Aa.priceFormatter(t);
    }
  };
  var Ki = class {
    constructor(t, i) {
      (this.ya = []),
        (this.po = /* @__PURE__ */ new Map()),
        (this.fa = 0),
        (this.vo = 0),
        (this.mo = 1e3),
        (this.ka = null),
        (this.bo = new M()),
        (this.wo = t),
        (this.Hi = i),
        (this.Mo = new Ai(this));
      const n = i.F();
      (this.So = this.xo("left", n.leftPriceScale)),
        (this.yo = this.xo("right", n.rightPriceScale)),
        this.So.$a().l(this.ko.bind(this, this.So), this),
        this.yo.$a().l(this.ko.bind(this, this.yo), this),
        this.Co(n);
    }
    Co(t) {
      if (
        (t.leftPriceScale && this.So.kh(t.leftPriceScale),
        t.rightPriceScale && this.yo.kh(t.rightPriceScale),
        t.localization && (this.So.Vl(), this.yo.Vl()),
        t.overlayPriceScales)
      ) {
        const i = Array.from(this.po.values());
        for (const n of i) {
          const i2 = _(n[0].Bt());
          i2.kh(t.overlayPriceScales), t.localization && i2.Vl();
        }
      }
    }
    To(t) {
      switch (t) {
        case "left":
          return this.So;
        case "right":
          return this.yo;
      }
      return this.po.has(t) ? o(this.po.get(t))[0].Bt() : null;
    }
    M() {
      this.Ut().Po().v(this),
        this.So.$a().v(this),
        this.yo.$a().v(this),
        this.ya.forEach((t) => {
          t.M && t.M();
        }),
        this.bo.m();
    }
    Ro() {
      return this.mo;
    }
    Do(t) {
      this.mo = t;
    }
    Ut() {
      return this.Hi;
    }
    $i() {
      return this.vo;
    }
    It() {
      return this.fa;
    }
    Bo(t) {
      (this.vo = t), this.Ao();
    }
    Ha(t) {
      (this.fa = t),
        this.So.Ha(t),
        this.yo.Ha(t),
        this.ya.forEach((i) => {
          if (this.Ge(i)) {
            const n = i.Bt();
            null !== n && n.Ha(t);
          }
        }),
        this.Ao();
    }
    jl() {
      return this.ya;
    }
    Ge(t) {
      const i = t.Bt();
      return null === i || (this.So !== i && this.yo !== i);
    }
    Qa(t, i, n) {
      const s = void 0 !== n ? n : this.Lo().Oo + 1;
      this.Io(t, i, s);
    }
    no(t) {
      const i = this.ya.indexOf(t);
      a(-1 !== i, "removeDataSource: invalid data source"),
        this.ya.splice(i, 1);
      const n = _(t.Bt()).zl();
      if (this.po.has(n)) {
        const i2 = o(this.po.get(n)),
          s2 = i2.indexOf(t);
        -1 !== s2 && (i2.splice(s2, 1), 0 === i2.length && this.po.delete(n));
      }
      const s = t.Bt();
      s && s.jl().indexOf(t) >= 0 && s.no(t),
        null !== s && (s.io(), this.Eo(s)),
        (this.ka = null);
    }
    Qe(t) {
      return t === this.So ? "left" : t === this.yo ? "right" : "overlay";
    }
    zo() {
      return this.So;
    }
    Vo() {
      return this.yo;
    }
    No(t, i) {
      t.ro(i);
    }
    Fo(t, i) {
      t.ho(i), this.Ao();
    }
    Wo(t) {
      t.lo();
    }
    jo(t, i) {
      t.ao(i);
    }
    $o(t, i) {
      t.oo(i), this.Ao();
    }
    Ho(t) {
      t._o();
    }
    Ao() {
      this.ya.forEach((t) => {
        t.Dn();
      });
    }
    fn() {
      let t = null;
      return (
        this.Hi.F().rightPriceScale.visible && 0 !== this.yo.jl().length
          ? (t = this.yo)
          : this.Hi.F().leftPriceScale.visible && 0 !== this.So.jl().length
          ? (t = this.So)
          : 0 !== this.ya.length && (t = this.ya[0].Bt()),
        null === t && (t = this.yo),
        t
      );
    }
    Je() {
      let t = null;
      return (
        this.Hi.F().rightPriceScale.visible
          ? (t = this.yo)
          : this.Hi.F().leftPriceScale.visible && (t = this.So),
        t
      );
    }
    Eo(t) {
      null !== t && t.Va() && this.Uo(t);
    }
    qo(t) {
      const i = this.wo.Vs();
      t.Ea({ Fn: true }), null !== i && t.do(i), this.Ao();
    }
    Yo() {
      this.Uo(this.So), this.Uo(this.yo);
    }
    Xo() {
      this.Eo(this.So),
        this.Eo(this.yo),
        this.ya.forEach((t) => {
          this.Ge(t) && this.Eo(t.Bt());
        }),
        this.Ao(),
        this.Hi.Ch();
    }
    Ja() {
      return null === this.ka && (this.ka = Ui(this.ya)), this.ka;
    }
    Zo() {
      return this.bo;
    }
    Ko() {
      return this.Mo;
    }
    Uo(t) {
      const i = t.co();
      if (i && i.length > 0 && !this.wo.Ni()) {
        const i2 = this.wo.Vs();
        null !== i2 && t.do(i2);
      }
      t.Dn();
    }
    Lo() {
      const t = this.Ja();
      if (0 === t.length) return { Go: 0, Oo: 0 };
      let i = 0,
        n = 0;
      for (let s = 0; s < t.length; s++) {
        const e2 = t[s].Zi();
        null !== e2 && (e2 < i && (i = e2), e2 > n && (n = e2));
      }
      return { Go: i, Oo: n };
    }
    Io(t, i, n) {
      let s = this.To(i);
      if (
        (null === s && (s = this.xo(i, this.Hi.F().overlayPriceScales)),
        this.ya.push(t),
        !st(i))
      ) {
        const n2 = this.po.get(i) || [];
        n2.push(t), this.po.set(i, n2);
      }
      s.Qa(t), t.Gi(s), t.Ki(n), this.Eo(s), (this.ka = null);
    }
    ko(t, i, n) {
      i.lr !== n.lr && this.Uo(t);
    }
    xo(t, i) {
      const n = Object.assign({ visible: true, autoScale: true }, T(i)),
        s = new Zi(t, n, this.Hi.F().layout, this.Hi.F().localization);
      return s.Ha(this.It()), s;
    }
  };
  var Gi = (t) => t.getUTCFullYear();
  var Ji = (t) => ht(((t2) => t2.getUTCDate())(t), 2);
  var Qi = (t, i) =>
    new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, {
      month: "long",
    });
  var tn = (t, i) =>
    new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, {
      month: "short",
    });
  var nn = (t) => ht(((t2) => t2.getUTCMonth() + 1)(t), 2);
  var sn = (t) => ht(Gi(t) % 100, 2);
  var en = (t) => ht(Gi(t), 4);
  var rn = class {
    constructor(t = "yyyy-MM-dd", i = "default") {
      (this.Jo = t), (this.Qo = i);
    }
    t_(t) {
      return (function (t2, i, n) {
        return i
          .replace(/yyyy/g, en(t2))
          .replace(/yy/g, sn(t2))
          .replace(/MMMM/g, Qi(t2, n))
          .replace(/MMM/g, tn(t2, n))
          .replace(/MM/g, nn(t2))
          .replace(/dd/g, Ji(t2));
      })(t, this.Jo, this.Qo);
    }
  };
  var hn = class {
    constructor(t) {
      this.i_ = t || "%h:%m:%s";
    }
    t_(t) {
      return this.i_
        .replace("%h", ht(t.getUTCHours(), 2))
        .replace("%m", ht(t.getUTCMinutes(), 2))
        .replace("%s", ht(t.getUTCSeconds(), 2));
    }
  };
  var ln = { n_: "yyyy-MM-dd", s_: "%h:%m:%s", e_: " ", r_: "default" };
  var an = class {
    constructor(t = {}) {
      const i = Object.assign(Object.assign({}, ln), t);
      (this.h_ = new rn(i.n_, i.r_)),
        (this.l_ = new hn(i.s_)),
        (this.a_ = i.e_);
    }
    t_(t) {
      return `${this.h_.t_(t)}${this.a_}${this.l_.t_(t)}`;
    }
  };
  var on = class {
    constructor(t, i = 50) {
      (this.Le = 0),
        (this.Ie = 1),
        (this.Ee = 1),
        (this.Ve = /* @__PURE__ */ new Map()),
        (this.ze = /* @__PURE__ */ new Map()),
        (this.o_ = t),
        (this.Ne = i);
    }
    t_(t) {
      const i = t._t,
        n =
          void 0 === i.__
            ? new Date(1e3 * i.u_).getTime()
            : new Date(Date.UTC(i.__.year, i.__.month - 1, i.__.day)).getTime(),
        s = this.Ve.get(n);
      if (void 0 !== s) return s.c_;
      if (this.Le === this.Ne) {
        const t2 = this.ze.get(this.Ee);
        this.ze.delete(this.Ee), this.Ve.delete(o(t2)), this.Ee++, this.Le--;
      }
      const e2 = this.o_(t);
      return (
        this.Ve.set(n, { c_: e2, $e: this.Ie }),
        this.ze.set(this.Ie, n),
        this.Le++,
        this.Ie++,
        e2
      );
    }
  };
  var _n = class {
    constructor(t, i) {
      a(t <= i, "right should be >= left"), (this.d_ = t), (this.f_ = i);
    }
    Ms() {
      return this.d_;
    }
    ci() {
      return this.f_;
    }
    p_() {
      return this.f_ - this.d_ + 1;
    }
    Ir(t) {
      return this.d_ <= t && t <= this.f_;
    }
    rh(t) {
      return this.d_ === t.Ms() && this.f_ === t.ci();
    }
  };
  function un(t, i) {
    return null === t || null === i ? t === i : t.rh(i);
  }
  var cn = class {
    constructor() {
      (this.v_ = /* @__PURE__ */ new Map()), (this.Ve = null);
    }
    m_(t, i) {
      this.b_(i), (this.Ve = null);
      for (let n = i; n < t.length; ++n) {
        const i2 = t[n];
        let s = this.v_.get(i2.g_);
        void 0 === s && ((s = []), this.v_.set(i2.g_, s)),
          s.push({ Ys: n, _t: i2._t, w_: i2.g_, M_: i2.M_ });
      }
    }
    S_(t, i) {
      const n = Math.ceil(i / t);
      return (
        (null !== this.Ve && this.Ve.x_ === n) ||
          (this.Ve = { Jl: this.y_(n), x_: n }),
        this.Ve.Jl
      );
    }
    b_(t) {
      if (0 === t) return void this.v_.clear();
      const i = [];
      this.v_.forEach((n, s) => {
        t <= n[0].Ys
          ? i.push(s)
          : n.splice(
              Mt(n, t, (i2) => i2.Ys < t),
              1 / 0
            );
      });
      for (const t2 of i) this.v_.delete(t2);
    }
    y_(t) {
      let i = [];
      for (const n of Array.from(this.v_.keys()).sort((t2, i2) => i2 - t2)) {
        if (!this.v_.get(n)) continue;
        const s = i;
        i = [];
        const e2 = s.length;
        let r2 = 0;
        const h2 = o(this.v_.get(n)),
          l2 = h2.length;
        let a2 = 1 / 0,
          _2 = -1 / 0;
        for (let n2 = 0; n2 < l2; n2++) {
          const l3 = h2[n2],
            o2 = l3.Ys;
          for (; r2 < e2; ) {
            const t2 = s[r2],
              n3 = t2.Ys;
            if (!(n3 < o2)) {
              a2 = n3;
              break;
            }
            r2++, i.push(t2), (_2 = n3), (a2 = 1 / 0);
          }
          a2 - o2 >= t && o2 - _2 >= t && (i.push(l3), (_2 = o2));
        }
        for (; r2 < e2; r2++) i.push(s[r2]);
      }
      return i;
    }
  };
  var dn = class _dn {
    constructor(t) {
      this.k_ = t;
    }
    C_() {
      return null === this.k_
        ? null
        : new _n(Math.floor(this.k_.Ms()), Math.ceil(this.k_.ci()));
    }
    T_() {
      return this.k_;
    }
    static P_() {
      return new _dn(null);
    }
  };
  var fn;
  var pn;
  var vn;
  var mn;
  var bn;
  !(function (t) {
    (t[(t.Year = 0)] = "Year"),
      (t[(t.Month = 1)] = "Month"),
      (t[(t.DayOfMonth = 2)] = "DayOfMonth"),
      (t[(t.Time = 3)] = "Time"),
      (t[(t.TimeWithSeconds = 4)] = "TimeWithSeconds");
  })(fn || (fn = {}));
  var gn = class {
    constructor(t, i, n) {
      (this.vo = 0),
        (this.R_ = null),
        (this.D_ = []),
        (this.Pa = null),
        (this.Ta = null),
        (this.B_ = new cn()),
        (this.A_ = /* @__PURE__ */ new Map()),
        (this.O_ = dn.P_()),
        (this.L_ = true),
        (this.I_ = new M()),
        (this.E_ = new M()),
        (this.z_ = new M()),
        (this.V_ = null),
        (this.N_ = null),
        (this.F_ = []),
        (this.un = i),
        (this.Aa = n),
        (this.W_ = i.rightOffset),
        (this.j_ = i.barSpacing),
        (this.Hi = t),
        this.H_();
    }
    F() {
      return this.un;
    }
    U_(t) {
      S(this.Aa, t), this.q_(), this.H_();
    }
    kh(t, i) {
      var n;
      S(this.un, t),
        this.un.fixLeftEdge && this.Y_(),
        this.un.fixRightEdge && this.X_(),
        void 0 !== t.barSpacing && this.Hi.Kn(t.barSpacing),
        void 0 !== t.rightOffset && this.Hi.Gn(t.rightOffset),
        void 0 !== t.minBarSpacing &&
          this.Hi.Kn(null !== (n = t.barSpacing) && void 0 !== n ? n : this.j_),
        this.q_(),
        this.H_(),
        this.z_.m();
    }
    vn(t) {
      var i, n;
      return null !==
        (n = null === (i = this.D_[t]) || void 0 === i ? void 0 : i._t) &&
        void 0 !== n
        ? n
        : null;
    }
    Ui(t) {
      var i;
      return null !== (i = this.D_[t]) && void 0 !== i ? i : null;
    }
    Fl(t, i) {
      if (this.D_.length < 1) return null;
      if (t.u_ > this.D_[this.D_.length - 1]._t.u_)
        return i ? this.D_.length - 1 : null;
      const n = Mt(this.D_, t.u_, (t2, i2) => t2._t.u_ < i2);
      return t.u_ < this.D_[n]._t.u_ ? (i ? n : null) : n;
    }
    Ni() {
      return 0 === this.vo || 0 === this.D_.length || null === this.R_;
    }
    Nl() {
      return this.D_.length > 0;
    }
    Vs() {
      return this.Z_(), this.O_.C_();
    }
    K_() {
      return this.Z_(), this.O_.T_();
    }
    G_() {
      const t = this.Vs();
      if (null === t) return null;
      const i = { from: t.Ms(), to: t.ci() };
      return this.J_(i);
    }
    J_(t) {
      const i = Math.round(t.from),
        n = Math.round(t.to),
        s = _(this.Q_()),
        e2 = _(this.tu());
      return {
        from: _(this.vn(Math.max(s, i))),
        to: _(this.vn(Math.min(e2, n))),
      };
    }
    iu(t) {
      return { from: _(this.Fl(t.from, true)), to: _(this.Fl(t.to, true)) };
    }
    $i() {
      return this.vo;
    }
    Bo(t) {
      if (!isFinite(t) || t <= 0) return;
      if (this.vo === t) return;
      const i = this.K_(),
        n = this.vo;
      if (
        ((this.vo = t),
        (this.L_ = true),
        this.un.lockVisibleTimeRangeOnResize && 0 !== n)
      ) {
        const i2 = (this.j_ * t) / n;
        this.j_ = i2;
      }
      if (this.un.fixLeftEdge && null !== i && i.Ms() <= 0) {
        const i2 = n - t;
        (this.W_ -= Math.round(i2 / this.j_) + 1), (this.L_ = true);
      }
      this.nu(), this.su();
    }
    Et(t) {
      if (this.Ni() || !y(t)) return 0;
      const i = this.eu() + this.W_ - t;
      return this.vo - (i + 0.5) * this.j_ - 1;
    }
    js(t, i) {
      const n = this.eu(),
        s = void 0 === i ? 0 : i.from,
        e2 = void 0 === i ? t.length : i.to;
      for (let i2 = s; i2 < e2; i2++) {
        const s2 = t[i2]._t,
          e3 = n + this.W_ - s2,
          r2 = this.vo - (e3 + 0.5) * this.j_ - 1;
        t[i2].st = r2;
      }
    }
    ru(t) {
      return Math.ceil(this.hu(t));
    }
    Gn(t) {
      (this.L_ = true), (this.W_ = t), this.su(), this.Hi.lu(), this.Hi.Ch();
    }
    Ks() {
      return this.j_;
    }
    Kn(t) {
      this.au(t), this.su(), this.Hi.lu(), this.Hi.Ch();
    }
    ou() {
      return this.W_;
    }
    Jl() {
      if (this.Ni()) return null;
      if (null !== this.N_) return this.N_;
      const t = this.j_,
        i = 5 * (this.Hi.F().layout.fontSize + 4),
        n = Math.round(i / t),
        s = _(this.Vs()),
        e2 = Math.max(s.Ms(), s.Ms() - n),
        r2 = Math.max(s.ci(), s.ci() - n),
        h2 = this.B_.S_(t, i),
        l2 = this.Q_() + n,
        a2 = this.tu() - n,
        o2 = this._u(),
        u2 = this.un.fixLeftEdge || o2,
        c2 = this.un.fixRightEdge || o2;
      let d2 = 0;
      for (const t2 of h2) {
        if (!(e2 <= t2.Ys && t2.Ys <= r2)) continue;
        let n2;
        d2 < this.F_.length
          ? ((n2 = this.F_[d2]),
            (n2.Yl = this.Et(t2.Ys)),
            (n2.ua = this.uu(t2)),
            (n2.w_ = t2.w_))
          : ((n2 = {
              cu: false,
              Yl: this.Et(t2.Ys),
              ua: this.uu(t2),
              w_: t2.w_,
            }),
            this.F_.push(n2)),
          this.j_ > i / 2 && !o2
            ? (n2.cu = false)
            : (n2.cu = (u2 && t2.Ys <= l2) || (c2 && t2.Ys >= a2)),
          d2++;
      }
      return (this.F_.length = d2), (this.N_ = this.F_), this.F_;
    }
    du() {
      (this.L_ = true),
        this.Kn(this.un.barSpacing),
        this.Gn(this.un.rightOffset);
    }
    fu(t) {
      (this.L_ = true), (this.R_ = t), this.su(), this.Y_();
    }
    pu(t, i) {
      const n = this.hu(t),
        s = this.Ks(),
        e2 = s + i * (s / 10);
      this.Kn(e2),
        this.un.rightBarStaysOnScroll || this.Gn(this.ou() + (n - this.hu(t)));
    }
    ro(t) {
      this.Pa && this._o(),
        null === this.Ta &&
          null === this.V_ &&
          (this.Ni() || ((this.Ta = t), this.vu()));
    }
    ho(t) {
      if (null === this.V_) return;
      const i = At(this.vo - t, 0, this.vo),
        n = At(this.vo - _(this.Ta), 0, this.vo);
      0 !== i && 0 !== n && this.Kn((this.V_.Ks * i) / n);
    }
    lo() {
      null !== this.Ta && ((this.Ta = null), this.mu());
    }
    ao(t) {
      null === this.Pa &&
        null === this.V_ &&
        (this.Ni() || ((this.Pa = t), this.vu()));
    }
    oo(t) {
      if (null === this.Pa) return;
      const i = (this.Pa - t) / this.Ks();
      (this.W_ = _(this.V_).ou + i), (this.L_ = true), this.su();
    }
    _o() {
      null !== this.Pa && ((this.Pa = null), this.mu());
    }
    bu() {
      this.gu(this.un.rightOffset);
    }
    gu(t, i = 400) {
      if (!isFinite(t))
        throw new RangeError("offset is required and must be finite number");
      if (!isFinite(i) || i <= 0)
        throw new RangeError(
          "animationDuration (optional) must be finite positive number"
        );
      const n = this.W_,
        s = performance.now();
      this.Hi.Yn({
        wu: (t2) => (t2 - s) / i >= 1,
        Mu: (e2) => {
          const r2 = (e2 - s) / i;
          return r2 >= 1 ? t : n + (t - n) * r2;
        },
      });
    }
    gt(t, i) {
      (this.L_ = true), (this.D_ = t), this.B_.m_(t, i), this.su();
    }
    Su() {
      return this.I_;
    }
    xu() {
      return this.E_;
    }
    yu() {
      return this.z_;
    }
    eu() {
      return this.R_ || 0;
    }
    ku(t) {
      const i = t.p_();
      this.au(this.vo / i),
        (this.W_ = t.ci() - this.eu()),
        this.su(),
        (this.L_ = true),
        this.Hi.lu(),
        this.Hi.Ch();
    }
    Cu() {
      const t = this.Q_(),
        i = this.tu();
      null !== t && null !== i && this.ku(new _n(t, i + this.un.rightOffset));
    }
    Tu(t) {
      const i = new _n(t.from, t.to);
      this.ku(i);
    }
    qi(t) {
      return void 0 !== this.Aa.timeFormatter
        ? this.Aa.timeFormatter(t.M_)
        : this.Pu.t_(new Date(1e3 * t._t.u_));
    }
    _u() {
      const { handleScroll: t, handleScale: i } = this.Hi.F();
      return !(
        t.horzTouchDrag ||
        t.mouseWheel ||
        t.pressedMouseMove ||
        t.vertTouchDrag ||
        i.axisDoubleClickReset.time ||
        i.axisPressedMouseMove.time ||
        i.mouseWheel ||
        i.pinch
      );
    }
    Q_() {
      return 0 === this.D_.length ? null : 0;
    }
    tu() {
      return 0 === this.D_.length ? null : this.D_.length - 1;
    }
    Ru(t) {
      return (this.vo - 1 - t) / this.j_;
    }
    hu(t) {
      const i = this.Ru(t),
        n = this.eu() + this.W_ - i;
      return Math.round(1e6 * n) / 1e6;
    }
    au(t) {
      const i = this.j_;
      (this.j_ = t), this.nu(), i !== this.j_ && ((this.L_ = true), this.Du());
    }
    Z_() {
      if (!this.L_) return;
      if (((this.L_ = false), this.Ni())) return void this.Bu(dn.P_());
      const t = this.eu(),
        i = this.vo / this.j_,
        n = this.W_ + t,
        s = new _n(n - i + 1, n);
      this.Bu(new dn(s));
    }
    nu() {
      const t = this.Au();
      if ((this.j_ < t && ((this.j_ = t), (this.L_ = true)), 0 !== this.vo)) {
        const t2 = 0.5 * this.vo;
        this.j_ > t2 && ((this.j_ = t2), (this.L_ = true));
      }
    }
    Au() {
      return this.un.fixLeftEdge && this.un.fixRightEdge && 0 !== this.D_.length
        ? this.vo / this.D_.length
        : this.un.minBarSpacing;
    }
    su() {
      const t = this.Ou();
      this.W_ > t && ((this.W_ = t), (this.L_ = true));
      const i = this.Lu();
      null !== i && this.W_ < i && ((this.W_ = i), (this.L_ = true));
    }
    Lu() {
      const t = this.Q_(),
        i = this.R_;
      if (null === t || null === i) return null;
      return (
        t -
        i -
        1 +
        (this.un.fixLeftEdge ? this.vo / this.j_ : Math.min(2, this.D_.length))
      );
    }
    Ou() {
      return this.un.fixRightEdge
        ? 0
        : this.vo / this.j_ - Math.min(2, this.D_.length);
    }
    vu() {
      this.V_ = { Ks: this.Ks(), ou: this.ou() };
    }
    mu() {
      this.V_ = null;
    }
    uu(t) {
      let i = this.A_.get(t.w_);
      return (
        void 0 === i &&
          ((i = new on((t2) => this.Iu(t2))), this.A_.set(t.w_, i)),
        i.t_(t)
      );
    }
    Iu(t) {
      const i = (function (t2, i2, n) {
        switch (t2) {
          case 0:
          case 10:
            return i2 ? (n ? 4 : 3) : 2;
          case 20:
          case 21:
          case 22:
          case 30:
          case 31:
          case 32:
          case 33:
            return i2 ? 3 : 2;
          case 50:
            return 2;
          case 60:
            return 1;
          case 70:
            return 0;
        }
      })(t.w_, this.un.timeVisible, this.un.secondsVisible);
      if (void 0 !== this.un.tickMarkFormatter) {
        const n = this.un.tickMarkFormatter(t.M_, i, this.Aa.locale);
        if (null !== n) return n;
      }
      return (function (t2, i2, n) {
        const s = {};
        switch (i2) {
          case 0:
            s.year = "numeric";
            break;
          case 1:
            s.month = "short";
            break;
          case 2:
            s.day = "numeric";
            break;
          case 3:
            (s.hour12 = false), (s.hour = "2-digit"), (s.minute = "2-digit");
            break;
          case 4:
            (s.hour12 = false),
              (s.hour = "2-digit"),
              (s.minute = "2-digit"),
              (s.second = "2-digit");
        }
        const e2 =
          void 0 === t2.__
            ? new Date(1e3 * t2.u_)
            : new Date(Date.UTC(t2.__.year, t2.__.month - 1, t2.__.day));
        return new Date(
          e2.getUTCFullYear(),
          e2.getUTCMonth(),
          e2.getUTCDate(),
          e2.getUTCHours(),
          e2.getUTCMinutes(),
          e2.getUTCSeconds(),
          e2.getUTCMilliseconds()
        ).toLocaleString(n, s);
      })(t._t, i, this.Aa.locale);
    }
    Bu(t) {
      const i = this.O_;
      (this.O_ = t),
        un(i.C_(), this.O_.C_()) || this.I_.m(),
        un(i.T_(), this.O_.T_()) || this.E_.m(),
        this.Du();
    }
    Du() {
      this.N_ = null;
    }
    q_() {
      this.Du(), this.A_.clear();
    }
    H_() {
      const t = this.Aa.dateFormat;
      this.un.timeVisible
        ? (this.Pu = new an({
            n_: t,
            s_: this.un.secondsVisible ? "%h:%m:%s" : "%h:%m",
            e_: "   ",
            r_: this.Aa.locale,
          }))
        : (this.Pu = new rn(t, this.Aa.locale));
    }
    Y_() {
      if (!this.un.fixLeftEdge) return;
      const t = this.Q_();
      if (null === t) return;
      const i = this.Vs();
      if (null === i) return;
      const n = i.Ms() - t;
      if (n < 0) {
        const t2 = this.W_ - n - 1;
        this.Gn(t2);
      }
      this.nu();
    }
    X_() {
      this.su(), this.nu();
    }
  };
  var wn = class extends L {
    constructor(t) {
      super(), (this.Eu = /* @__PURE__ */ new Map()), (this.zt = t);
    }
    Z(t) {}
    G(t) {
      if (!this.zt.Ct) return;
      const { context: i, mediaSize: n } = t;
      let s = 0;
      for (const t2 of this.zt.zu) {
        if (0 === t2.Gt.length) continue;
        i.font = t2.P;
        const e3 = this.Vu(i, t2.Gt);
        e3 > n.width ? (t2.pu = n.width / e3) : (t2.pu = 1),
          (s += t2.Nu * t2.pu);
      }
      let e2 = 0;
      switch (this.zt.Fu) {
        case "top":
          e2 = 0;
          break;
        case "center":
          e2 = Math.max((n.height - s) / 2, 0);
          break;
        case "bottom":
          e2 = Math.max(n.height - s, 0);
      }
      i.fillStyle = this.zt.D;
      for (const t2 of this.zt.zu) {
        i.save();
        let s2 = 0;
        switch (this.zt.Wu) {
          case "left":
            (i.textAlign = "left"), (s2 = t2.Nu / 2);
            break;
          case "center":
            (i.textAlign = "center"), (s2 = n.width / 2);
            break;
          case "right":
            (i.textAlign = "right"), (s2 = n.width - 1 - t2.Nu / 2);
        }
        i.translate(s2, e2),
          (i.textBaseline = "top"),
          (i.font = t2.P),
          i.scale(t2.pu, t2.pu),
          i.fillText(t2.Gt, 0, t2.ju),
          i.restore(),
          (e2 += t2.Nu * t2.pu);
      }
    }
    Vu(t, i) {
      const n = this.$u(t.font);
      let s = n.get(i);
      return void 0 === s && ((s = t.measureText(i).width), n.set(i, s)), s;
    }
    $u(t) {
      let i = this.Eu.get(t);
      return (
        void 0 === i && ((i = /* @__PURE__ */ new Map()), this.Eu.set(t, i)), i
      );
    }
  };
  var Mn = class {
    constructor(t) {
      (this.vt = true),
        (this.Wt = { Ct: false, D: "", zu: [], Fu: "center", Wu: "center" }),
        (this.jt = new wn(this.Wt)),
        (this.$t = t);
    }
    gt() {
      this.vt = true;
    }
    Mt() {
      return this.vt && (this.St(), (this.vt = false)), this.jt;
    }
    St() {
      const t = this.$t.F(),
        i = this.Wt;
      (i.Ct = t.visible),
        i.Ct &&
          ((i.D = t.color),
          (i.Wu = t.horzAlign),
          (i.Fu = t.vertAlign),
          (i.zu = [
            {
              Gt: t.text,
              P: B(t.fontSize, t.fontFamily, t.fontStyle),
              Nu: 1.2 * t.fontSize,
              ju: 0,
              pu: 0,
            },
          ]));
    }
  };
  var Sn = class extends tt {
    constructor(t, i) {
      super(), (this.un = i), (this.bn = new Mn(this));
    }
    Pn() {
      return [];
    }
    Tn() {
      return [this.bn];
    }
    F() {
      return this.un;
    }
    Dn() {
      this.bn.gt();
    }
  };
  !(function (t) {
    (t[(t.OnTouchEnd = 0)] = "OnTouchEnd"),
      (t[(t.OnNextTap = 1)] = "OnNextTap");
  })(pn || (pn = {}));
  var xn = class {
    constructor(t, i) {
      (this.Hu = []),
        (this.Uu = []),
        (this.vo = 0),
        (this.qu = null),
        (this.Yu = new M()),
        (this.Xu = new M()),
        (this.Zu = null),
        (this.Ku = t),
        (this.un = i),
        (this.Gu = new A(this)),
        (this.wo = new gn(this, i.timeScale, this.un.localization)),
        (this.bt = new nt(this, i.crosshair)),
        (this.Ju = new Ri(i.crosshair)),
        (this.Qu = new Sn(this, i.watermark)),
        this.tc(),
        this.Hu[0].Do(2e3),
        (this.ic = this.nc(0)),
        (this.sc = this.nc(1));
    }
    dl() {
      this.ec(et.ss());
    }
    Ch() {
      this.ec(et.ns());
    }
    Cl() {
      this.ec(new et(1));
    }
    fl(t) {
      const i = this.rc(t);
      this.ec(i);
    }
    hc() {
      return this.qu;
    }
    lc(t) {
      const i = this.qu;
      (this.qu = t), null !== i && this.fl(i.ac), null !== t && this.fl(t.ac);
    }
    F() {
      return this.un;
    }
    kh(t) {
      S(this.un, t),
        this.Hu.forEach((i) => i.Co(t)),
        void 0 !== t.timeScale && this.wo.kh(t.timeScale),
        void 0 !== t.localization && this.wo.U_(t.localization),
        (t.leftPriceScale || t.rightPriceScale) && this.Yu.m(),
        (this.ic = this.nc(0)),
        (this.sc = this.nc(1)),
        this.dl();
    }
    oc(t, i) {
      if ("left" === t) return void this.kh({ leftPriceScale: i });
      if ("right" === t) return void this.kh({ rightPriceScale: i });
      const n = this._c(t);
      null !== n && (n.Bt.kh(i), this.Yu.m());
    }
    _c(t) {
      for (const i of this.Hu) {
        const n = i.To(t);
        if (null !== n) return { Ht: i, Bt: n };
      }
      return null;
    }
    yt() {
      return this.wo;
    }
    uc() {
      return this.Hu;
    }
    cc() {
      return this.Qu;
    }
    dc() {
      return this.bt;
    }
    fc() {
      return this.Xu;
    }
    vc(t, i) {
      t.Ha(i), this.lu();
    }
    Bo(t) {
      (this.vo = t),
        this.wo.Bo(this.vo),
        this.Hu.forEach((i) => i.Bo(t)),
        this.lu();
    }
    tc(t) {
      const i = new Ki(this.wo, this);
      void 0 !== t ? this.Hu.splice(t, 0, i) : this.Hu.push(i);
      const n = void 0 === t ? this.Hu.length - 1 : t,
        s = et.ss();
      return s.Vn(n, { Nn: 0, Fn: true }), this.ec(s), i;
    }
    No(t, i, n) {
      t.No(i, n);
    }
    Fo(t, i, n) {
      t.Fo(i, n), this.pl(), this.ec(this.mc(t, 2));
    }
    Wo(t, i) {
      t.Wo(i), this.ec(this.mc(t, 2));
    }
    jo(t, i, n) {
      i.Va() || t.jo(i, n);
    }
    $o(t, i, n) {
      i.Va() || (t.$o(i, n), this.pl(), this.ec(this.mc(t, 2)));
    }
    Ho(t, i) {
      i.Va() || (t.Ho(i), this.ec(this.mc(t, 2)));
    }
    qo(t, i) {
      t.qo(i), this.ec(this.mc(t, 2));
    }
    bc(t) {
      this.wo.ro(t);
    }
    gc(t, i) {
      const n = this.yt();
      if (n.Ni() || 0 === i) return;
      const s = n.$i();
      (t = Math.max(1, Math.min(t, s))), n.pu(t, i), this.lu();
    }
    wc(t) {
      this.Mc(0), this.Sc(t), this.xc();
    }
    yc(t) {
      this.wo.ho(t), this.lu();
    }
    kc() {
      this.wo.lo(), this.Ch();
    }
    Mc(t) {
      this.wo.ao(t);
    }
    Sc(t) {
      this.wo.oo(t), this.lu();
    }
    xc() {
      this.wo._o(), this.Ch();
    }
    wt() {
      return this.Uu;
    }
    Cc(t, i, n, s) {
      this.bt.gn(t, i);
      let e2 = NaN,
        r2 = this.wo.ru(t);
      const h2 = this.wo.Vs();
      null !== h2 && (r2 = Math.min(Math.max(h2.Ms(), r2), h2.ci()));
      const l2 = s.fn(),
        a2 = l2.Tt();
      null !== a2 && (e2 = l2.pn(i, a2)),
        (e2 = this.Ju.Wl(e2, r2, s)),
        this.bt.xn(r2, e2, s),
        this.Cl(),
        this.Xu.m(this.bt.xt(), { x: t, y: i }, n);
    }
    Tc() {
      this.dc().kn(), this.Cl(), this.Xu.m(null, null, null);
    }
    pl() {
      const t = this.bt.Ht();
      if (null !== t) {
        const i = this.bt.Mn(),
          n = this.bt.Sn();
        this.Cc(i, n, null, t);
      }
      this.bt.Dn();
    }
    Pc(t, i, n) {
      const s = this.wo.vn(0);
      void 0 !== i && void 0 !== n && this.wo.gt(i, n);
      const e2 = this.wo.vn(0),
        r2 = this.wo.eu(),
        h2 = this.wo.Vs();
      if (null !== h2 && null !== s && null !== e2) {
        const i2 = h2.Ir(r2),
          n2 = s.u_ > e2.u_,
          l2 = null !== t && t > r2 && !n2,
          a2 = i2 && this.wo.F().shiftVisibleRangeOnNewBar;
        if (l2 && !a2) {
          const i3 = t - r2;
          this.wo.Gn(this.wo.ou() - i3);
        }
      }
      this.wo.fu(t);
    }
    bl(t) {
      null !== t && t.Xo();
    }
    Ke(t) {
      const i = this.Hu.find((i2) => i2.Ja().includes(t));
      return void 0 === i ? null : i;
    }
    lu() {
      this.Qu.Dn(), this.Hu.forEach((t) => t.Xo()), this.pl();
    }
    M() {
      this.Hu.forEach((t) => t.M()),
        (this.Hu.length = 0),
        (this.un.localization.priceFormatter = void 0),
        (this.un.localization.timeFormatter = void 0);
    }
    Rc() {
      return this.Gu;
    }
    tr() {
      return this.Gu.F();
    }
    Po() {
      return this.Yu;
    }
    Dc(t, i) {
      const n = this.Hu[0],
        s = this.Bc(i, t, n);
      return this.Uu.push(s), 1 === this.Uu.length ? this.dl() : this.Ch(), s;
    }
    Ac(t) {
      const i = this.Ke(t),
        n = this.Uu.indexOf(t);
      a(-1 !== n, "Series not found"),
        this.Uu.splice(n, 1),
        _(i).no(t),
        t.M && t.M();
    }
    cl(t, i) {
      const n = _(this.Ke(t));
      n.no(t);
      const s = this._c(i);
      if (null === s) {
        const s2 = t.Zi();
        n.Qa(t, i, s2);
      } else {
        const e2 = s.Ht === n ? t.Zi() : void 0;
        s.Ht.Qa(t, i, e2);
      }
    }
    Cu() {
      const t = et.ns();
      t.$n(), this.ec(t);
    }
    Oc(t) {
      const i = et.ns();
      i.qn(t), this.ec(i);
    }
    Zn() {
      const t = et.ns();
      t.Zn(), this.ec(t);
    }
    Kn(t) {
      const i = et.ns();
      i.Kn(t), this.ec(i);
    }
    Gn(t) {
      const i = et.ns();
      i.Gn(t), this.ec(i);
    }
    Yn(t) {
      const i = et.ns();
      i.Yn(t), this.ec(i);
    }
    Hn() {
      const t = et.ns();
      t.Hn(), this.ec(t);
    }
    Lc() {
      return this.un.rightPriceScale.visible ? "right" : "left";
    }
    Ic() {
      return this.sc;
    }
    U() {
      return this.ic;
    }
    Lt(t) {
      const i = this.sc,
        n = this.ic;
      if (i === n) return i;
      if (
        ((t = Math.max(0, Math.min(100, Math.round(100 * t)))),
        null === this.Zu || this.Zu.bs !== n || this.Zu.gs !== i)
      )
        this.Zu = { bs: n, gs: i, Ec: /* @__PURE__ */ new Map() };
      else {
        const i2 = this.Zu.Ec.get(t);
        if (void 0 !== i2) return i2;
      }
      const s = (function (t2, i2, n2) {
        const [s2, e2, r2, h2] = g(t2),
          [l2, a2, o2, _2] = g(i2),
          u2 = [
            d(s2 + n2 * (l2 - s2)),
            d(e2 + n2 * (a2 - e2)),
            d(r2 + n2 * (o2 - r2)),
            f(h2 + n2 * (_2 - h2)),
          ];
        return `rgba(${u2[0]}, ${u2[1]}, ${u2[2]}, ${u2[3]})`;
      })(n, i, t / 100);
      return this.Zu.Ec.set(t, s), s;
    }
    mc(t, i) {
      const n = new et(i);
      if (null !== t) {
        const s = this.Hu.indexOf(t);
        n.Vn(s, { Nn: i });
      }
      return n;
    }
    rc(t, i) {
      return void 0 === i && (i = 2), this.mc(this.Ke(t), i);
    }
    ec(t) {
      this.Ku && this.Ku(t), this.Hu.forEach((t2) => t2.Ko().Th().gt());
    }
    Bc(t, i, n) {
      const s = new Pi(this, t, i),
        e2 = void 0 !== t.priceScaleId ? t.priceScaleId : this.Lc();
      return n.Qa(s, e2), st(e2) || s.kh(t), s;
    }
    nc(t) {
      const i = this.un.layout;
      return "gradient" === i.background.type
        ? 0 === t
          ? i.background.topColor
          : i.background.bottomColor
        : i.background.color;
    }
  };
  function yn(t) {
    return !x(t) && !k(t);
  }
  function kn(t) {
    return x(t);
  }
  !(function (t) {
    (t[(t.Disabled = 0)] = "Disabled"),
      (t[(t.Continuous = 1)] = "Continuous"),
      (t[(t.OnDataUpdate = 2)] = "OnDataUpdate");
  })(vn || (vn = {})),
    (function (t) {
      (t[(t.LastBar = 0)] = "LastBar"),
        (t[(t.LastVisible = 1)] = "LastVisible");
    })(mn || (mn = {})),
    (function (t) {
      (t.Solid = "solid"), (t.VerticalGradient = "gradient");
    })(bn || (bn = {}));
  var Cn = "undefined" != typeof window;
  function Tn() {
    return (
      !!Cn && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1
    );
  }
  function Pn() {
    return !!Cn && /iPhone|iPad|iPod/.test(window.navigator.platform);
  }
  function Rn(t) {
    return t + (t % 2);
  }
  function Dn(t, i) {
    return t.zc - i.zc;
  }
  function Bn(t, i, n) {
    const s = (t.zc - i.zc) / (t._t - i._t);
    return Math.sign(s) * Math.min(Math.abs(s), n);
  }
  var An = class {
    constructor(t, i, n, s) {
      (this.Vc = null),
        (this.Nc = null),
        (this.Fc = null),
        (this.Wc = null),
        (this.jc = null),
        (this.$c = 0),
        (this.Hc = 0),
        (this.Uc = t),
        (this.qc = i),
        (this.Yc = n),
        (this.es = s);
    }
    Xc(t, i) {
      if (null !== this.Vc) {
        if (this.Vc._t === i) return void (this.Vc.zc = t);
        if (Math.abs(this.Vc.zc - t) < this.es) return;
      }
      (this.Wc = this.Fc),
        (this.Fc = this.Nc),
        (this.Nc = this.Vc),
        (this.Vc = { _t: i, zc: t });
    }
    pr(t, i) {
      if (null === this.Vc || null === this.Nc) return;
      if (i - this.Vc._t > 50) return;
      let n = 0;
      const s = Bn(this.Vc, this.Nc, this.qc),
        e2 = Dn(this.Vc, this.Nc),
        r2 = [s],
        h2 = [e2];
      if (((n += e2), null !== this.Fc)) {
        const t2 = Bn(this.Nc, this.Fc, this.qc);
        if (Math.sign(t2) === Math.sign(s)) {
          const i2 = Dn(this.Nc, this.Fc);
          if ((r2.push(t2), h2.push(i2), (n += i2), null !== this.Wc)) {
            const t3 = Bn(this.Fc, this.Wc, this.qc);
            if (Math.sign(t3) === Math.sign(s)) {
              const i3 = Dn(this.Fc, this.Wc);
              r2.push(t3), h2.push(i3), (n += i3);
            }
          }
        }
      }
      let l2 = 0;
      for (let t2 = 0; t2 < r2.length; ++t2) l2 += (h2[t2] / n) * r2[t2];
      Math.abs(l2) < this.Uc ||
        ((this.jc = { zc: t, _t: i }),
        (this.Hc = l2),
        (this.$c = (function (t2, i2) {
          const n2 = Math.log(i2);
          return Math.log((1 * n2) / -t2) / n2;
        })(Math.abs(l2), this.Yc)));
    }
    Mu(t) {
      const i = _(this.jc),
        n = t - i._t;
      return i.zc + (this.Hc * (Math.pow(this.Yc, n) - 1)) / Math.log(this.Yc);
    }
    wu(t) {
      return null === this.jc || this.Zc(t) === this.$c;
    }
    Zc(t) {
      const i = t - _(this.jc)._t;
      return Math.min(i, this.$c);
    }
  };
  function On(t, n) {
    const s = _(t.ownerDocument).createElement("canvas");
    t.appendChild(s);
    const e2 = bindTo(s, {
      type: "device-pixel-content-box",
      options: { allowResizeObserver: false },
      transform: (t2, i) => ({
        width: Math.max(t2.width, i.width),
        height: Math.max(t2.height, i.height),
      }),
    });
    return e2.resizeCanvasElement(n), e2;
  }
  function Ln(t) {
    Cn &&
      void 0 !== window.chrome &&
      t.addEventListener("mousedown", (t2) => {
        if (1 === t2.button) return t2.preventDefault(), false;
      });
  }
  var In = class {
    constructor(t, i, n) {
      (this.Kc = 0),
        (this.Gc = null),
        (this.Jc = {
          st: Number.NEGATIVE_INFINITY,
          et: Number.POSITIVE_INFINITY,
        }),
        (this.Qc = 0),
        (this.td = null),
        (this.nd = {
          st: Number.NEGATIVE_INFINITY,
          et: Number.POSITIVE_INFINITY,
        }),
        (this.sd = null),
        (this.ed = false),
        (this.rd = null),
        (this.hd = null),
        (this.ld = false),
        (this.ad = false),
        (this.od = false),
        (this._d = null),
        (this.ud = null),
        (this.dd = null),
        (this.fd = null),
        (this.pd = null),
        (this.vd = null),
        (this.md = null),
        (this.bd = 0),
        (this.gd = false),
        (this.wd = false),
        (this.Md = false),
        (this.Sd = 0),
        (this.xd = null),
        (this.yd = !Pn()),
        (this.kd = (t2) => {
          this.Cd(t2);
        }),
        (this.Td = (t2) => {
          if (this.Pd(t2)) {
            const i2 = this.Rd(t2);
            if ((++this.Qc, this.td && this.Qc > 1)) {
              const { Dd: n2 } = this.Bd(Vn(t2), this.nd);
              n2 < 30 && !this.od && this.Ad(i2, this.Ld.Od), this.Id();
            }
          } else {
            const i2 = this.Rd(t2);
            if ((++this.Kc, this.Gc && this.Kc > 1)) {
              const { Dd: n2 } = this.Bd(Vn(t2), this.Jc);
              n2 < 5 && !this.ad && this.Ed(i2, this.Ld.zd), this.Vd();
            }
          }
        }),
        (this.Nd = t),
        (this.Ld = i),
        (this.un = n),
        this.Fd();
    }
    M() {
      null !== this._d && (this._d(), (this._d = null)),
        null !== this.ud && (this.ud(), (this.ud = null)),
        null !== this.fd && (this.fd(), (this.fd = null)),
        null !== this.pd && (this.pd(), (this.pd = null)),
        null !== this.vd && (this.vd(), (this.vd = null)),
        null !== this.dd && (this.dd(), (this.dd = null)),
        this.Wd(),
        this.Vd();
    }
    jd(t) {
      this.fd && this.fd();
      const i = this.$d.bind(this);
      if (
        ((this.fd = () => {
          this.Nd.removeEventListener("mousemove", i);
        }),
        this.Nd.addEventListener("mousemove", i),
        this.Pd(t))
      )
        return;
      const n = this.Rd(t);
      this.Ed(n, this.Ld.Hd), (this.yd = true);
    }
    Vd() {
      null !== this.Gc && clearTimeout(this.Gc),
        (this.Kc = 0),
        (this.Gc = null),
        (this.Jc = {
          st: Number.NEGATIVE_INFINITY,
          et: Number.POSITIVE_INFINITY,
        });
    }
    Id() {
      null !== this.td && clearTimeout(this.td),
        (this.Qc = 0),
        (this.td = null),
        (this.nd = {
          st: Number.NEGATIVE_INFINITY,
          et: Number.POSITIVE_INFINITY,
        });
    }
    $d(t) {
      if (this.Md || null !== this.hd) return;
      if (this.Pd(t)) return;
      const i = this.Rd(t);
      this.Ed(i, this.Ld.Ud), (this.yd = true);
    }
    qd(t) {
      const i = Fn(t.changedTouches, _(this.xd));
      if (null === i) return;
      if (((this.Sd = Nn(t)), null !== this.md)) return;
      if (this.wd) return;
      this.gd = true;
      const n = this.Bd(Vn(i), _(this.hd)),
        { Yd: s, Xd: e2, Dd: r2 } = n;
      if (this.ld || !(r2 < 5)) {
        if (!this.ld) {
          const t2 = 0.5 * s,
            i2 = e2 >= t2 && !this.un.Zd(),
            n2 = t2 > e2 && !this.un.Kd();
          i2 || n2 || (this.wd = true),
            (this.ld = true),
            (this.od = true),
            this.Wd(),
            this.Id();
        }
        if (!this.wd) {
          const n2 = this.Rd(t, i);
          this.Ad(n2, this.Ld.Gd), zn(t);
        }
      }
    }
    Jd(t) {
      if (0 !== t.button) return;
      const i = this.Bd(Vn(t), _(this.rd)),
        { Dd: n } = i;
      if ((n >= 5 && ((this.ad = true), this.Vd()), this.ad)) {
        const i2 = this.Rd(t);
        this.Ed(i2, this.Ld.Qd);
      }
    }
    Bd(t, i) {
      const n = Math.abs(i.st - t.st),
        s = Math.abs(i.et - t.et);
      return { Yd: n, Xd: s, Dd: n + s };
    }
    tf(t) {
      let i = Fn(t.changedTouches, _(this.xd));
      if (
        (null === i && 0 === t.touches.length && (i = t.changedTouches[0]),
        null === i)
      )
        return;
      (this.xd = null),
        (this.Sd = Nn(t)),
        this.Wd(),
        (this.hd = null),
        this.vd && (this.vd(), (this.vd = null));
      const n = this.Rd(t, i);
      if ((this.Ad(n, this.Ld.if), ++this.Qc, this.td && this.Qc > 1)) {
        const { Dd: t2 } = this.Bd(Vn(i), this.nd);
        t2 < 30 && !this.od && this.Ad(n, this.Ld.Od), this.Id();
      } else this.od || (this.Ad(n, this.Ld.nf), this.Ld.nf && zn(t));
      0 === this.Qc && zn(t),
        0 === t.touches.length && this.ed && ((this.ed = false), zn(t));
    }
    Cd(t) {
      if (0 !== t.button) return;
      const i = this.Rd(t);
      if (
        ((this.rd = null),
        (this.Md = false),
        this.pd && (this.pd(), (this.pd = null)),
        Tn())
      ) {
        this.Nd.ownerDocument.documentElement.removeEventListener(
          "mouseleave",
          this.kd
        );
      }
      if (!this.Pd(t))
        if ((this.Ed(i, this.Ld.sf), ++this.Kc, this.Gc && this.Kc > 1)) {
          const { Dd: n } = this.Bd(Vn(t), this.Jc);
          n < 5 && !this.ad && this.Ed(i, this.Ld.zd), this.Vd();
        } else this.ad || this.Ed(i, this.Ld.ef);
    }
    Wd() {
      null !== this.sd && (clearTimeout(this.sd), (this.sd = null));
    }
    rf(t) {
      if (null !== this.xd) return;
      const i = t.changedTouches[0];
      (this.xd = i.identifier), (this.Sd = Nn(t));
      const n = this.Nd.ownerDocument.documentElement;
      (this.od = false),
        (this.ld = false),
        (this.wd = false),
        (this.hd = Vn(i)),
        this.vd && (this.vd(), (this.vd = null));
      {
        const i2 = this.qd.bind(this),
          s2 = this.tf.bind(this);
        (this.vd = () => {
          n.removeEventListener("touchmove", i2),
            n.removeEventListener("touchend", s2);
        }),
          n.addEventListener("touchmove", i2, { passive: false }),
          n.addEventListener("touchend", s2, { passive: false }),
          this.Wd(),
          (this.sd = setTimeout(this.hf.bind(this, t), 240));
      }
      const s = this.Rd(t, i);
      this.Ad(s, this.Ld.lf),
        this.td ||
          ((this.Qc = 0),
          (this.td = setTimeout(this.Id.bind(this), 500)),
          (this.nd = Vn(i)));
    }
    af(t) {
      if (0 !== t.button) return;
      const i = this.Nd.ownerDocument.documentElement;
      Tn() && i.addEventListener("mouseleave", this.kd),
        (this.ad = false),
        (this.rd = Vn(t)),
        this.pd && (this.pd(), (this.pd = null));
      {
        const t2 = this.Jd.bind(this),
          n2 = this.Cd.bind(this);
        (this.pd = () => {
          i.removeEventListener("mousemove", t2),
            i.removeEventListener("mouseup", n2);
        }),
          i.addEventListener("mousemove", t2),
          i.addEventListener("mouseup", n2);
      }
      if (((this.Md = true), this.Pd(t))) return;
      const n = this.Rd(t);
      this.Ed(n, this.Ld._f),
        this.Gc ||
          ((this.Kc = 0),
          (this.Gc = setTimeout(this.Vd.bind(this), 500)),
          (this.Jc = Vn(t)));
    }
    Fd() {
      this.Nd.addEventListener("mouseenter", this.jd.bind(this)),
        this.Nd.addEventListener("touchcancel", this.Wd.bind(this));
      {
        const t = this.Nd.ownerDocument,
          i = (t2) => {
            this.Ld.uf &&
              ((t2.composed && this.Nd.contains(t2.composedPath()[0])) ||
                (t2.target && this.Nd.contains(t2.target)) ||
                this.Ld.uf());
          };
        (this.ud = () => {
          t.removeEventListener("touchstart", i);
        }),
          (this._d = () => {
            t.removeEventListener("mousedown", i);
          }),
          t.addEventListener("mousedown", i),
          t.addEventListener("touchstart", i, { passive: true });
      }
      Pn() &&
        ((this.dd = () => {
          this.Nd.removeEventListener("dblclick", this.Td);
        }),
        this.Nd.addEventListener("dblclick", this.Td)),
        this.Nd.addEventListener("mouseleave", this.cf.bind(this)),
        this.Nd.addEventListener("touchstart", this.rf.bind(this), {
          passive: true,
        }),
        Ln(this.Nd),
        this.Nd.addEventListener("mousedown", this.af.bind(this)),
        this.df(),
        this.Nd.addEventListener("touchmove", () => {}, { passive: false });
    }
    df() {
      (void 0 === this.Ld.ff &&
        void 0 === this.Ld.pf &&
        void 0 === this.Ld.vf) ||
        (this.Nd.addEventListener("touchstart", (t) => this.mf(t.touches), {
          passive: true,
        }),
        this.Nd.addEventListener(
          "touchmove",
          (t) => {
            if (
              2 === t.touches.length &&
              null !== this.md &&
              void 0 !== this.Ld.pf
            ) {
              const i = En(t.touches[0], t.touches[1]) / this.bd;
              this.Ld.pf(this.md, i), zn(t);
            }
          },
          { passive: false }
        ),
        this.Nd.addEventListener("touchend", (t) => {
          this.mf(t.touches);
        }));
    }
    mf(t) {
      1 === t.length && (this.gd = false),
        2 !== t.length || this.gd || this.ed ? this.bf() : this.gf(t);
    }
    gf(t) {
      const i = this.Nd.getBoundingClientRect() || { left: 0, top: 0 };
      (this.md = {
        st: (t[0].clientX - i.left + (t[1].clientX - i.left)) / 2,
        et: (t[0].clientY - i.top + (t[1].clientY - i.top)) / 2,
      }),
        (this.bd = En(t[0], t[1])),
        void 0 !== this.Ld.ff && this.Ld.ff(),
        this.Wd();
    }
    bf() {
      null !== this.md &&
        ((this.md = null), void 0 !== this.Ld.vf && this.Ld.vf());
    }
    cf(t) {
      if ((this.fd && this.fd(), this.Pd(t))) return;
      if (!this.yd) return;
      const i = this.Rd(t);
      this.Ed(i, this.Ld.wf), (this.yd = !Pn());
    }
    hf(t) {
      const i = Fn(t.touches, _(this.xd));
      if (null === i) return;
      const n = this.Rd(t, i);
      this.Ad(n, this.Ld.Mf), (this.od = true), (this.ed = true);
    }
    Pd(t) {
      return t.sourceCapabilities &&
        void 0 !== t.sourceCapabilities.firesTouchEvents
        ? t.sourceCapabilities.firesTouchEvents
        : Nn(t) < this.Sd + 500;
    }
    Ad(t, i) {
      i && i.call(this.Ld, t);
    }
    Ed(t, i) {
      i && i.call(this.Ld, t);
    }
    Rd(t, i) {
      const n = i || t,
        s = this.Nd.getBoundingClientRect() || { left: 0, top: 0 };
      return {
        clientX: n.clientX,
        clientY: n.clientY,
        pageX: n.pageX,
        pageY: n.pageY,
        screenX: n.screenX,
        screenY: n.screenY,
        localX: n.clientX - s.left,
        localY: n.clientY - s.top,
        ctrlKey: t.ctrlKey,
        altKey: t.altKey,
        shiftKey: t.shiftKey,
        metaKey: t.metaKey,
        Sf:
          !t.type.startsWith("mouse") &&
          "contextmenu" !== t.type &&
          "click" !== t.type,
        xf: t.type,
        yf: n.target,
        kf: t.view,
        Cf: () => {
          "touchstart" !== t.type && zn(t);
        },
      };
    }
  };
  function En(t, i) {
    const n = t.clientX - i.clientX,
      s = t.clientY - i.clientY;
    return Math.sqrt(n * n + s * s);
  }
  function zn(t) {
    t.cancelable && t.preventDefault();
  }
  function Vn(t) {
    return { st: t.pageX, et: t.pageY };
  }
  function Nn(t) {
    return t.timeStamp || performance.now();
  }
  function Fn(t, i) {
    for (let n = 0; n < t.length; ++n) if (t[n].identifier === i) return t[n];
    return null;
  }
  var Wn = class {
    constructor(i, n, s, e2) {
      (this.zi = null),
        (this.Tf = null),
        (this.Pf = false),
        (this.Rf = new Ut(200)),
        (this.zr = null),
        (this.Df = 0),
        (this.Bf = false),
        (this.Af = () => {
          this.Bf || this.tn.Of().Ut().Ch();
        }),
        (this.Lf = () => {
          this.Bf || this.tn.Of().Ut().Ch();
        }),
        (this.tn = i),
        (this.un = n),
        (this.Ba = n.layout),
        (this.Gu = s),
        (this.If = "left" === e2),
        (this.Ef = document.createElement("div")),
        (this.Ef.style.height = "100%"),
        (this.Ef.style.overflow = "hidden"),
        (this.Ef.style.width = "25px"),
        (this.Ef.style.left = "0"),
        (this.Ef.style.position = "relative"),
        (this.zf = On(this.Ef, size({ width: 16, height: 16 }))),
        this.zf.subscribeSuggestedBitmapSizeChanged(this.Af);
      const r2 = this.zf.canvasElement;
      (r2.style.position = "absolute"),
        (r2.style.zIndex = "1"),
        (r2.style.left = "0"),
        (r2.style.top = "0"),
        (this.Vf = On(this.Ef, size({ width: 16, height: 16 }))),
        this.Vf.subscribeSuggestedBitmapSizeChanged(this.Lf);
      const h2 = this.Vf.canvasElement;
      (h2.style.position = "absolute"),
        (h2.style.zIndex = "2"),
        (h2.style.left = "0"),
        (h2.style.top = "0");
      const l2 = {
        _f: this.Nf.bind(this),
        lf: this.Nf.bind(this),
        Qd: this.Ff.bind(this),
        Gd: this.Ff.bind(this),
        uf: this.Wf.bind(this),
        sf: this.jf.bind(this),
        if: this.jf.bind(this),
        zd: this.$f.bind(this),
        Od: this.$f.bind(this),
        Hd: this.Hf.bind(this),
        wf: this.Uf.bind(this),
      };
      this.qf = new In(this.Vf.canvasElement, l2, {
        Zd: () => false,
        Kd: () => true,
      });
    }
    M() {
      this.qf.M(),
        this.Vf.unsubscribeSuggestedBitmapSizeChanged(this.Lf),
        this.Vf.dispose(),
        this.zf.unsubscribeSuggestedBitmapSizeChanged(this.Af),
        this.zf.dispose(),
        null !== this.zi && this.zi.eo().v(this),
        (this.zi = null);
    }
    Yf() {
      return this.Ef;
    }
    T() {
      return this.Ba.fontSize;
    }
    Xf() {
      const t = this.Gu.F();
      return this.zr !== t.P && (this.Rf.Fe(), (this.zr = t.P)), t;
    }
    Zf() {
      if (null === this.zi) return 0;
      let t = 0;
      const i = this.Xf(),
        n = _(this.zf.canvasElement.getContext("2d"));
      n.save();
      const s = this.zi.Jl();
      (n.font = this.Kf()),
        s.length > 0 &&
          (t = Math.max(
            this.Rf.Si(n, s[0].ua),
            this.Rf.Si(n, s[s.length - 1].ua)
          ));
      const e2 = this.Gf();
      for (let i2 = e2.length; i2--; ) {
        const s2 = this.Rf.Si(n, e2[i2].Gt());
        s2 > t && (t = s2);
      }
      const r2 = this.zi.Tt();
      if (null !== r2 && null !== this.Tf) {
        const i2 = this.zi.pn(1, r2),
          s2 = this.zi.pn(this.Tf.height - 2, r2);
        t = Math.max(
          t,
          this.Rf.Si(
            n,
            this.zi.Fi(Math.floor(Math.min(i2, s2)) + 0.11111111111111, r2)
          ),
          this.Rf.Si(
            n,
            this.zi.Fi(Math.ceil(Math.max(i2, s2)) - 0.11111111111111, r2)
          )
        );
      }
      n.restore();
      const h2 = t || 34;
      return Rn(Math.ceil(i.k + i.C + i.O + i.L + 5 + h2));
    }
    Jf(t) {
      (null !== this.Tf && equalSizes(this.Tf, t)) ||
        ((this.Tf = t),
        (this.Bf = true),
        this.zf.resizeCanvasElement(t),
        this.Vf.resizeCanvasElement(t),
        (this.Bf = false),
        (this.Ef.style.width = `${t.width}px`),
        (this.Ef.style.height = `${t.height}px`));
    }
    Qf() {
      return _(this.Tf).width;
    }
    Gi(t) {
      this.zi !== t &&
        (null !== this.zi && this.zi.eo().v(this),
        (this.zi = t),
        t.eo().l(this.Sa.bind(this), this));
    }
    Bt() {
      return this.zi;
    }
    Fe() {
      const t = this.tn.tp();
      this.tn.Of().Ut().qo(t, _(this.Bt()));
    }
    ip(t) {
      if (null === this.Tf) return;
      if (1 !== t) {
        this.np(), this.zf.applySuggestedBitmapSize();
        const t2 = tryCreateCanvasRenderingTarget2D(this.zf);
        null !== t2 &&
          (t2.useBitmapCoordinateSpace((t3) => {
            this.sp(t3), this.ye(t3);
          }),
          this.ep(t2),
          this.rp(t2));
      }
      this.Vf.applySuggestedBitmapSize();
      const i = tryCreateCanvasRenderingTarget2D(this.Vf);
      null !== i &&
        (i.useBitmapCoordinateSpace(({ context: t2, bitmapSize: i2 }) => {
          t2.clearRect(0, 0, i2.width, i2.height);
        }),
        this.hp(i));
    }
    lp() {
      return this.zf.bitmapSize;
    }
    ap(t, i, n) {
      const s = this.lp();
      s.width > 0 && s.height > 0 && t.drawImage(this.zf.canvasElement, i, n);
    }
    gt() {
      var t;
      null === (t = this.zi) || void 0 === t || t.Jl();
    }
    Nf(t) {
      if (
        null === this.zi ||
        this.zi.Ni() ||
        !this.un.handleScale.axisPressedMouseMove.price
      )
        return;
      const i = this.tn.Of().Ut(),
        n = this.tn.tp();
      (this.Pf = true), i.No(n, this.zi, t.localY);
    }
    Ff(t) {
      if (null === this.zi || !this.un.handleScale.axisPressedMouseMove.price)
        return;
      const i = this.tn.Of().Ut(),
        n = this.tn.tp(),
        s = this.zi;
      i.Fo(n, s, t.localY);
    }
    Wf() {
      if (null === this.zi || !this.un.handleScale.axisPressedMouseMove.price)
        return;
      const t = this.tn.Of().Ut(),
        i = this.tn.tp(),
        n = this.zi;
      this.Pf && ((this.Pf = false), t.Wo(i, n));
    }
    jf(t) {
      if (null === this.zi || !this.un.handleScale.axisPressedMouseMove.price)
        return;
      const i = this.tn.Of().Ut(),
        n = this.tn.tp();
      (this.Pf = false), i.Wo(n, this.zi);
    }
    $f(t) {
      this.un.handleScale.axisDoubleClickReset.price && this.Fe();
    }
    Hf(t) {
      if (null === this.zi) return;
      !this.tn.Of().Ut().F().handleScale.axisPressedMouseMove.price ||
        this.zi.th() ||
        this.zi.Na() ||
        this.op(1);
    }
    Uf(t) {
      this.op(0);
    }
    Gf() {
      const t = [],
        i = null === this.zi ? void 0 : this.zi;
      return (
        ((n) => {
          for (let s = 0; s < n.length; ++s) {
            const e2 = n[s].Pn(this.tn.tp(), i);
            for (let i2 = 0; i2 < e2.length; i2++) t.push(e2[i2]);
          }
        })(this.tn.tp().Ja()),
        t
      );
    }
    sp({ context: t, bitmapSize: i }) {
      const { width: n, height: s } = i,
        e2 = this.tn.tp().Ut(),
        r2 = e2.U(),
        h2 = e2.Ic();
      r2 === h2 ? $(t, 0, 0, n, s, r2) : Y(t, 0, 0, n, s, r2, h2);
    }
    ye({ context: t, bitmapSize: i, horizontalPixelRatio: n }) {
      if (null === this.Tf || null === this.zi || !this.zi.F().borderVisible)
        return;
      t.fillStyle = this.zi.F().borderColor;
      const s = Math.max(1, Math.floor(this.Xf().k * n));
      let e2;
      (e2 = this.If ? i.width - s : 0), t.fillRect(e2, 0, s, i.height);
    }
    ep(t) {
      if (null === this.Tf || null === this.zi) return;
      const i = this.zi.Jl(),
        n = this.zi.F(),
        s = this.Xf(),
        e2 = this.If ? this.Tf.width - s.C : 0;
      n.borderVisible &&
        n.ticksVisible &&
        t.useBitmapCoordinateSpace(
          ({
            context: t2,
            horizontalPixelRatio: r2,
            verticalPixelRatio: h2,
          }) => {
            t2.fillStyle = n.borderColor;
            const l2 = Math.max(1, Math.floor(h2)),
              a2 = Math.floor(0.5 * h2),
              o2 = Math.round(s.C * r2);
            t2.beginPath();
            for (const n2 of i)
              t2.rect(Math.floor(e2 * r2), Math.round(n2.Yl * h2) - a2, o2, l2);
            t2.fill();
          }
        ),
        t.useMediaCoordinateSpace(({ context: t2 }) => {
          var r2;
          (t2.font = this.Kf()),
            (t2.fillStyle =
              null !== (r2 = n.textColor) && void 0 !== r2
                ? r2
                : this.Ba.textColor),
            (t2.textAlign = this.If ? "right" : "left"),
            (t2.textBaseline = "middle");
          const h2 = this.If
              ? Math.round(e2 - s.O)
              : Math.round(e2 + s.C + s.O),
            l2 = i.map((i2) => this.Rf.Mi(t2, i2.ua));
          for (let n2 = i.length; n2--; ) {
            const s2 = i[n2];
            t2.fillText(s2.ua, h2, s2.Yl + l2[n2]);
          }
        });
    }
    np() {
      if (null === this.Tf || null === this.zi) return;
      let t = this.Tf.height / 2;
      const i = [],
        n = this.zi.Ja().slice(),
        s = this.tn.tp(),
        e2 = this.Xf();
      this.zi === s.Je() &&
        this.tn
          .tp()
          .Ja()
          .forEach((t2) => {
            s.Ge(t2) && n.push(t2);
          });
      const r2 = this.zi.jl()[0],
        h2 = this.zi;
      n.forEach((n2) => {
        const e3 = n2.Pn(s, h2);
        e3.forEach((t2) => {
          t2.Ai(null), t2.Oi() && i.push(t2);
        }),
          r2 === n2 && e3.length > 0 && (t = e3[0].yi());
      }),
        i.forEach((t2) => t2.Ai(t2.yi()));
      this.zi.F().alignLabels && this._p(i, e2, t);
    }
    _p(t, i, n) {
      if (null === this.Tf) return;
      const s = t.filter((t2) => t2.yi() <= n),
        e2 = t.filter((t2) => t2.yi() > n);
      s.sort((t2, i2) => i2.yi() - t2.yi()),
        s.length && e2.length && e2.push(s[0]),
        e2.sort((t2, i2) => t2.yi() - i2.yi());
      for (const n2 of t) {
        const t2 = Math.floor(n2.It(i) / 2),
          s2 = n2.yi();
        s2 > -t2 && s2 < t2 && n2.Ai(t2),
          s2 > this.Tf.height - t2 &&
            s2 < this.Tf.height + t2 &&
            n2.Ai(this.Tf.height - t2);
      }
      for (let t2 = 1; t2 < s.length; t2++) {
        const n2 = s[t2],
          e3 = s[t2 - 1],
          r2 = e3.It(i, false),
          h2 = n2.yi(),
          l2 = e3.Bi();
        h2 > l2 - r2 && n2.Ai(l2 - r2);
      }
      for (let t2 = 1; t2 < e2.length; t2++) {
        const n2 = e2[t2],
          s2 = e2[t2 - 1],
          r2 = s2.It(i, true),
          h2 = n2.yi(),
          l2 = s2.Bi();
        h2 < l2 + r2 && n2.Ai(l2 + r2);
      }
    }
    rp(t) {
      if (null === this.Tf) return;
      const i = this.Gf(),
        n = this.Xf(),
        s = this.If ? "right" : "left";
      i.forEach((i2) => {
        if (i2.Li()) {
          i2.Mt(_(this.zi)).X(t, n, this.Rf, s);
        }
      });
    }
    hp(t) {
      if (null === this.Tf || null === this.zi) return;
      const i = this.tn.Of().Ut(),
        n = [],
        s = this.tn.tp(),
        e2 = i.dc().Pn(s, this.zi);
      e2.length && n.push(e2);
      const r2 = this.Xf(),
        h2 = this.If ? "right" : "left";
      n.forEach((i2) => {
        i2.forEach((i3) => {
          i3.Mt(_(this.zi)).X(t, r2, this.Rf, h2);
        });
      });
    }
    op(t) {
      this.Ef.style.cursor = 1 === t ? "ns-resize" : "default";
    }
    Sa() {
      const t = this.Zf();
      this.Df < t && this.tn.Of().Ut().dl(), (this.Df = t);
    }
    Kf() {
      return B(this.Ba.fontSize, this.Ba.fontFamily);
    }
  };
  function jn(t, i, n, s) {
    t.K && t.K(i, n, s);
  }
  function $n(t, i, n, s) {
    t.X(i, n, s);
  }
  function Hn(t, i) {
    return t.Tn(i);
  }
  function Un(t, i) {
    return t.Ji(i);
  }
  function qn(t, i) {
    return void 0 !== t.kl ? t.kl(i) : [];
  }
  var Yn = class _Yn {
    constructor(i, n) {
      (this.Tf = size({ width: 0, height: 0 })),
        (this.up = null),
        (this.cp = null),
        (this.dp = null),
        (this.fp = false),
        (this.pp = new M()),
        (this.vp = 0),
        (this.mp = false),
        (this.bp = null),
        (this.gp = false),
        (this.wp = null),
        (this.Mp = null),
        (this.Bf = false),
        (this.Af = () => {
          this.Bf || null === this.Sp || this.Hi().Ch();
        }),
        (this.Lf = () => {
          this.Bf || null === this.Sp || this.Hi().Ch();
        }),
        (this.xp = i),
        (this.Sp = n),
        this.Sp.Zo().l(this.yp.bind(this), this, true),
        (this.kp = document.createElement("td")),
        (this.kp.style.padding = "0"),
        (this.kp.style.position = "relative");
      const s = document.createElement("div");
      (s.style.width = "100%"),
        (s.style.height = "100%"),
        (s.style.position = "relative"),
        (s.style.overflow = "hidden"),
        (this.Cp = document.createElement("td")),
        (this.Cp.style.padding = "0"),
        (this.Tp = document.createElement("td")),
        (this.Tp.style.padding = "0"),
        this.kp.appendChild(s),
        (this.zf = On(s, size({ width: 16, height: 16 }))),
        this.zf.subscribeSuggestedBitmapSizeChanged(this.Af);
      const e2 = this.zf.canvasElement;
      (e2.style.position = "absolute"),
        (e2.style.zIndex = "1"),
        (e2.style.left = "0"),
        (e2.style.top = "0"),
        (this.Vf = On(s, size({ width: 16, height: 16 }))),
        this.Vf.subscribeSuggestedBitmapSizeChanged(this.Lf);
      const r2 = this.Vf.canvasElement;
      (r2.style.position = "absolute"),
        (r2.style.zIndex = "2"),
        (r2.style.left = "0"),
        (r2.style.top = "0"),
        (this.Pp = document.createElement("tr")),
        this.Pp.appendChild(this.Cp),
        this.Pp.appendChild(this.kp),
        this.Pp.appendChild(this.Tp),
        this.Rp(),
        (this.qf = new In(this.Vf.canvasElement, this, {
          Zd: () => null === this.bp && !this.xp.F().handleScroll.vertTouchDrag,
          Kd: () => null === this.bp && !this.xp.F().handleScroll.horzTouchDrag,
        }));
    }
    M() {
      null !== this.up && this.up.M(),
        null !== this.cp && this.cp.M(),
        this.Vf.unsubscribeSuggestedBitmapSizeChanged(this.Lf),
        this.Vf.dispose(),
        this.zf.unsubscribeSuggestedBitmapSizeChanged(this.Af),
        this.zf.dispose(),
        null !== this.Sp && this.Sp.Zo().v(this),
        this.qf.M();
    }
    tp() {
      return _(this.Sp);
    }
    Dp(t) {
      null !== this.Sp && this.Sp.Zo().v(this),
        (this.Sp = t),
        null !== this.Sp &&
          this.Sp.Zo().l(_Yn.prototype.yp.bind(this), this, true),
        this.Rp();
    }
    Of() {
      return this.xp;
    }
    Yf() {
      return this.Pp;
    }
    Rp() {
      if (null !== this.Sp && (this.Bp(), 0 !== this.Hi().wt().length)) {
        if (null !== this.up) {
          const t = this.Sp.zo();
          this.up.Gi(_(t));
        }
        if (null !== this.cp) {
          const t = this.Sp.Vo();
          this.cp.Gi(_(t));
        }
      }
    }
    Ap() {
      null !== this.up && this.up.gt(), null !== this.cp && this.cp.gt();
    }
    Ro() {
      return null !== this.Sp ? this.Sp.Ro() : 0;
    }
    Do(t) {
      this.Sp && this.Sp.Do(t);
    }
    Hd(t) {
      if (!this.Sp) return;
      this.Op();
      const i = t.localX,
        n = t.localY;
      this.Lp(i, n, t);
    }
    _f(t) {
      this.Op(), this.Ip(), this.Lp(t.localX, t.localY, t);
    }
    Ud(t) {
      if (!this.Sp) return;
      this.Op();
      const i = t.localX,
        n = t.localY;
      this.Lp(i, n, t);
      const s = this.ir(i, n);
      this.Hi().lc(s && { ac: s.ac, Ep: s.Ep });
    }
    ef(t) {
      null !== this.Sp && (this.Op(), this.zp(t));
    }
    Qd(t) {
      this.Op(), this.Vp(t), this.Lp(t.localX, t.localY, t);
    }
    sf(t) {
      null !== this.Sp && (this.Op(), (this.mp = false), this.Np(t));
    }
    nf(t) {
      null !== this.Sp && this.zp(t);
    }
    Mf(t) {
      if (((this.mp = true), null === this.bp)) {
        const i = { x: t.localX, y: t.localY };
        this.Fp(i, i, t);
      }
    }
    wf(t) {
      null !== this.Sp && (this.Op(), this.Sp.Ut().lc(null), this.Wp());
    }
    jp() {
      return this.pp;
    }
    ff() {
      (this.vp = 1), this.Hi().Hn();
    }
    pf(t, i) {
      if (!this.xp.F().handleScale.pinch) return;
      const n = 5 * (i - this.vp);
      (this.vp = i), this.Hi().gc(t.st, n);
    }
    lf(t) {
      if (
        ((this.mp = false),
        (this.gp = null !== this.bp),
        this.Ip(),
        null !== this.bp)
      ) {
        const i = this.Hi().dc();
        (this.wp = { x: i.Xt(), y: i.Zt() }),
          (this.bp = { x: t.localX, y: t.localY });
      }
    }
    Gd(t) {
      if (null === this.Sp) return;
      const i = t.localX,
        n = t.localY;
      if (null === this.bp) this.Vp(t);
      else {
        this.gp = false;
        const s = _(this.wp),
          e2 = s.x + (i - this.bp.x),
          r2 = s.y + (n - this.bp.y);
        this.Lp(e2, r2, t);
      }
    }
    if(t) {
      0 === this.Of().F().trackingMode.exitMode && (this.gp = true),
        this.$p(),
        this.Np(t);
    }
    ir(t, i) {
      const n = this.Sp;
      if (null === n) return null;
      const s = n.Ja();
      for (const e2 of s) {
        const s2 = this.Hp(e2.Tn(n), t, i);
        if (null !== s2) return { ac: e2, kf: s2.kf, Ep: s2.Ep };
      }
      return null;
    }
    Up(i, n) {
      _("left" === n ? this.up : this.cp).Jf(
        size({ width: i, height: this.Tf.height })
      );
    }
    qp() {
      return this.Tf;
    }
    Jf(t) {
      equalSizes(this.Tf, t) ||
        ((this.Tf = t),
        (this.Bf = true),
        this.zf.resizeCanvasElement(t),
        this.Vf.resizeCanvasElement(t),
        (this.Bf = false),
        (this.kp.style.width = t.width + "px"),
        (this.kp.style.height = t.height + "px"));
    }
    Yp() {
      const t = _(this.Sp);
      t.Eo(t.zo()), t.Eo(t.Vo());
      for (const i of t.jl())
        if (t.Ge(i)) {
          const n = i.Bt();
          null !== n && t.Eo(n), i.Dn();
        }
    }
    lp() {
      return this.zf.bitmapSize;
    }
    ap(t, i, n) {
      const s = this.lp();
      s.width > 0 && s.height > 0 && t.drawImage(this.zf.canvasElement, i, n);
    }
    ip(t) {
      if (0 === t) return;
      if (null === this.Sp) return;
      if (
        (t > 1 && this.Yp(),
        null !== this.up && this.up.ip(t),
        null !== this.cp && this.cp.ip(t),
        1 !== t)
      ) {
        this.zf.applySuggestedBitmapSize();
        const t2 = tryCreateCanvasRenderingTarget2D(this.zf);
        null !== t2 &&
          (t2.useBitmapCoordinateSpace((t3) => {
            this.sp(t3);
          }),
          this.Sp &&
            (this.Xp(t2), this.Zp(t2), this.Kp(t2, Hn), this.Kp(t2, Un)));
      }
      this.Vf.applySuggestedBitmapSize();
      const i = tryCreateCanvasRenderingTarget2D(this.Vf);
      null !== i &&
        (i.useBitmapCoordinateSpace(({ context: t2, bitmapSize: i2 }) => {
          t2.clearRect(0, 0, i2.width, i2.height);
        }),
        this.Kp(i, qn),
        this.Gp(i));
    }
    Jp() {
      return this.up;
    }
    Qp() {
      return this.cp;
    }
    yp() {
      null !== this.Sp && this.Sp.Zo().v(this), (this.Sp = null);
    }
    zp(t) {
      const i = t.localX,
        n = t.localY;
      this.pp.g() && this.pp.m(this.Hi().yt().ru(i), { x: i, y: n }, t);
    }
    sp({ context: t, bitmapSize: i }) {
      const { width: n, height: s } = i,
        e2 = this.Hi(),
        r2 = e2.U(),
        h2 = e2.Ic();
      r2 === h2 ? $(t, 0, 0, n, s, h2) : Y(t, 0, 0, n, s, r2, h2);
    }
    Xp(t) {
      const i = _(this.Sp).Ko().Th().Mt();
      null !== i && i.X(t, false);
    }
    Zp(t) {
      const i = this.Hi().cc();
      this.tv(t, Hn, jn, i), this.tv(t, Hn, $n, i);
    }
    Gp(t) {
      this.tv(t, Hn, $n, this.Hi().dc());
    }
    Kp(t, i) {
      const n = _(this.Sp).Ja();
      for (const s of n) this.tv(t, i, jn, s);
      for (const s of n) this.tv(t, i, $n, s);
    }
    tv(t, i, n, s) {
      const e2 = _(this.Sp),
        r2 = i(s, e2),
        h2 = e2.Ut().hc(),
        l2 = null !== h2 && h2.ac === s,
        a2 = null !== h2 && l2 && void 0 !== h2.Ep ? h2.Ep.sr : void 0;
      for (const i2 of r2) {
        const s2 = i2.Mt();
        null !== s2 && n(s2, t, l2, a2);
      }
    }
    Hp(t, i, n) {
      for (const s of t) {
        const t2 = s.Mt();
        if (null !== t2 && t2.ir) {
          const e2 = t2.ir(i, n);
          if (null !== e2) return { kf: s, Ep: e2 };
        }
      }
      return null;
    }
    Bp() {
      if (null === this.Sp) return;
      const t = this.xp,
        i = this.Sp.zo().F().visible,
        n = this.Sp.Vo().F().visible;
      i ||
        null === this.up ||
        (this.Cp.removeChild(this.up.Yf()), this.up.M(), (this.up = null)),
        n ||
          null === this.cp ||
          (this.Tp.removeChild(this.cp.Yf()), this.cp.M(), (this.cp = null));
      const s = t.Ut().Rc();
      i &&
        null === this.up &&
        ((this.up = new Wn(this, t.F(), s, "left")),
        this.Cp.appendChild(this.up.Yf())),
        n &&
          null === this.cp &&
          ((this.cp = new Wn(this, t.F(), s, "right")),
          this.Tp.appendChild(this.cp.Yf()));
    }
    iv(t) {
      return (t.Sf && this.mp) || null !== this.bp;
    }
    nv(t) {
      return Math.max(0, Math.min(t, this.Tf.width - 1));
    }
    sv(t) {
      return Math.max(0, Math.min(t, this.Tf.height - 1));
    }
    Lp(t, i, n) {
      this.Hi().Cc(this.nv(t), this.sv(i), n, _(this.Sp));
    }
    Wp() {
      this.Hi().Tc();
    }
    $p() {
      this.gp && ((this.bp = null), this.Wp());
    }
    Fp(t, i, n) {
      (this.bp = t), (this.gp = false), this.Lp(i.x, i.y, n);
      const s = this.Hi().dc();
      this.wp = { x: s.Xt(), y: s.Zt() };
    }
    Hi() {
      return this.xp.Ut();
    }
    Np(t) {
      if (!this.fp) return;
      const i = this.Hi(),
        n = this.tp();
      if (
        (i.Ho(n, n.fn()),
        (this.dp = null),
        (this.fp = false),
        i.xc(),
        null !== this.Mp)
      ) {
        const t2 = performance.now(),
          n2 = i.yt();
        this.Mp.pr(n2.ou(), t2), this.Mp.wu(t2) || i.Yn(this.Mp);
      }
    }
    Op() {
      this.bp = null;
    }
    Ip() {
      if (!this.Sp) return;
      if (
        (this.Hi().Hn(),
        document.activeElement !== document.body &&
          document.activeElement !== document.documentElement)
      )
        _(document.activeElement).blur();
      else {
        const t = document.getSelection();
        null !== t && t.removeAllRanges();
      }
      !this.Sp.fn().Ni() && this.Hi().yt().Ni();
    }
    Vp(t) {
      if (null === this.Sp) return;
      const i = this.Hi(),
        n = i.yt();
      if (n.Ni()) return;
      const s = this.xp.F(),
        e2 = s.handleScroll,
        r2 = s.kineticScroll;
      if (
        (!e2.pressedMouseMove || t.Sf) &&
        ((!e2.horzTouchDrag && !e2.vertTouchDrag) || !t.Sf)
      )
        return;
      const h2 = this.Sp.fn(),
        l2 = performance.now();
      if (
        (null !== this.dp ||
          this.iv(t) ||
          (this.dp = {
            x: t.clientX,
            y: t.clientY,
            u_: l2,
            ev: t.localX,
            rv: t.localY,
          }),
        null !== this.dp &&
          !this.fp &&
          (this.dp.x !== t.clientX || this.dp.y !== t.clientY))
      ) {
        if ((t.Sf && r2.touch) || (!t.Sf && r2.mouse)) {
          const t2 = n.Ks();
          (this.Mp = new An(0.2 / t2, 7 / t2, 0.997, 15 / t2)),
            this.Mp.Xc(n.ou(), this.dp.u_);
        } else this.Mp = null;
        h2.Ni() || i.jo(this.Sp, h2, t.localY),
          i.Mc(t.localX),
          (this.fp = true);
      }
      this.fp &&
        (h2.Ni() || i.$o(this.Sp, h2, t.localY),
        i.Sc(t.localX),
        null !== this.Mp && this.Mp.Xc(n.ou(), l2));
    }
  };
  var Xn = class {
    constructor(i, n, s, e2, r2) {
      (this.vt = true),
        (this.Tf = size({ width: 0, height: 0 })),
        (this.Af = () => this.ip(3)),
        (this.If = "left" === i),
        (this.Gu = s.Rc),
        (this.un = n),
        (this.hv = e2),
        (this.lv = r2),
        (this.Ef = document.createElement("div")),
        (this.Ef.style.width = "25px"),
        (this.Ef.style.height = "100%"),
        (this.Ef.style.overflow = "hidden"),
        (this.zf = On(this.Ef, size({ width: 16, height: 16 }))),
        this.zf.subscribeSuggestedBitmapSizeChanged(this.Af);
    }
    M() {
      this.zf.unsubscribeSuggestedBitmapSizeChanged(this.Af), this.zf.dispose();
    }
    Yf() {
      return this.Ef;
    }
    qp() {
      return this.Tf;
    }
    Jf(t) {
      equalSizes(this.Tf, t) ||
        ((this.Tf = t),
        this.zf.resizeCanvasElement(t),
        (this.Ef.style.width = `${t.width}px`),
        (this.Ef.style.height = `${t.height}px`),
        (this.vt = true));
    }
    ip(t) {
      if (t < 3 && !this.vt) return;
      if (0 === this.Tf.width || 0 === this.Tf.height) return;
      (this.vt = false), this.zf.applySuggestedBitmapSize();
      const i = tryCreateCanvasRenderingTarget2D(this.zf);
      null !== i &&
        i.useBitmapCoordinateSpace((t2) => {
          this.sp(t2), this.ye(t2);
        });
    }
    lp() {
      return this.zf.bitmapSize;
    }
    ap(t, i, n) {
      const s = this.lp();
      s.width > 0 && s.height > 0 && t.drawImage(this.zf.canvasElement, i, n);
    }
    ye({
      context: t,
      bitmapSize: i,
      horizontalPixelRatio: n,
      verticalPixelRatio: s,
    }) {
      if (!this.hv()) return;
      t.fillStyle = this.un.timeScale.borderColor;
      const e2 = Math.floor(this.Gu.F().k * n),
        r2 = Math.floor(this.Gu.F().k * s),
        h2 = this.If ? i.width - e2 : 0;
      t.fillRect(h2, 0, e2, r2);
    }
    sp({ context: t, bitmapSize: i }) {
      $(t, 0, 0, i.width, i.height, this.lv());
    }
  };
  function Zn(t, i) {
    return t.w_ > i.w_ ? t : i;
  }
  var Kn = class {
    constructor(i) {
      (this.av = null),
        (this.ov = null),
        (this.S = null),
        (this._v = false),
        (this.Tf = size({ width: 0, height: 0 })),
        (this.uv = new M()),
        (this.Rf = new Ut(5)),
        (this.Bf = false),
        (this.Af = () => {
          this.Bf || this.xp.Ut().Ch();
        }),
        (this.Lf = () => {
          this.Bf || this.xp.Ut().Ch();
        }),
        (this.xp = i),
        (this.un = i.F().layout),
        (this.cv = document.createElement("tr")),
        (this.dv = document.createElement("td")),
        (this.dv.style.padding = "0"),
        (this.fv = document.createElement("td")),
        (this.fv.style.padding = "0"),
        (this.Ef = document.createElement("td")),
        (this.Ef.style.height = "25px"),
        (this.Ef.style.padding = "0"),
        (this.pv = document.createElement("div")),
        (this.pv.style.width = "100%"),
        (this.pv.style.height = "100%"),
        (this.pv.style.position = "relative"),
        (this.pv.style.overflow = "hidden"),
        this.Ef.appendChild(this.pv),
        (this.zf = On(this.pv, size({ width: 16, height: 16 }))),
        this.zf.subscribeSuggestedBitmapSizeChanged(this.Af);
      const n = this.zf.canvasElement;
      (n.style.position = "absolute"),
        (n.style.zIndex = "1"),
        (n.style.left = "0"),
        (n.style.top = "0"),
        (this.Vf = On(this.pv, size({ width: 16, height: 16 }))),
        this.Vf.subscribeSuggestedBitmapSizeChanged(this.Lf);
      const s = this.Vf.canvasElement;
      (s.style.position = "absolute"),
        (s.style.zIndex = "2"),
        (s.style.left = "0"),
        (s.style.top = "0"),
        this.cv.appendChild(this.dv),
        this.cv.appendChild(this.Ef),
        this.cv.appendChild(this.fv),
        this.vv(),
        this.xp.Ut().Po().l(this.vv.bind(this), this),
        (this.qf = new In(this.Vf.canvasElement, this, {
          Zd: () => true,
          Kd: () => false,
        }));
    }
    M() {
      this.qf.M(),
        null !== this.av && this.av.M(),
        null !== this.ov && this.ov.M(),
        this.Vf.unsubscribeSuggestedBitmapSizeChanged(this.Lf),
        this.Vf.dispose(),
        this.zf.unsubscribeSuggestedBitmapSizeChanged(this.Af),
        this.zf.dispose();
    }
    Yf() {
      return this.cv;
    }
    mv() {
      return this.av;
    }
    bv() {
      return this.ov;
    }
    _f(t) {
      if (this._v) return;
      this._v = true;
      const i = this.xp.Ut();
      !i.yt().Ni() &&
        this.xp.F().handleScale.axisPressedMouseMove.time &&
        i.bc(t.localX);
    }
    lf(t) {
      this._f(t);
    }
    uf() {
      const t = this.xp.Ut();
      !t.yt().Ni() &&
        this._v &&
        ((this._v = false),
        this.xp.F().handleScale.axisPressedMouseMove.time && t.kc());
    }
    Qd(t) {
      const i = this.xp.Ut();
      !i.yt().Ni() &&
        this.xp.F().handleScale.axisPressedMouseMove.time &&
        i.yc(t.localX);
    }
    Gd(t) {
      this.Qd(t);
    }
    sf() {
      this._v = false;
      const t = this.xp.Ut();
      (t.yt().Ni() && !this.xp.F().handleScale.axisPressedMouseMove.time) ||
        t.kc();
    }
    if() {
      this.sf();
    }
    zd() {
      this.xp.F().handleScale.axisDoubleClickReset.time && this.xp.Ut().Zn();
    }
    Od() {
      this.zd();
    }
    Hd() {
      this.xp.Ut().F().handleScale.axisPressedMouseMove.time && this.op(1);
    }
    wf() {
      this.op(0);
    }
    qp() {
      return this.Tf;
    }
    gv() {
      return this.uv;
    }
    wv(i, s, e2) {
      equalSizes(this.Tf, i) ||
        ((this.Tf = i),
        (this.Bf = true),
        this.zf.resizeCanvasElement(i),
        this.Vf.resizeCanvasElement(i),
        (this.Bf = false),
        (this.Ef.style.width = `${i.width}px`),
        (this.Ef.style.height = `${i.height}px`),
        this.uv.m(i)),
        null !== this.av && this.av.Jf(size({ width: s, height: i.height })),
        null !== this.ov && this.ov.Jf(size({ width: e2, height: i.height }));
    }
    Mv() {
      const t = this.Sv();
      return Math.ceil(t.k + t.C + t.T + t.I + t.A + t.xv);
    }
    gt() {
      this.xp.Ut().yt().Jl();
    }
    lp() {
      return this.zf.bitmapSize;
    }
    ap(t, i, n) {
      const s = this.lp();
      s.width > 0 && s.height > 0 && t.drawImage(this.zf.canvasElement, i, n);
    }
    ip(t) {
      if (0 === t) return;
      if (1 !== t) {
        this.zf.applySuggestedBitmapSize();
        const i2 = tryCreateCanvasRenderingTarget2D(this.zf);
        null !== i2 &&
          (i2.useBitmapCoordinateSpace((t2) => {
            this.sp(t2), this.ye(t2);
          }),
          this.ep(i2)),
          null !== this.av && this.av.ip(t),
          null !== this.ov && this.ov.ip(t);
      }
      this.Vf.applySuggestedBitmapSize();
      const i = tryCreateCanvasRenderingTarget2D(this.Vf);
      null !== i &&
        (i.useBitmapCoordinateSpace(({ context: t2, bitmapSize: i2 }) => {
          t2.clearRect(0, 0, i2.width, i2.height);
        }),
        this.yv([this.xp.Ut().dc()], i));
    }
    sp({ context: t, bitmapSize: i }) {
      $(t, 0, 0, i.width, i.height, this.xp.Ut().Ic());
    }
    ye({ context: t, bitmapSize: i, verticalPixelRatio: n }) {
      if (this.xp.F().timeScale.borderVisible) {
        t.fillStyle = this.kv();
        const s = Math.max(1, Math.floor(this.Sv().k * n));
        t.fillRect(0, 0, i.width, s);
      }
    }
    ep(t) {
      const i = this.xp.Ut().yt(),
        n = i.Jl();
      if (!n || 0 === n.length) return;
      let s = n.reduce(Zn, n[0]).w_;
      s > 30 && s < 50 && (s = 30);
      const e2 = this.Sv(),
        r2 = i.F();
      r2.borderVisible &&
        r2.ticksVisible &&
        t.useBitmapCoordinateSpace(
          ({
            context: t2,
            horizontalPixelRatio: i2,
            verticalPixelRatio: s2,
          }) => {
            (t2.strokeStyle = this.kv()), (t2.fillStyle = this.kv());
            const r3 = Math.max(1, Math.floor(i2)),
              h2 = Math.floor(0.5 * i2);
            t2.beginPath();
            const l2 = Math.round(e2.C * s2);
            for (let s3 = n.length; s3--; ) {
              const e3 = Math.round(n[s3].Yl * i2);
              t2.rect(e3 - h2, 0, r3, l2);
            }
            t2.fill();
          }
        ),
        t.useMediaCoordinateSpace(({ context: t2 }) => {
          const i2 = e2.k + e2.C + e2.I + e2.T / 2;
          (t2.textAlign = "center"),
            (t2.textBaseline = "middle"),
            (t2.fillStyle = this.$()),
            (t2.font = this.Kf());
          for (const e3 of n)
            if (e3.w_ < s) {
              const n2 = e3.cu ? this.Cv(t2, e3.Yl, e3.ua) : e3.Yl;
              t2.fillText(e3.ua, n2, i2);
            }
          t2.font = this.Tv();
          for (const e3 of n)
            if (e3.w_ >= s) {
              const n2 = e3.cu ? this.Cv(t2, e3.Yl, e3.ua) : e3.Yl;
              t2.fillText(e3.ua, n2, i2);
            }
        });
    }
    Cv(t, i, n) {
      const s = this.Rf.Si(t, n),
        e2 = s / 2,
        r2 = Math.floor(i - e2) + 0.5;
      return (
        r2 < 0
          ? (i += Math.abs(0 - r2))
          : r2 + s > this.Tf.width && (i -= Math.abs(this.Tf.width - (r2 + s))),
        i
      );
    }
    yv(t, i) {
      const n = this.Sv();
      for (const s of t) for (const t2 of s.Qi()) t2.Mt().X(i, n);
    }
    kv() {
      return this.xp.F().timeScale.borderColor;
    }
    $() {
      return this.un.textColor;
    }
    W() {
      return this.un.fontSize;
    }
    Kf() {
      return B(this.W(), this.un.fontFamily);
    }
    Tv() {
      return B(this.W(), this.un.fontFamily, "bold");
    }
    Sv() {
      null === this.S &&
        (this.S = {
          k: 1,
          V: NaN,
          I: NaN,
          A: NaN,
          ji: NaN,
          C: 5,
          T: NaN,
          P: "",
          Wi: new Ut(),
          xv: 0,
        });
      const t = this.S,
        i = this.Kf();
      if (t.P !== i) {
        const n = this.W();
        (t.T = n),
          (t.P = i),
          (t.I = (3 * n) / 12),
          (t.A = (3 * n) / 12),
          (t.ji = (9 * n) / 12),
          (t.V = 0),
          (t.xv = (4 * n) / 12),
          t.Wi.Fe();
      }
      return this.S;
    }
    op(t) {
      this.Ef.style.cursor = 1 === t ? "ew-resize" : "default";
    }
    vv() {
      const t = this.xp.Ut(),
        i = t.F();
      i.leftPriceScale.visible ||
        null === this.av ||
        (this.dv.removeChild(this.av.Yf()), this.av.M(), (this.av = null)),
        i.rightPriceScale.visible ||
          null === this.ov ||
          (this.fv.removeChild(this.ov.Yf()), this.ov.M(), (this.ov = null));
      const n = { Rc: this.xp.Ut().Rc() },
        s = () => i.leftPriceScale.borderVisible && t.yt().F().borderVisible,
        e2 = () => t.Ic();
      i.leftPriceScale.visible &&
        null === this.av &&
        ((this.av = new Xn("left", i, n, s, e2)),
        this.dv.appendChild(this.av.Yf())),
        i.rightPriceScale.visible &&
          null === this.ov &&
          ((this.ov = new Xn("right", i, n, s, e2)),
          this.fv.appendChild(this.ov.Yf()));
    }
  };
  var Gn =
    !!Cn &&
    !!navigator.userAgentData &&
    navigator.userAgentData.brands.some((t) => t.brand.includes("Chromium")) &&
    !!Cn &&
    ((
      null ===
        (Jn =
          null === navigator || void 0 === navigator
            ? void 0
            : navigator.userAgentData) || void 0 === Jn
        ? void 0
        : Jn.platform
    )
      ? "Windows" === navigator.userAgentData.platform
      : navigator.userAgent.toLowerCase().indexOf("win") >= 0);
  var Jn;
  var Qn = class {
    constructor(t, i) {
      var n;
      (this.Pv = []),
        (this.Rv = 0),
        (this.fa = 0),
        (this.vo = 0),
        (this.Dv = 0),
        (this.Bv = 0),
        (this.Av = null),
        (this.Ov = false),
        (this.pp = new M()),
        (this.Xu = new M()),
        (this.Lv = null),
        (this.Iv = t),
        (this.un = i),
        (this.cv = document.createElement("div")),
        this.cv.classList.add("tv-lightweight-charts"),
        (this.cv.style.overflow = "hidden"),
        (this.cv.style.width = "100%"),
        (this.cv.style.height = "100%"),
        ((n = this.cv).style.userSelect = "none"),
        (n.style.webkitUserSelect = "none"),
        (n.style.msUserSelect = "none"),
        (n.style.MozUserSelect = "none"),
        (n.style.webkitTapHighlightColor = "transparent"),
        (this.Ev = document.createElement("table")),
        this.Ev.setAttribute("cellspacing", "0"),
        this.cv.appendChild(this.Ev),
        (this.zv = this.Vv.bind(this)),
        ts(this.un) && this.Nv(true),
        (this.Hi = new xn(this.Ku.bind(this), this.un)),
        this.Ut().fc().l(this.Fv.bind(this), this),
        (this.Wv = new Kn(this)),
        this.Ev.appendChild(this.Wv.Yf());
      const s = i.autoSize && this.jv();
      let e2 = this.un.width,
        r2 = this.un.height;
      if (s || 0 === e2 || 0 === r2) {
        const i2 = t.getBoundingClientRect();
        (e2 = e2 || i2.width), (r2 = r2 || i2.height);
      }
      this.$v(e2, r2),
        this.Hv(),
        t.appendChild(this.cv),
        this.Uv(),
        this.Hi.yt().yu().l(this.Hi.dl.bind(this.Hi), this),
        this.Hi.Po().l(this.Hi.dl.bind(this.Hi), this);
    }
    Ut() {
      return this.Hi;
    }
    F() {
      return this.un;
    }
    qv() {
      return this.Pv;
    }
    Yv() {
      return this.Wv;
    }
    M() {
      this.Nv(false),
        0 !== this.Rv && window.cancelAnimationFrame(this.Rv),
        this.Hi.fc().v(this),
        this.Hi.yt().yu().v(this),
        this.Hi.Po().v(this),
        this.Hi.M();
      for (const t of this.Pv)
        this.Ev.removeChild(t.Yf()), t.jp().v(this), t.M();
      (this.Pv = []),
        _(this.Wv).M(),
        null !== this.cv.parentElement &&
          this.cv.parentElement.removeChild(this.cv),
        this.Xu.M(),
        this.pp.M(),
        this.Xv();
    }
    $v(i, n, s = false) {
      if (this.fa === n && this.vo === i) return;
      const e2 = (function (i2) {
        const n2 = Math.floor(i2.width),
          s2 = Math.floor(i2.height);
        return size({ width: n2 - (n2 % 2), height: s2 - (s2 % 2) });
      })(size({ width: i, height: n }));
      (this.fa = e2.height), (this.vo = e2.width);
      const r2 = this.fa + "px",
        h2 = this.vo + "px";
      (_(this.cv).style.height = r2),
        (_(this.cv).style.width = h2),
        (this.Ev.style.height = r2),
        (this.Ev.style.width = h2),
        s ? this.Zv(et.ss(), performance.now()) : this.Hi.dl();
    }
    ip(t) {
      void 0 === t && (t = et.ss());
      for (let i = 0; i < this.Pv.length; i++) this.Pv[i].ip(t.jn(i).Nn);
      this.un.timeScale.visible && this.Wv.ip(t.Wn());
    }
    kh(t) {
      const i = ts(this.un);
      this.Hi.kh(t);
      const n = ts(this.un);
      n !== i && this.Nv(n), this.Uv(), this.Kv(t);
    }
    jp() {
      return this.pp;
    }
    fc() {
      return this.Xu;
    }
    Gv() {
      null !== this.Av &&
        (this.Zv(this.Av, performance.now()), (this.Av = null));
      const t = this.Jv(null),
        i = document.createElement("canvas");
      (i.width = t.width), (i.height = t.height);
      const n = _(i.getContext("2d"));
      return this.Jv(n), i;
    }
    Qv(t) {
      if ("left" === t && !this.tm()) return 0;
      if ("right" === t && !this.im()) return 0;
      if (0 === this.Pv.length) return 0;
      return _("left" === t ? this.Pv[0].Jp() : this.Pv[0].Qp()).Qf();
    }
    nm() {
      return this.un.autoSize && null !== this.Lv;
    }
    Kv(t) {
      (void 0 !== t.autoSize ||
        !this.Lv ||
        (void 0 === t.width && void 0 === t.height)) &&
        (t.autoSize && !this.Lv && this.jv(),
        false === t.autoSize && null !== this.Lv && this.Xv(),
        t.autoSize ||
          (void 0 === t.width && void 0 === t.height) ||
          this.$v(t.width || this.vo, t.height || this.fa));
    }
    Jv(i) {
      let n = 0,
        s = 0;
      const e2 = this.Pv[0],
        r2 = (t, n2) => {
          let s2 = 0;
          for (let e3 = 0; e3 < this.Pv.length; e3++) {
            const r3 = this.Pv[e3],
              h3 = _("left" === t ? r3.Jp() : r3.Qp()),
              l2 = h3.lp();
            null !== i && h3.ap(i, n2, s2), (s2 += l2.height);
          }
        };
      if (this.tm()) {
        r2("left", 0);
        n += _(e2.Jp()).lp().width;
      }
      for (let t = 0; t < this.Pv.length; t++) {
        const e3 = this.Pv[t],
          r3 = e3.lp();
        null !== i && e3.ap(i, n, s), (s += r3.height);
      }
      if (((n += e2.lp().width), this.im())) {
        r2("right", n);
        n += _(e2.Qp()).lp().width;
      }
      const h2 = (t, n2, s2) => {
        _("left" === t ? this.Wv.mv() : this.Wv.bv()).ap(_(i), n2, s2);
      };
      if (this.un.timeScale.visible) {
        const t = this.Wv.lp();
        if (null !== i) {
          let n2 = 0;
          this.tm() && (h2("left", n2, s), (n2 = _(e2.Jp()).lp().width)),
            this.Wv.ap(i, n2, s),
            (n2 += t.width),
            this.im() && h2("right", n2, s);
        }
        s += t.height;
      }
      return size({ width: n, height: s });
    }
    sm() {
      let i = 0,
        n = 0,
        s = 0;
      for (const t of this.Pv)
        this.tm() && (n = Math.max(n, _(t.Jp()).Zf())),
          this.im() && (s = Math.max(s, _(t.Qp()).Zf())),
          (i += t.Ro());
      (n = Rn(n)), (s = Rn(s));
      const e2 = this.vo,
        r2 = this.fa,
        h2 = Math.max(e2 - n - s, 0),
        l2 = this.un.timeScale.visible;
      let a2 = l2 ? this.Wv.Mv() : 0;
      var o2;
      a2 = (o2 = a2) + (o2 % 2);
      const u2 = 0 + a2,
        c2 = r2 < u2 ? 0 : r2 - u2,
        d2 = c2 / i;
      let f2 = 0;
      for (let i2 = 0; i2 < this.Pv.length; ++i2) {
        const e3 = this.Pv[i2];
        e3.Dp(this.Hi.uc()[i2]);
        let r3 = 0,
          l3 = 0;
        (l3 = i2 === this.Pv.length - 1 ? c2 - f2 : Math.round(e3.Ro() * d2)),
          (r3 = Math.max(l3, 2)),
          (f2 += r3),
          e3.Jf(size({ width: h2, height: r3 })),
          this.tm() && e3.Up(n, "left"),
          this.im() && e3.Up(s, "right"),
          e3.tp() && this.Hi.vc(e3.tp(), r3);
      }
      this.Wv.wv(
        size({ width: l2 ? h2 : 0, height: a2 }),
        l2 ? n : 0,
        l2 ? s : 0
      ),
        this.Hi.Bo(h2),
        this.Dv !== n && (this.Dv = n),
        this.Bv !== s && (this.Bv = s);
    }
    Nv(t) {
      t
        ? this.cv.addEventListener("wheel", this.zv, { passive: false })
        : this.cv.removeEventListener("wheel", this.zv);
    }
    rm(t) {
      switch (t.deltaMode) {
        case t.DOM_DELTA_PAGE:
          return 120;
        case t.DOM_DELTA_LINE:
          return 32;
      }
      return Gn ? 1 / window.devicePixelRatio : 1;
    }
    Vv(t) {
      if (
        !(
          (0 !== t.deltaX && this.un.handleScroll.mouseWheel) ||
          (0 !== t.deltaY && this.un.handleScale.mouseWheel)
        )
      )
        return;
      const i = this.rm(t),
        n = (i * t.deltaX) / 100,
        s = (-i * t.deltaY) / 100;
      if (
        (t.cancelable && t.preventDefault(),
        0 !== s && this.un.handleScale.mouseWheel)
      ) {
        const i2 = Math.sign(s) * Math.min(1, Math.abs(s)),
          n2 = t.clientX - this.cv.getBoundingClientRect().left;
        this.Ut().gc(n2, i2);
      }
      0 !== n && this.un.handleScroll.mouseWheel && this.Ut().wc(-80 * n);
    }
    Zv(t, i) {
      var n;
      const s = t.Wn();
      3 === s && this.hm(),
        (3 !== s && 2 !== s) ||
          (this.lm(t),
          this.am(t, i),
          this.Wv.gt(),
          this.Pv.forEach((t2) => {
            t2.Ap();
          }),
          3 === (null === (n = this.Av) || void 0 === n ? void 0 : n.Wn()) &&
            (this.Av.Qn(t),
            this.hm(),
            this.lm(this.Av),
            this.am(this.Av, i),
            (t = this.Av),
            (this.Av = null))),
        this.ip(t);
    }
    am(t, i) {
      for (const n of t.Jn()) this.ts(n, i);
    }
    lm(t) {
      const i = this.Hi.uc();
      for (let n = 0; n < i.length; n++) t.jn(n).Fn && i[n].Yo();
    }
    ts(t, i) {
      const n = this.Hi.yt();
      switch (t.Un) {
        case 0:
          n.Cu();
          break;
        case 1:
          n.Tu(t.At);
          break;
        case 2:
          n.Kn(t.At);
          break;
        case 3:
          n.Gn(t.At);
          break;
        case 4:
          n.du();
          break;
        case 5:
          t.At.wu(i) || n.Gn(t.At.Mu(i));
      }
    }
    Ku(t) {
      null !== this.Av ? this.Av.Qn(t) : (this.Av = t),
        this.Ov ||
          ((this.Ov = true),
          (this.Rv = window.requestAnimationFrame((t2) => {
            if (((this.Ov = false), (this.Rv = 0), null !== this.Av)) {
              const i = this.Av;
              (this.Av = null), this.Zv(i, t2);
              for (const n of i.Jn())
                if (5 === n.Un && !n.At.wu(t2)) {
                  this.Ut().Yn(n.At);
                  break;
                }
            }
          })));
    }
    hm() {
      this.Hv();
    }
    Hv() {
      const t = this.Hi.uc(),
        i = t.length,
        n = this.Pv.length;
      for (let t2 = i; t2 < n; t2++) {
        const t3 = o(this.Pv.pop());
        this.Ev.removeChild(t3.Yf()), t3.jp().v(this), t3.M();
      }
      for (let s = n; s < i; s++) {
        const i2 = new Yn(this, t[s]);
        i2.jp().l(this.om.bind(this), this),
          this.Pv.push(i2),
          this.Ev.insertBefore(i2.Yf(), this.Wv.Yf());
      }
      for (let n2 = 0; n2 < i; n2++) {
        const i2 = t[n2],
          s = this.Pv[n2];
        s.tp() !== i2 ? s.Dp(i2) : s.Rp();
      }
      this.Uv(), this.sm();
    }
    _m(t, i, n) {
      var s;
      const e2 = /* @__PURE__ */ new Map();
      if (null !== t) {
        this.Hi.wt().forEach((i2) => {
          const n2 = i2.Ln().jh(t);
          null !== n2 && e2.set(i2, n2);
        });
      }
      let r2;
      if (null !== t) {
        const i2 =
          null === (s = this.Hi.yt().Ui(t)) || void 0 === s ? void 0 : s.M_;
        void 0 !== i2 && (r2 = i2);
      }
      const h2 = this.Ut().hc(),
        l2 = null !== h2 && h2.ac instanceof Pi ? h2.ac : void 0,
        a2 = null !== h2 && void 0 !== h2.Ep ? h2.Ep.nr : void 0;
      return {
        _t: r2,
        Ys: null != t ? t : void 0,
        um: null != i ? i : void 0,
        dm: l2,
        fm: e2,
        pm: a2,
        vm: null != n ? n : void 0,
      };
    }
    om(t, i, n) {
      this.pp.m(() => this._m(t, i, n));
    }
    Fv(t, i, n) {
      this.Xu.m(() => this._m(t, i, n));
    }
    Uv() {
      const t = this.un.timeScale.visible ? "" : "none";
      this.Wv.Yf().style.display = t;
    }
    tm() {
      return this.Pv[0].tp().zo().F().visible;
    }
    im() {
      return this.Pv[0].tp().Vo().F().visible;
    }
    jv() {
      return (
        "ResizeObserver" in window &&
        ((this.Lv = new ResizeObserver((t) => {
          const i = t.find((t2) => t2.target === this.Iv);
          i && this.$v(i.contentRect.width, i.contentRect.height);
        })),
        this.Lv.observe(this.Iv, { box: "border-box" }),
        true)
      );
    }
    Xv() {
      null !== this.Lv && this.Lv.disconnect();
    }
  };
  function ts(t) {
    return Boolean(t.handleScroll.mouseWheel || t.handleScale.mouseWheel);
  }
  function is(t, i, n, s) {
    const e2 = n.value,
      r2 = { Ys: i, _t: t, At: [e2, e2, e2, e2], M_: s };
    return void 0 !== n.color && (r2.D = n.color), r2;
  }
  function ns(t) {
    return void 0 !== t.At;
  }
  function ss(t) {
    return (i, n, s, e2) => {
      return void 0 === (r2 = s).open && void 0 === r2.value
        ? { _t: i, Ys: n, M_: e2 }
        : t(i, n, s, e2);
      var r2;
    };
  }
  var es = {
    Candlestick: ss(function (t, i, n, s) {
      const e2 = { Ys: i, _t: t, At: [n.open, n.high, n.low, n.close], M_: s };
      return (
        void 0 !== n.color && (e2.D = n.color),
        void 0 !== n.borderColor && (e2.Ot = n.borderColor),
        void 0 !== n.wickColor && (e2.Dh = n.wickColor),
        e2
      );
    }),
    Bar: ss(function (t, i, n, s) {
      const e2 = { Ys: i, _t: t, At: [n.open, n.high, n.low, n.close], M_: s };
      return void 0 !== n.color && (e2.D = n.color), e2;
    }),
    Area: ss(function (t, i, n, s) {
      const e2 = n.value,
        r2 = { Ys: i, _t: t, At: [e2, e2, e2, e2], M_: s };
      return (
        void 0 !== n.lineColor && (r2.ot = n.lineColor),
        void 0 !== n.topColor && (r2.bs = n.topColor),
        void 0 !== n.bottomColor && (r2.gs = n.bottomColor),
        r2
      );
    }),
    Baseline: ss(function (t, i, n, s) {
      const e2 = n.value,
        r2 = { Ys: i, _t: t, At: [e2, e2, e2, e2], M_: s };
      return (
        void 0 !== n.topLineColor && (r2.be = n.topLineColor),
        void 0 !== n.bottomLineColor && (r2.ge = n.bottomLineColor),
        void 0 !== n.topFillColor1 && (r2.de = n.topFillColor1),
        void 0 !== n.topFillColor2 && (r2.fe = n.topFillColor2),
        void 0 !== n.bottomFillColor1 && (r2.pe = n.bottomFillColor1),
        void 0 !== n.bottomFillColor2 && (r2.ve = n.bottomFillColor2),
        r2
      );
    }),
    Histogram: ss(is),
    Line: ss(is),
  };
  function rs(t) {
    return es[t];
  }
  function hs(t) {
    return 60 * t * 60 * 1e3;
  }
  function ls(t) {
    return 60 * t * 1e3;
  }
  var as = [
    { bm: ((os = 1), 1e3 * os), w_: 10 },
    { bm: ls(1), w_: 20 },
    { bm: ls(5), w_: 21 },
    { bm: ls(30), w_: 22 },
    { bm: hs(1), w_: 30 },
    { bm: hs(3), w_: 31 },
    { bm: hs(6), w_: 32 },
    { bm: hs(12), w_: 33 },
  ];
  var os;
  function _s(t, i) {
    if (t.getUTCFullYear() !== i.getUTCFullYear()) return 70;
    if (t.getUTCMonth() !== i.getUTCMonth()) return 60;
    if (t.getUTCDate() !== i.getUTCDate()) return 50;
    for (let n = as.length - 1; n >= 0; --n)
      if (
        Math.floor(i.getTime() / as[n].bm) !==
        Math.floor(t.getTime() / as[n].bm)
      )
        return as[n].w_;
    return 0;
  }
  function us(t, i = 0) {
    if (0 === t.length) return;
    let n = 0 === i ? null : t[i - 1]._t.u_,
      s = null !== n ? new Date(1e3 * n) : null,
      e2 = 0;
    for (let r2 = i; r2 < t.length; ++r2) {
      const i2 = t[r2],
        h2 = new Date(1e3 * i2._t.u_);
      null !== s && (i2.g_ = _s(h2, s)),
        (e2 += i2._t.u_ - (n || i2._t.u_)),
        (n = i2._t.u_),
        (s = h2);
    }
    if (0 === i && t.length > 1) {
      const i2 = Math.ceil(e2 / (t.length - 1)),
        n2 = new Date(1e3 * (t[0]._t.u_ - i2));
      t[0].g_ = _s(new Date(1e3 * t[0]._t.u_), n2);
    }
  }
  function cs(t) {
    if (!yn(t)) throw new Error("time must be of type BusinessDay");
    const i = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0));
    return { u_: Math.round(i.getTime() / 1e3), __: t };
  }
  function ds(t) {
    if (!kn(t)) throw new Error("time must be of type isUTCTimestamp");
    return { u_: t };
  }
  function fs(t) {
    return 0 === t.length ? null : yn(t[0].time) ? cs : ds;
  }
  function ps(t) {
    return kn(t) ? ds(t) : yn(t) ? cs(t) : cs(vs(t));
  }
  function vs(t) {
    const i = new Date(t);
    if (isNaN(i.getTime()))
      throw new Error(`Invalid date string=${t}, expected format=yyyy-mm-dd`);
    return {
      day: i.getUTCDate(),
      month: i.getUTCMonth() + 1,
      year: i.getUTCFullYear(),
    };
  }
  function ms(t) {
    k(t.time) && (t.time = vs(t.time));
  }
  function bs(t) {
    return { Ys: 0, gm: /* @__PURE__ */ new Map(), yl: t };
  }
  function gs(t) {
    if (void 0 !== t && 0 !== t.length)
      return { wm: t[0]._t.u_, Mm: t[t.length - 1]._t.u_ };
  }
  function ws(t) {
    let i;
    return (
      t.forEach((t2) => {
        void 0 === i && (i = t2.M_);
      }),
      o(i)
    );
  }
  function Ms(t) {
    void 0 === t.M_ && (t.M_ = t.time);
  }
  var Ss = class {
    constructor() {
      (this.Sm = /* @__PURE__ */ new Map()),
        (this.xm = /* @__PURE__ */ new Map()),
        (this.ym = /* @__PURE__ */ new Map()),
        (this.km = []);
    }
    M() {
      this.Sm.clear(), this.xm.clear(), this.ym.clear(), (this.km = []);
    }
    Cm(t, i) {
      let n = 0 !== this.Sm.size,
        s = false;
      const e2 = this.xm.get(t);
      if (void 0 !== e2)
        if (1 === this.xm.size) (n = false), (s = true), this.Sm.clear();
        else for (const i2 of this.km) i2.pointData.gm.delete(t) && (s = true);
      let r2 = [];
      if (0 !== i.length) {
        const n2 = i;
        n2.forEach((t2) => Ms(t2)),
          (function (t2) {
            t2.forEach(ms);
          })(i);
        const e3 = _(fs(i)),
          h3 = rs(t.Lh());
        r2 = n2.map((i2) => {
          const n3 = e3(i2.time);
          let r3 = this.Sm.get(n3.u_);
          void 0 === r3 && ((r3 = bs(n3)), this.Sm.set(n3.u_, r3), (s = true));
          const l2 = h3(n3, r3.Ys, i2, i2.M_);
          return r3.gm.set(t, l2), l2;
        });
      }
      n && this.Tm(), this.Pm(t, r2);
      let h2 = -1;
      if (s) {
        const t2 = [];
        this.Sm.forEach((i2) => {
          t2.push({ g_: 0, _t: i2.yl, pointData: i2, M_: ws(i2.gm) });
        }),
          t2.sort((t3, i2) => t3._t.u_ - i2._t.u_),
          (h2 = this.Rm(t2));
      }
      return this.Dm(
        t,
        h2,
        (function (t2, i2) {
          const n2 = gs(t2),
            s2 = gs(i2);
          if (void 0 !== n2 && void 0 !== s2)
            return { ml: n2.Mm >= s2.Mm && n2.wm >= s2.wm };
        })(this.xm.get(t), e2)
      );
    }
    Ac(t) {
      return this.Cm(t, []);
    }
    Bm(t, i) {
      const n = i;
      Ms(n), ms(i);
      const s = _(fs([i]))(i.time),
        e2 = this.ym.get(t);
      if (void 0 !== e2 && s.u_ < e2.u_)
        throw new Error(
          `Cannot update oldest data, last time=${e2.u_}, new time=${s.u_}`
        );
      let r2 = this.Sm.get(s.u_);
      const h2 = void 0 === r2;
      void 0 === r2 && ((r2 = bs(s)), this.Sm.set(s.u_, r2));
      const l2 = rs(t.Lh())(s, r2.Ys, i, n.M_);
      r2.gm.set(t, l2), this.Am(t, l2);
      const a2 = { ml: ns(l2) };
      if (!h2) return this.Dm(t, -1, a2);
      const o2 = { g_: 0, _t: r2.yl, pointData: r2, M_: ws(r2.gm) },
        u2 = Mt(this.km, o2._t.u_, (t2, i2) => t2._t.u_ < i2);
      this.km.splice(u2, 0, o2);
      for (let t2 = u2; t2 < this.km.length; ++t2)
        xs(this.km[t2].pointData, t2);
      return us(this.km, u2), this.Dm(t, u2, a2);
    }
    Am(t, i) {
      let n = this.xm.get(t);
      void 0 === n && ((n = []), this.xm.set(t, n));
      const s = 0 !== n.length ? n[n.length - 1] : null;
      null === s || i._t.u_ > s._t.u_
        ? ns(i) && n.push(i)
        : ns(i)
        ? (n[n.length - 1] = i)
        : n.splice(-1, 1),
        this.ym.set(t, i._t);
    }
    Pm(t, i) {
      0 !== i.length
        ? (this.xm.set(t, i.filter(ns)), this.ym.set(t, i[i.length - 1]._t))
        : (this.xm.delete(t), this.ym.delete(t));
    }
    Tm() {
      for (const t of this.km)
        0 === t.pointData.gm.size && this.Sm.delete(t._t.u_);
    }
    Rm(t) {
      let i = -1;
      for (let n = 0; n < this.km.length && n < t.length; ++n) {
        const s = this.km[n],
          e2 = t[n];
        if (s._t.u_ !== e2._t.u_) {
          i = n;
          break;
        }
        (e2.g_ = s.g_), xs(e2.pointData, n);
      }
      if (
        (-1 === i &&
          this.km.length !== t.length &&
          (i = Math.min(this.km.length, t.length)),
        -1 === i)
      )
        return -1;
      for (let n = i; n < t.length; ++n) xs(t[n].pointData, n);
      return us(t, i), (this.km = t), i;
    }
    Om() {
      if (0 === this.xm.size) return null;
      let t = 0;
      return (
        this.xm.forEach((i) => {
          0 !== i.length && (t = Math.max(t, i[i.length - 1].Ys));
        }),
        t
      );
    }
    Dm(t, i, n) {
      const s = { Lm: /* @__PURE__ */ new Map(), yt: { eu: this.Om() } };
      if (-1 !== i)
        this.xm.forEach((i2, e2) => {
          s.Lm.set(e2, { ar: i2, Im: e2 === t ? n : void 0 });
        }),
          this.xm.has(t) || s.Lm.set(t, { ar: [], Im: n }),
          (s.yt.Em = this.km),
          (s.yt.zm = i);
      else {
        const i2 = this.xm.get(t);
        s.Lm.set(t, { ar: i2 || [], Im: n });
      }
      return s;
    }
  };
  function xs(t, i) {
    (t.Ys = i),
      t.gm.forEach((t2) => {
        t2.Ys = i;
      });
  }
  function ys(t) {
    return { value: t.At[3], time: t.M_ };
  }
  function ks(t) {
    const i = ys(t);
    return void 0 !== t.D && (i.color = t.D), i;
  }
  function Cs(t) {
    return {
      open: t.At[0],
      high: t.At[1],
      low: t.At[2],
      close: t.At[3],
      time: t.M_,
    };
  }
  var Ts = {
    Area: function (t) {
      const i = ys(t);
      return (
        void 0 !== t.ot && (i.lineColor = t.ot),
        void 0 !== t.bs && (i.topColor = t.bs),
        void 0 !== t.gs && (i.bottomColor = t.gs),
        i
      );
    },
    Line: ks,
    Baseline: function (t) {
      const i = ys(t);
      return (
        void 0 !== t.be && (i.topLineColor = t.be),
        void 0 !== t.ge && (i.bottomLineColor = t.ge),
        void 0 !== t.de && (i.topFillColor1 = t.de),
        void 0 !== t.fe && (i.topFillColor2 = t.fe),
        void 0 !== t.pe && (i.bottomFillColor1 = t.pe),
        void 0 !== t.ve && (i.bottomFillColor2 = t.ve),
        i
      );
    },
    Histogram: ks,
    Bar: function (t) {
      const i = Cs(t);
      return void 0 !== t.D && (i.color = t.D), i;
    },
    Candlestick: function (t) {
      const i = Cs(t),
        { D: n, Ot: s, Dh: e2 } = t;
      return (
        void 0 !== n && (i.color = n),
        void 0 !== s && (i.borderColor = s),
        void 0 !== e2 && (i.wickColor = e2),
        i
      );
    },
  };
  function Ps(t) {
    return Ts[t];
  }
  var Rs = {
    autoScale: true,
    mode: 0,
    invertScale: false,
    alignLabels: true,
    borderVisible: true,
    borderColor: "#2B2B43",
    entireTextOnly: false,
    visible: false,
    ticksVisible: false,
    scaleMargins: { bottom: 0.1, top: 0.2 },
  };
  var Ds = {
    color: "rgba(0, 0, 0, 0)",
    visible: false,
    fontSize: 48,
    fontFamily: D,
    fontStyle: "",
    text: "",
    horzAlign: "center",
    vertAlign: "center",
  };
  var Bs = {
    width: 0,
    height: 0,
    autoSize: false,
    layout: {
      background: { type: "solid", color: "#FFFFFF" },
      textColor: "#191919",
      fontSize: 12,
      fontFamily: D,
    },
    crosshair: {
      vertLine: {
        color: "#9598A1",
        width: 1,
        style: 3,
        visible: true,
        labelVisible: true,
        labelBackgroundColor: "#131722",
      },
      horzLine: {
        color: "#9598A1",
        width: 1,
        style: 3,
        visible: true,
        labelVisible: true,
        labelBackgroundColor: "#131722",
      },
      mode: 1,
    },
    grid: {
      vertLines: { color: "#D6DCDE", style: 0, visible: true },
      horzLines: { color: "#D6DCDE", style: 0, visible: true },
    },
    overlayPriceScales: Object.assign({}, Rs),
    leftPriceScale: Object.assign(Object.assign({}, Rs), { visible: false }),
    rightPriceScale: Object.assign(Object.assign({}, Rs), { visible: true }),
    timeScale: {
      rightOffset: 0,
      barSpacing: 6,
      minBarSpacing: 0.5,
      fixLeftEdge: false,
      fixRightEdge: false,
      lockVisibleTimeRangeOnResize: false,
      rightBarStaysOnScroll: false,
      borderVisible: true,
      borderColor: "#2B2B43",
      visible: true,
      timeVisible: false,
      secondsVisible: true,
      shiftVisibleRangeOnNewBar: true,
      ticksVisible: false,
    },
    watermark: Ds,
    localization: {
      locale: Cn ? navigator.language : "",
      dateFormat: "dd MMM 'yy",
    },
    handleScroll: {
      mouseWheel: true,
      pressedMouseMove: true,
      horzTouchDrag: true,
      vertTouchDrag: true,
    },
    handleScale: {
      axisPressedMouseMove: { time: true, price: true },
      axisDoubleClickReset: { time: true, price: true },
      mouseWheel: true,
      pinch: true,
    },
    kineticScroll: { mouse: false, touch: true },
    trackingMode: { exitMode: 1 },
  };
  var As = {
    upColor: "#26a69a",
    downColor: "#ef5350",
    wickVisible: true,
    borderVisible: true,
    borderColor: "#378658",
    borderUpColor: "#26a69a",
    borderDownColor: "#ef5350",
    wickColor: "#737375",
    wickUpColor: "#26a69a",
    wickDownColor: "#ef5350",
  };
  var Os = {
    upColor: "#26a69a",
    downColor: "#ef5350",
    openVisible: true,
    thinBars: true,
  };
  var Ls = {
    color: "#2196f3",
    lineStyle: 0,
    lineWidth: 3,
    lineType: 0,
    crosshairMarkerVisible: true,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: "",
    crosshairMarkerBorderWidth: 2,
    crosshairMarkerBackgroundColor: "",
    lastPriceAnimation: 0,
  };
  var Is = {
    topColor: "rgba( 46, 220, 135, 0.4)",
    bottomColor: "rgba( 40, 221, 100, 0)",
    invertFilledArea: false,
    lineColor: "#33D778",
    lineStyle: 0,
    lineWidth: 3,
    lineType: 0,
    crosshairMarkerVisible: true,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: "",
    crosshairMarkerBorderWidth: 2,
    crosshairMarkerBackgroundColor: "",
    lastPriceAnimation: 0,
  };
  var Es = {
    baseValue: { type: "price", price: 0 },
    topFillColor1: "rgba(38, 166, 154, 0.28)",
    topFillColor2: "rgba(38, 166, 154, 0.05)",
    topLineColor: "rgba(38, 166, 154, 1)",
    bottomFillColor1: "rgba(239, 83, 80, 0.05)",
    bottomFillColor2: "rgba(239, 83, 80, 0.28)",
    bottomLineColor: "rgba(239, 83, 80, 1)",
    lineWidth: 3,
    lineStyle: 0,
    lineType: 0,
    crosshairMarkerVisible: true,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: "",
    crosshairMarkerBorderWidth: 2,
    crosshairMarkerBackgroundColor: "",
    lastPriceAnimation: 0,
  };
  var zs = { color: "#26a69a", base: 0 };
  var Vs = {
    title: "",
    visible: true,
    lastValueVisible: true,
    priceLineVisible: true,
    priceLineSource: 0,
    priceLineWidth: 1,
    priceLineColor: "",
    priceLineStyle: 2,
    baseLineVisible: true,
    baseLineWidth: 1,
    baseLineColor: "#B2B5BE",
    baseLineStyle: 0,
    priceFormat: { type: "price", precision: 2, minMove: 0.01 },
  };
  var Ns = class {
    constructor(t, i) {
      (this.Vm = t), (this.Nm = i);
    }
    applyOptions(t) {
      this.Vm.Ut().oc(this.Nm, t);
    }
    options() {
      return this.zi().F();
    }
    width() {
      return st(this.Nm) ? this.Vm.Qv(this.Nm) : 0;
    }
    zi() {
      return _(this.Vm.Ut()._c(this.Nm)).Bt;
    }
  };
  var Fs = {
    color: "#FF0000",
    price: 0,
    lineStyle: 2,
    lineWidth: 1,
    lineVisible: true,
    axisLabelVisible: true,
    title: "",
    axisLabelColor: "",
    axisLabelTextColor: "",
  };
  var Ws = class {
    constructor(t) {
      this.wh = t;
    }
    applyOptions(t) {
      this.wh.kh(t);
    }
    options() {
      return this.wh.F();
    }
    Fm() {
      return this.wh;
    }
  };
  var js = class {
    constructor(t, i, n) {
      (this.Ts = t), (this.Wm = i), (this.jm = n);
    }
    priceFormatter() {
      return this.Ts.Bl();
    }
    priceToCoordinate(t) {
      const i = this.Ts.Tt();
      return null === i ? null : this.Ts.Bt().Dt(t, i.At);
    }
    coordinateToPrice(t) {
      const i = this.Ts.Tt();
      return null === i ? null : this.Ts.Bt().pn(t, i.At);
    }
    barsInLogicalRange(t) {
      if (null === t) return null;
      const i = new dn(new _n(t.from, t.to)).C_(),
        n = this.Ts.Ln();
      if (n.Ni()) return null;
      const s = n.jh(i.Ms(), 1),
        e2 = n.jh(i.ci(), -1),
        r2 = _(n.Nh()),
        h2 = _(n.On());
      if (null !== s && null !== e2 && s.Ys > e2.Ys)
        return { barsBefore: t.from - r2, barsAfter: h2 - t.to };
      const l2 = {
        barsBefore: null === s || s.Ys === r2 ? t.from - r2 : s.Ys - r2,
        barsAfter: null === e2 || e2.Ys === h2 ? h2 - t.to : h2 - e2.Ys,
      };
      return (
        null !== s &&
          null !== e2 &&
          ((l2.from = s._t.__ || s._t.u_), (l2.to = e2._t.__ || e2._t.u_)),
        l2
      );
    }
    setData(t) {
      this.Ts.Lh(), this.Wm.$m(this.Ts, t);
    }
    update(t) {
      this.Ts.Lh(), this.Wm.Hm(this.Ts, t);
    }
    dataByIndex(t, i) {
      const n = this.Ts.Ln().jh(t, i);
      return null === n ? null : Ps(this.seriesType())(n);
    }
    setMarkers(t) {
      const i = t.map((t2) =>
        Object.assign(Object.assign({}, t2), {
          originalTime: t2.time,
          time: ps(t2.time),
        })
      );
      this.Ts.gl(i);
    }
    markers() {
      return this.Ts.wl().map((t) => {
        const { originalTime: i, time: n } = t,
          s = (function (t2, i2) {
            var n2 = {};
            for (var s2 in t2)
              Object.prototype.hasOwnProperty.call(t2, s2) &&
                i2.indexOf(s2) < 0 &&
                (n2[s2] = t2[s2]);
            if (
              null != t2 &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var e2 = 0;
              for (s2 = Object.getOwnPropertySymbols(t2); e2 < s2.length; e2++)
                i2.indexOf(s2[e2]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(t2, s2[e2]) &&
                  (n2[s2[e2]] = t2[s2[e2]]);
            }
            return n2;
          })(t, ["originalTime", "time"]);
        return Object.assign({ time: i }, s);
      });
    }
    applyOptions(t) {
      this.Ts.kh(t);
    }
    options() {
      return T(this.Ts.F());
    }
    priceScale() {
      return this.jm.priceScale(this.Ts.Bt().zl());
    }
    createPriceLine(t) {
      const i = S(T(Fs), t),
        n = this.Ts.Ml(i);
      return new Ws(n);
    }
    removePriceLine(t) {
      this.Ts.Sl(t.Fm());
    }
    seriesType() {
      return this.Ts.Lh();
    }
  };
  var $s = class {
    constructor(t, i) {
      (this.Um = new M()),
        (this.E_ = new M()),
        (this.uv = new M()),
        (this.Hi = t),
        (this.wo = t.yt()),
        (this.Wv = i),
        this.wo.Su().l(this.qm.bind(this)),
        this.wo.xu().l(this.Ym.bind(this)),
        this.Wv.gv().l(this.Xm.bind(this));
    }
    M() {
      this.wo.Su().v(this),
        this.wo.xu().v(this),
        this.Wv.gv().v(this),
        this.Um.M(),
        this.E_.M(),
        this.uv.M();
    }
    scrollPosition() {
      return this.wo.ou();
    }
    scrollToPosition(t, i) {
      i ? this.wo.gu(t, 1e3) : this.Hi.Gn(t);
    }
    scrollToRealTime() {
      this.wo.bu();
    }
    getVisibleRange() {
      var t, i;
      const n = this.wo.G_();
      return null === n
        ? null
        : {
            from: null !== (t = n.from.__) && void 0 !== t ? t : n.from.u_,
            to: null !== (i = n.to.__) && void 0 !== i ? i : n.to.u_,
          };
    }
    setVisibleRange(t) {
      const i = { from: ps(t.from), to: ps(t.to) },
        n = this.wo.iu(i);
      this.Hi.Oc(n);
    }
    getVisibleLogicalRange() {
      const t = this.wo.K_();
      return null === t ? null : { from: t.Ms(), to: t.ci() };
    }
    setVisibleLogicalRange(t) {
      a(t.from <= t.to, "The from index cannot be after the to index."),
        this.Hi.Oc(t);
    }
    resetTimeScale() {
      this.Hi.Zn();
    }
    fitContent() {
      this.Hi.Cu();
    }
    logicalToCoordinate(t) {
      const i = this.Hi.yt();
      return i.Ni() ? null : i.Et(t);
    }
    coordinateToLogical(t) {
      return this.wo.Ni() ? null : this.wo.ru(t);
    }
    timeToCoordinate(t) {
      const i = ps(t),
        n = this.wo.Fl(i, false);
      return null === n ? null : this.wo.Et(n);
    }
    coordinateToTime(t) {
      var i;
      const n = this.Hi.yt(),
        s = n.ru(t),
        e2 = n.vn(s);
      return null === e2
        ? null
        : null !== (i = e2.__) && void 0 !== i
        ? i
        : e2.u_;
    }
    width() {
      return this.Wv.qp().width;
    }
    height() {
      return this.Wv.qp().height;
    }
    subscribeVisibleTimeRangeChange(t) {
      this.Um.l(t);
    }
    unsubscribeVisibleTimeRangeChange(t) {
      this.Um.p(t);
    }
    subscribeVisibleLogicalRangeChange(t) {
      this.E_.l(t);
    }
    unsubscribeVisibleLogicalRangeChange(t) {
      this.E_.p(t);
    }
    subscribeSizeChange(t) {
      this.uv.l(t);
    }
    unsubscribeSizeChange(t) {
      this.uv.p(t);
    }
    applyOptions(t) {
      this.wo.kh(t);
    }
    options() {
      return T(this.wo.F());
    }
    qm() {
      this.Um.g() && this.Um.m(this.getVisibleRange());
    }
    Ym() {
      this.E_.g() && this.E_.m(this.getVisibleLogicalRange());
    }
    Xm(t) {
      this.uv.m(t.width, t.height);
    }
  };
  function Hs(t) {
    if (void 0 === t || "custom" === t.type) return;
    const i = t;
    void 0 !== i.minMove &&
      void 0 === i.precision &&
      (i.precision = (function (t2) {
        if (t2 >= 1) return 0;
        let i2 = 0;
        for (; i2 < 8; i2++) {
          const n = Math.round(t2);
          if (Math.abs(n - t2) < 1e-8) return i2;
          t2 *= 10;
        }
        return i2;
      })(i.minMove));
  }
  function Us(t) {
    return (
      (function (t2) {
        if (C(t2.handleScale)) {
          const i2 = t2.handleScale;
          t2.handleScale = {
            axisDoubleClickReset: { time: i2, price: i2 },
            axisPressedMouseMove: { time: i2, price: i2 },
            mouseWheel: i2,
            pinch: i2,
          };
        } else if (void 0 !== t2.handleScale) {
          const { axisPressedMouseMove: i2, axisDoubleClickReset: n } =
            t2.handleScale;
          C(i2) &&
            (t2.handleScale.axisPressedMouseMove = { time: i2, price: i2 }),
            C(n) &&
              (t2.handleScale.axisDoubleClickReset = { time: n, price: n });
        }
        const i = t2.handleScroll;
        C(i) &&
          (t2.handleScroll = {
            horzTouchDrag: i,
            vertTouchDrag: i,
            mouseWheel: i,
            pressedMouseMove: i,
          });
      })(t),
      t
    );
  }
  var qs = class {
    constructor(t, i) {
      (this.Zm = new Ss()),
        (this.Km = /* @__PURE__ */ new Map()),
        (this.Gm = /* @__PURE__ */ new Map()),
        (this.Jm = new M()),
        (this.Qm = new M());
      const n = void 0 === i ? T(Bs) : S(T(Bs), Us(i));
      (this.Vm = new Qn(t, n)),
        this.Vm.jp().l((t2) => {
          this.Jm.g() && this.Jm.m(this.tb(t2()));
        }, this),
        this.Vm.fc().l((t2) => {
          this.Qm.g() && this.Qm.m(this.tb(t2()));
        }, this);
      const s = this.Vm.Ut();
      this.ib = new $s(s, this.Vm.Yv());
    }
    remove() {
      this.Vm.jp().v(this),
        this.Vm.fc().v(this),
        this.ib.M(),
        this.Vm.M(),
        this.Km.clear(),
        this.Gm.clear(),
        this.Jm.M(),
        this.Qm.M(),
        this.Zm.M();
    }
    resize(t, i, n) {
      this.autoSizeActive() || this.Vm.$v(t, i, n);
    }
    addAreaSeries(t) {
      return this.nb("Area", Is, t);
    }
    addBaselineSeries(t) {
      return this.nb("Baseline", Es, t);
    }
    addBarSeries(t) {
      return this.nb("Bar", Os, t);
    }
    addCandlestickSeries(t = {}) {
      return (
        (function (t2) {
          void 0 !== t2.borderColor &&
            ((t2.borderUpColor = t2.borderColor),
            (t2.borderDownColor = t2.borderColor)),
            void 0 !== t2.wickColor &&
              ((t2.wickUpColor = t2.wickColor),
              (t2.wickDownColor = t2.wickColor));
        })(t),
        this.nb("Candlestick", As, t)
      );
    }
    addHistogramSeries(t) {
      return this.nb("Histogram", zs, t);
    }
    addLineSeries(t) {
      return this.nb("Line", Ls, t);
    }
    removeSeries(t) {
      const i = o(this.Km.get(t)),
        n = this.Zm.Ac(i);
      this.Vm.Ut().Ac(i), this.sb(n), this.Km.delete(t), this.Gm.delete(i);
    }
    $m(t, i) {
      this.sb(this.Zm.Cm(t, i));
    }
    Hm(t, i) {
      this.sb(this.Zm.Bm(t, i));
    }
    subscribeClick(t) {
      this.Jm.l(t);
    }
    unsubscribeClick(t) {
      this.Jm.p(t);
    }
    subscribeCrosshairMove(t) {
      this.Qm.l(t);
    }
    unsubscribeCrosshairMove(t) {
      this.Qm.p(t);
    }
    priceScale(t) {
      return new Ns(this.Vm, t);
    }
    timeScale() {
      return this.ib;
    }
    applyOptions(t) {
      this.Vm.kh(Us(t));
    }
    options() {
      return this.Vm.F();
    }
    takeScreenshot() {
      return this.Vm.Gv();
    }
    autoSizeActive() {
      return this.Vm.nm();
    }
    nb(t, i, n = {}) {
      Hs(n.priceFormat);
      const s = S(T(Vs), T(i), n),
        e2 = this.Vm.Ut().Dc(t, s),
        r2 = new js(e2, this, this);
      return this.Km.set(r2, e2), this.Gm.set(e2, r2), r2;
    }
    sb(t) {
      const i = this.Vm.Ut();
      i.Pc(t.yt.eu, t.yt.Em, t.yt.zm),
        t.Lm.forEach((t2, i2) => i2.tt(t2.ar, t2.Im)),
        i.lu();
    }
    eb(t) {
      return o(this.Gm.get(t));
    }
    tb(t) {
      const i = /* @__PURE__ */ new Map();
      t.fm.forEach((t2, n2) => {
        const s = Ps(n2.Lh())(t2);
        a(
          (function (t3) {
            return void 0 !== t3.open || void 0 !== t3.value;
          })(s)
        ),
          i.set(this.eb(n2), s);
      });
      const n = void 0 === t.dm ? void 0 : this.eb(t.dm);
      return {
        time: t._t,
        logical: t.Ys,
        point: t.um,
        hoveredSeries: n,
        hoveredObjectId: t.pm,
        seriesData: i,
        sourceEvent: t.vm,
      };
    }
  };
  function Ys(t, i) {
    let n;
    if (k(t)) {
      const i2 = document.getElementById(t);
      a(null !== i2, `Cannot find element in DOM with id=${t}`), (n = i2);
    } else n = t;
    return new qs(n, i);
  }
  function Xs() {
    return "4.0.1";
  }

  // src/utils/parser.ts
  var import_papaparse = __toESM(require_papaparse_min());
  var csvToJson = (v2) => {
    if (!v2) {
      return void 0;
    }
    return (0, import_papaparse.parse)(v2, { header: true });
  };
  var fileToJson = (file) => {
    if (!file) {
      return void 0;
    }
    return new Promise((resolve) => {
      (0, import_papaparse.parse)(file, {
        complete(res) {
          resolve(res);
        },
      });
    });
  };

  // src/integrate/index.ts
  var import_deepmerge = __toESM(require_cjs());

  // src/integrate/defaultOptions.ts
  var import_color = __toESM(require_color());
  var EQUITY_COLOR = "rgb(46, 139, 87)";
  var DROWDOWN_COLOR = "rgb(255, 82, 82)";
  var defaultChartOptions = {
    timeScale: {
      timeVisible: true,
      secondsVisible: true,
      minBarSpacing: 1e-3,
    },
    rightPriceScale: {
      visible: true,
    },
    leftPriceScale: {
      visible: true,
    },
  };
  var defaultCandleSeriesOptions = {
    upColor: "rgb(38,166,154)",
    downColor: "rgb(255,82,82)",
    wickUpColor: "rgb(38,166,154)",
    wickDownColor: "rgb(255,82,82)",
    borderVisible: false,
  };
  var getAreaSeriesOptions = (type) => {
    let seriesColor = EQUITY_COLOR;
    if (type === "drawdown" /* drawdown */) {
      seriesColor = DROWDOWN_COLOR;
    }
    return {
      topColor: (0, import_color.default)(seriesColor).alpha(0.1).string(),
      bottomColor: (0, import_color.default)(seriesColor).alpha(0).string(),
      lineColor: seriesColor,
      lineWidth: 1,
      priceScaleId: "left",
      visible: true,
    };
  };

  // src/integrate/index.ts
  var initChart = (container, options) => {
    let chartData = [];
    let orderData = [];
    const originChart = Ys(
      container,
      (0, import_deepmerge.default)(defaultChartOptions, options)
    );
    const chart = originChart;
    const areaSeriesOptions = getAreaSeriesOptions(
      options == null ? void 0 : options.type
    );
    const areaSeries = chart.addAreaSeries(
      (0, import_deepmerge.default)(
        areaSeriesOptions,
        (options == null ? void 0 : options.areaSeriesOptions) || {}
      )
    );
    const candleSeries = chart.addCandlestickSeries(
      (0, import_deepmerge.default)(
        defaultCandleSeriesOptions,
        (options == null ? void 0 : options.candleSeriesOptions) || {}
      )
    );
    chart.setChartData = (data) => {
      chartData = data;
      candleSeries.setData(data);
      chart.setOrderData(orderData);
    };
    chart.setOrderData = (data) => {
      orderData = data;
      let orderDataTimeMap = /* @__PURE__ */ new Map();
      data.forEach((i) => orderDataTimeMap.set(i.time, i));
      let lastValue = 0;
      const timeSeries = chartData.map((i) => {
        const key =
          (options == null ? void 0 : options.type) ===
          "drawdown" /* drawdown */
            ? "drawdown"
            : "balance";
        const val = orderDataTimeMap.get(i.time);
        if (val !== void 0) {
          lastValue = val[key];
          return { time: i.time, value: val[key] };
        } else {
          return { time: i.time, value: lastValue };
        }
      });
      areaSeries.setData(timeSeries);
      const markers = data.map((item) => {
        const { type, time, price, quantity } = item;
        if (type === "BUY") {
          return {
            time,
            position: "belowBar",
            color: "#0345a1",
            shape: "arrowUp",
            text: "Buy @ " + price + " Qty: " + quantity,
          };
        } else {
          return {
            time,
            position: "aboveBar",
            color: "#870a01",
            shape: "arrowDown",
            text: "Sell @ " + price + " Qty: " + quantity,
          };
        }
      });
      candleSeries.setMarkers(markers);
    };
    return { chart, areaSeries, candleSeries };
  };
  return __toCommonJS(src_exports);
};
