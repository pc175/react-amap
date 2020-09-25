(this["webpackJsonp@uiw/react-amap"]=this["webpackJsonp@uiw/react-amap"]||[]).push([[55],{1225:function(n,t,e){"use strict";e.r(t),t.default="Weather \u5929\u6c14\u67e5\u8be2\u670d\u52a1\n===\n\n\u5929\u6c14\u67e5\u8be2\u670d\u52a1\uff0c\u6839\u636e\u57ce\u5e02\u540d\u79f0\u6216\u533a\u57df\u7f16\u7801\u8fd4\u56de\u57ce\u5e02\u5929\u6c14\u9884\u62a5\u4fe1\u606f\uff0c\u5305\u62ec\u5b9e\u65f6\u5929\u6c14\u4fe1\u606f\u548c\u56db\u5929\u5929\u6c14\u9884\u62a5\u3002\n\n```jsx\nimport { Weather } from '@uiw/react-amap';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--DemoStart,bgWhite,noScroll--\x3e \n```jsx\nimport React, { useState, useRef } from 'react';\nimport { APILoader, Weather } from '@uiw/react-amap';\n\nconst Example = () => {\n  const [data, setData] = useState();\n  const [city, setCity] = useState('\u4e0a\u6d77\u5e02');\n  return (\n    <>\n      <button onClick={() => setCity('\u4e0a\u6d77\u5e02')}>\n        \u4e0a\u6d77\u5e02\n      </button>\n      <button onClick={() => setCity('\u5317\u4eac\u5e02')}>\n        \u5317\u4eac\u5e02\n      </button>\n      <button onClick={() => setCity('\u9ec4\u5188\u5e02')}>\n        \u9ec4\u5188\u5e02\n      </button>\n      <div style={{ width: '100%' }}>\n        <Weather\n          city={city}\n          onComplete={(data) => {\n            console.log('\u8fd4\u56de\u6570\u636e\uff1a', data);\n            setData(data);\n          }}\n        />\n        <pre style={{ padding: 10, marginTop: 10 }}>\n          {data ? JSON.stringify(data, null, 2) : '{}'}\n        </pre>\n      </div>\n    </>\n  );\n}\n\nReactDOM.render((\n  <APILoader akay=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Example />\n  </APILoader>\n), _mount_);\n```\n\x3c!--End--\x3e\n\n### \u67e5\u8be2\u56db\u5929\u9884\u62a5\u5929\u6c14\n\n\x3c!--DemoStart,bgWhite--\x3e \n```jsx\nimport React, { useState, useRef } from 'react';\nimport { APILoader, Weather } from '@uiw/react-amap';\n\nconst Example = () => {\n  const [data, setData] = useState();\n  const [city, setCity] = useState('\u4e0a\u6d77\u5e02');\n  return (\n    <>\n      <button onClick={() => setCity('\u4e0a\u6d77\u5e02')}>\n        \u4e0a\u6d77\u5e02\n      </button>\n      <button onClick={() => setCity('\u5317\u4eac\u5e02')}>\n        \u5317\u4eac\u5e02\n      </button>\n      <button onClick={() => setCity('\u9ec4\u5188\u5e02')}>\n        \u9ec4\u5188\u5e02\n      </button>\n      <div style={{ width: '100%', height: '300px' }}>\n        <Weather\n          city={city}\n          type=\"forecast\"\n          onComplete={(data) => {\n            console.log('\u8fd4\u56de\u6570\u636e\uff1a', data);\n            setData(data);\n          }}\n        />\n        <pre style={{ padding: 10, marginTop: 10 }}>\n          {data ? JSON.stringify(data, null, 2) : '{}'}\n        </pre>\n      </div>\n    </>\n  );\n}\n\nReactDOM.render((\n  <APILoader akay=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Example />\n  </APILoader>\n), _mount_);\n```\n\x3c!--End--\x3e\n\n### \u5207\u6362\u7c7b\u578b\n\n\x3c!--DemoStart,bgWhite--\x3e \n```jsx\nimport React, { useState, useRef } from 'react';\nimport { APILoader, Weather } from '@uiw/react-amap';\n\nconst Example = () => {\n  const [data, setData] = useState();\n  const [type, setType] = useState('live');\n  return (\n    <>\n      <button onClick={() => setType('live')}>\n        \u5b9e\u65f6\u5929\u6c14\u4fe1\u606f:live\n      </button>\n      <button onClick={() => setType('forecast')}>\n        \u56db\u5929\u9884\u62a5\u5929\u6c14:forecast\n      </button>\n      <div style={{ width: '100%', height: '300px' }}>\n        <Weather\n          city=\"\u4e0a\u6d77\u5e02\"\n          type={type}\n          onComplete={(data) => {\n            console.log('\u8fd4\u56de\u6570\u636e\uff1a', type, data);\n            setData(data);\n          }}\n        />\n        <pre style={{ padding: 10, marginTop: 10 }}>\n          {data ? JSON.stringify(data, null, 2) : '{}'}\n        </pre>\n      </div>\n    </>\n  );\n}\n\nReactDOM.render((\n  <APILoader akay=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Example />\n  </APILoader>\n), _mount_);\n```\n\x3c!--End--\x3e\n\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| city | \u57ce\u5e02\u540d\u79f0/\u533a\u57df\u7f16\u7801(\u5982\uff1a\u201c\u676d\u5dde\u5e02\u201d/\u201c330100\u201d) | `string` | - |\n| type | \u83b7\u53d6 `\u67e5\u8be2\u5b9e\u65f6\u5929\u6c14\u4fe1\u606f` \u6216 `\u67e5\u8be2\u56db\u5929\u9884\u62a5\u5929\u6c14` | `live|forecast` | `live` |\n\n### \u4e8b\u4ef6\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b |\n| ---- | ---- | ---- |\n| onComplete | \u6570\u636e\u8bf7\u6c42\u5b8c\u6210\u65f6\u89e6\u53d1\u4e8b\u4ef6\u3002 | `(data: WeatherLiveResult | WeatherForecastResult): void;` |\n| onError | \u6570\u636e\u8bf7\u6c42\u9519\u8bef\u65f6\u89e6\u53d1\u4e8b\u4ef6\u3002 | `(err): void;` |"}}]);
//# sourceMappingURL=55.b961ef55.chunk.js.map