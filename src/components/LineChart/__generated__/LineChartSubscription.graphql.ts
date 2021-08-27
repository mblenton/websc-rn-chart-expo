/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type LineChartSubscriptionVariables = {};
export type LineChartSubscriptionResponse = {
    readonly chartData: ReadonlyArray<{
        readonly x: number | null;
        readonly y: number | null;
    }>;
};
export type LineChartSubscription = {
    readonly response: LineChartSubscriptionResponse;
    readonly variables: LineChartSubscriptionVariables;
};



/*
subscription LineChartSubscription {
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
    "name": "LineChartSubscription",
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
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LineChartSubscription",
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
    "cacheID": "690777c3ac04e9d8417fb8694043b400",
    "id": null,
    "metadata": {},
    "name": "LineChartSubscription",
    "operationKind": "subscription",
    "text": "subscription LineChartSubscription {\n  chartData {\n    x\n    y\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c43b4a365f6dc2b0b4c024dd0bbd5d3d';
export default node;
