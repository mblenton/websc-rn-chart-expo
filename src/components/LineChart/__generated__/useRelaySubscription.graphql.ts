/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type useRelaySubscriptionVariables = {};
export type useRelaySubscriptionResponse = {
    readonly chartData: ReadonlyArray<{
        readonly x: number | null;
        readonly y: number | null;
    }>;
};
export type useRelaySubscription = {
    readonly response: useRelaySubscriptionResponse;
    readonly variables: useRelaySubscriptionVariables;
};



/*
subscription useRelaySubscription {
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
    "name": "useRelaySubscription",
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
    "name": "useRelaySubscription",
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
    "cacheID": "db4fb99c5d051d3bfe64a014f75ac1ce",
    "id": null,
    "metadata": {},
    "name": "useRelaySubscription",
    "operationKind": "subscription",
    "text": "subscription useRelaySubscription {\n  chartData {\n    x\n    y\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '9d60303ba9288e308a309c9446e0c251';
export default node;
