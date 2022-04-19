import { createMocks } from '@backbase/foundation-ang/data-http';
import { Provider } from '@angular/core';

/**
* Mocks provider for /v2 URL pattern
*/
export const DefaultHttpServiceGetVersionDetailsv2MocksProvider: Provider = createMocks([{
        urlPattern: "/v2",
        method: "GET",
        responses: [
                {
                    status: 200,
                    body: {
  "version" : {
    "status" : "CURRENT",
    "updated" : "2011-01-21T11:33:21Z",
    "media-types" : [ {
      "base" : "application/xml",
      "type" : "application/vnd.openstack.compute+xml;version=2"
    }, {
      "base" : "application/json",
      "type" : "application/vnd.openstack.compute+json;version=2"
    } ],
    "id" : "v2.0",
    "links" : [ {
      "href" : "http://127.0.0.1:8774/v2/",
      "rel" : "self"
    }, {
      "href" : "http://docs.openstack.org/api/openstack-compute/2/os-compute-devguide-2.pdf",
      "type" : "application/pdf",
      "rel" : "describedby"
    }, {
      "href" : "http://docs.openstack.org/api/openstack-compute/2/wadl/os-compute-2.wadl",
      "type" : "application/vnd.sun.wadl+xml",
      "rel" : "describedby"
    }, {
      "href" : "http://docs.openstack.org/api/openstack-compute/2/wadl/os-compute-2.wadl",
      "type" : "application/vnd.sun.wadl+xml",
      "rel" : "describedby"
    } ]
  }
}
                },
                {
                    status: 203,
                    body: {
  "version" : {
    "status" : "CURRENT",
    "updated" : "2011-01-21T11:33:21Z",
    "media-types" : [ {
      "base" : "application/xml",
      "type" : "application/vnd.openstack.compute+xml;version=2"
    }, {
      "base" : "application/json",
      "type" : "application/vnd.openstack.compute+json;version=2"
    } ],
    "id" : "v2.0",
    "links" : [ {
      "href" : "http://23.253.228.211:8774/v2/",
      "rel" : "self"
    }, {
      "href" : "http://docs.openstack.org/api/openstack-compute/2/os-compute-devguide-2.pdf",
      "type" : "application/pdf",
      "rel" : "describedby"
    }, {
      "href" : "http://docs.openstack.org/api/openstack-compute/2/wadl/os-compute-2.wadl",
      "type" : "application/vnd.sun.wadl+xml",
      "rel" : "describedby"
    } ]
  }
}
                },
    ]
}]);
/**
* Mocks provider for / URL pattern
*/
export const DefaultHttpServiceListVersionsv2MocksProvider: Provider = createMocks([{
        urlPattern: "/",
        method: "GET",
        responses: [
                {
                    status: 200,
                    body: {
  "versions" : [ {
    "status" : "CURRENT",
    "updated" : "2011-01-21T11:33:21Z",
    "id" : "v2.0",
    "links" : [ {
      "href" : "http://127.0.0.1:8774/v2/",
      "rel" : "self"
    } ]
  }, {
    "status" : "EXPERIMENTAL",
    "updated" : "2013-07-23T11:33:21Z",
    "id" : "v3.0",
    "links" : [ {
      "href" : "http://127.0.0.1:8774/v3/",
      "rel" : "self"
    } ]
  } ]
}
                },
                {
                    status: 300,
                    body: {
 "versions": [
       {
         "status": "CURRENT",
         "updated": "2011-01-21T11:33:21Z",
         "id": "v2.0",
         "links": [
             {
                 "href": "http://127.0.0.1:8774/v2/",
                 "rel": "self"
             }
         ]
     },
     {
         "status": "EXPERIMENTAL",
         "updated": "2013-07-23T11:33:21Z",
         "id": "v3.0",
         "links": [
             {
                 "href": "http://127.0.0.1:8774/v3/",
                 "rel": "self"
             }
         ]
     }
 ]
}

                },
    ]
}]);

export const DefaultHttpServiceMocksProvider: Provider = createMocks(
    [
    {
        urlPattern: "/v2",
        method: "GET",
        responses: [

            {
                status: 200,
                body: {
  "version" : {
    "status" : "CURRENT",
    "updated" : "2011-01-21T11:33:21Z",
    "media-types" : [ {
      "base" : "application/xml",
      "type" : "application/vnd.openstack.compute+xml;version=2"
    }, {
      "base" : "application/json",
      "type" : "application/vnd.openstack.compute+json;version=2"
    } ],
    "id" : "v2.0",
    "links" : [ {
      "href" : "http://127.0.0.1:8774/v2/",
      "rel" : "self"
    }, {
      "href" : "http://docs.openstack.org/api/openstack-compute/2/os-compute-devguide-2.pdf",
      "type" : "application/pdf",
      "rel" : "describedby"
    }, {
      "href" : "http://docs.openstack.org/api/openstack-compute/2/wadl/os-compute-2.wadl",
      "type" : "application/vnd.sun.wadl+xml",
      "rel" : "describedby"
    }, {
      "href" : "http://docs.openstack.org/api/openstack-compute/2/wadl/os-compute-2.wadl",
      "type" : "application/vnd.sun.wadl+xml",
      "rel" : "describedby"
    } ]
  }
}
            },

            {
                status: 203,
                body: {
  "version" : {
    "status" : "CURRENT",
    "updated" : "2011-01-21T11:33:21Z",
    "media-types" : [ {
      "base" : "application/xml",
      "type" : "application/vnd.openstack.compute+xml;version=2"
    }, {
      "base" : "application/json",
      "type" : "application/vnd.openstack.compute+json;version=2"
    } ],
    "id" : "v2.0",
    "links" : [ {
      "href" : "http://23.253.228.211:8774/v2/",
      "rel" : "self"
    }, {
      "href" : "http://docs.openstack.org/api/openstack-compute/2/os-compute-devguide-2.pdf",
      "type" : "application/pdf",
      "rel" : "describedby"
    }, {
      "href" : "http://docs.openstack.org/api/openstack-compute/2/wadl/os-compute-2.wadl",
      "type" : "application/vnd.sun.wadl+xml",
      "rel" : "describedby"
    } ]
  }
}
            },
    ]
},
    {
        urlPattern: "/",
        method: "GET",
        responses: [

            {
                status: 200,
                body: {
  "versions" : [ {
    "status" : "CURRENT",
    "updated" : "2011-01-21T11:33:21Z",
    "id" : "v2.0",
    "links" : [ {
      "href" : "http://127.0.0.1:8774/v2/",
      "rel" : "self"
    } ]
  }, {
    "status" : "EXPERIMENTAL",
    "updated" : "2013-07-23T11:33:21Z",
    "id" : "v3.0",
    "links" : [ {
      "href" : "http://127.0.0.1:8774/v3/",
      "rel" : "self"
    } ]
  } ]
}
            },

            {
                status: 300,
                body: {
 "versions": [
       {
         "status": "CURRENT",
         "updated": "2011-01-21T11:33:21Z",
         "id": "v2.0",
         "links": [
             {
                 "href": "http://127.0.0.1:8774/v2/",
                 "rel": "self"
             }
         ]
     },
     {
         "status": "EXPERIMENTAL",
         "updated": "2013-07-23T11:33:21Z",
         "id": "v3.0",
         "links": [
             {
                 "href": "http://127.0.0.1:8774/v3/",
                 "rel": "self"
             }
         ]
     }
 ]
}

            },
    ]
},
]
);


