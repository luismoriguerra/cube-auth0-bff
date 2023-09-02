function logQuery(query, context) {
  console.log(
    JSON.stringify(
      { msg: "{ query, context }", debug: { query, context } },
      null,
      2
    )
  );
}

module.exports = {
  logQuery,
};

// {
//    "msg": "{ query, context }",
//    "debug": {
//      "query": {
//        "limit": 10,
//        "dimensions": [
//          "activities.organizationid"
//        ],
//        "order": [
//          [
//            "activities.organizationid",
//            "asc"
//          ]
//        ],
//        "timezone": "UTC",
//        "filters": [],
//        "timeDimensions": []
//      },
//      "context": {
//        "securityContext": {
//          "http://127.0.0.1:5174/": {
//            "company_id": "company1",
//            "user_id": "auth0|64f2636721dc1afe376f7eb9",
//            "roles": [
//              "user"
//            ]
//          },
//          "iss": "https://dev-9k50c76d.us.auth0.com/",
//          "sub": "auth0|64f2636721dc1afe376f7eb9",
//          "aud": [
//            "cubejs-app",
//            "https://dev-9k50c76d.us.auth0.com/userinfo"
//          ],
//          "iat": 1693613777,
//          "exp": 1693700177,
//          "azp": "642LkVJ5KzSoH8gThpU18xKFf03adhjN",
//          "scope": "openid profile email address phone"
//        },
//        "authInfo": {
//          "http://127.0.0.1:5174/": {
//            "company_id": "company1",
//            "user_id": "auth0|64f2636721dc1afe376f7eb9",
//            "roles": [
//              "user"
//            ]
//          },
//          "iss": "https://dev-9k50c76d.us.auth0.com/",
//          "sub": "auth0|64f2636721dc1afe376f7eb9",
//          "aud": [
//            "cubejs-app",
//            "https://dev-9k50c76d.us.auth0.com/userinfo"
//          ],
//          "iat": 1693613777,
//          "exp": 1693700177,
//          "azp": "642LkVJ5KzSoH8gThpU18xKFf03adhjN",
//          "scope": "openid profile email address phone"
//        },
//        "signedWithPlaygroundAuthSecret": false,
//        "requestId": "d3f801cb-fb8f-4842-bbb5-d4cb1accfcd6-span-1"
//      }
//    }
//  }
