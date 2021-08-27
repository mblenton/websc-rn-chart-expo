/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type useRelayQueryVariables = {};
export type useRelayQueryResponse = {
    readonly chartData: ReadonlyArray<{
        readonly x: number | null;
        readonly y: number | null;
    }>;
};
export type useRelayQuery = {
    readonly response: useRelayQueryResponse;
    readonly variables: useRelayQueryVariables;
};



/*
query useRelayQuery {
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
    "name": "useRelayQuery",
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
    "name": "useRelayQuery",
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
    "cacheID": "3336919b0225f764efcf2988bc16d00e",
    "id": null,
    "metadata": {},
    "name": "useRelayQuery",
    "operationKind": "query",
    "text": "query useRelayQuery {\n  chartData {\n    x\n    y\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b331178406db6fc6830984cb2fe4d6d6';
export default node;
