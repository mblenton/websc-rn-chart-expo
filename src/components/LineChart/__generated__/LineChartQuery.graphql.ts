/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type LineChartQueryVariables = {};
export type LineChartQueryResponse = {
    readonly chartData: ReadonlyArray<{
        readonly x: number | null;
        readonly y: number | null;
    }>;
};
export type LineChartQuery = {
    readonly response: LineChartQueryResponse;
    readonly variables: LineChartQueryVariables;
};



/*
query LineChartQuery {
  chartData {
    x
    y
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "x",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "y",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LineChartQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Data",
        "kind": "LinkedField",
        "name": "chartData",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LineChartQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Data",
        "kind": "LinkedField",
        "name": "chartData",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5181769d20682c61ab169148ede45332",
    "id": null,
    "metadata": {},
    "name": "LineChartQuery",
    "operationKind": "query",
    "text": "query LineChartQuery {\n  chartData {\n    x\n    y\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c1db56d02344b437f5d1a5e709d52d2f';
export default node;
