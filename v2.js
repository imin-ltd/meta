window.imin = {};
window.imin.meta = {};
window.imin.meta.v2 = {
  "@context": [
    "https://openactive.io/",
    "https://openactive.io/ns-beta",
    "https://openactive.io/extension",
    "https://imin.co/"
  ],
  "type": "imin:CollectionIndex",
  "id": "https://meta.imin.co/v2",
  "description": "A collection of collections of metadata in use the imin APIs",
  "imin:index": {
    "subClass": {
      "type": "imin:CollectionIndex",
      "id": "https://meta.imin.co/v2#/imin:index/subClass",
      "imin:index": {
        "LocationFeatureSpecification": {
          "id": "https://meta.imin.co/v2#/imin:index/subClass/imin:index/LocationFeatureSpecification",
          "type": "imin:Collection",
          "imin:totalItems": 7,
          "imin:item": [
            {
              "id": "ChangingFacilities",
              "name": "Changing Facilities",
              "type": "Class",
              "subClassOf": "LocationFeatureSpecification"
            },
            {
              "id": "Showers",
              "name": "Showers",
              "type": "Class",
              "subClassOf": "LocationFeatureSpecification"
            },
            {
              "id": "Lockers",
              "name": "Lockers",
              "type": "Class",
              "subClassOf": "LocationFeatureSpecification"
            },
            {
              "id": "Towels",
              "name": "Towels",
              "type": "Class",
              "subClassOf": "LocationFeatureSpecification"
            },
            {
              "id": "Toilets",
              "name": "Toilets",
              "type": "Class",
              "subClassOf": "LocationFeatureSpecification"
            },
            {
              "id": "Creche",
              "name": "Creche",
              "type": "Class",
              "subClassOf": "LocationFeatureSpecification"
            },
            {
              "id": "Parking",
              "name": "Parking",
              "type": "Class",
              "subClassOf": "LocationFeatureSpecification"
            }
          ]
        },
        "imin:LevelSpecification": {
          "id": "https://meta.imin.co/v2#/imin:index/subClass/imin:index/imin:LevelSpecification",
          "type": "imin:Collection",
          "imin:totalItems": 3,
          "imin:item": [
            {
              "id": "imin:BeginnerLevel",
              "name": "Beginner",
              "type": "Class",
              "subClassOf": "imin:LevelSpecification"
            },
            {
              "id": "imin:IntermediateLevel",
              "name": "Intermediate",
              "type": "Class",
              "subClassOf": "imin:LevelSpecification"
            },
            {
              "id": "imin:AdvancedLevel",
              "name": "Advanced",
              "type": "Class",
              "subClassOf": "imin:LevelSpecification"
            }
          ]
        }
      }
    },
    "enumeration": {
      "type": "imin:CollectionIndex",
      "id": "https://meta.imin.co/v2#/imin:index/enumeration",
      "imin:index": {
        "PaymentMethod": {
          "id": "https://meta.imin.co/v2#/imin:index/enumeration/imin:index/PaymentMethod",
          "type": "imin:Collection",
          "imin:totalItems": 2,
          "imin:item": [
            {
              "id": "gr:Cash",
              "name": "Cash",
              "type": "PaymentMethod"
            },
            {
              "id": "gr:PaymentMethodCreditCard",
              "name": "Card",
              "type": "PaymentMethod"
            }
          ]
        },
        "GenderType": {
          "id": "https://meta.imin.co/v2#/imin:index/enumeration/imin:index/GenderType",
          "type": "imin:Collection",
          "imin:totalItems": 2,
          "imin:item": [
            {
              "id": "schema:Female",
              "name": "Female",
              "type": "GenderType"
            },
            {
              "id": "schema:Male",
              "name": "Male",
              "type": "GenderType"
            }
          ]
        },
        "GenderRestrictionType": {
          "id": "https://meta.imin.co/v2#/imin:index/enumeration/imin:index/GenderRestrictionType",
          "type": "imin:Collection",
          "imin:totalItems": 3,
          "imin:item": [
            {
              "id": "oa:FemaleOnly",
              "name": "Female only",
              "type": "GenderRestrictionType"
            },
            {
              "id": "oa:MaleOnly",
              "name": "Male only",
              "type": "GenderRestrictionType"
            },
            {
              "id": "oa:NoRestriction",
              "name": "No restriction",
              "type": "GenderRestrictionType"
            }
          ]
        },
        "DayOfWeek": {
          "type": "imin:Collection",
          "id": "https://meta.imin.co/v2#/imin:index/enumeration/imin:index/DayOfWeek",
          "imin:totalItems": 7,
          "imin:item": [
            {
              "id": "schema:Monday",
              "name": "Monday",
              "type": "DayOfWeek"
            },
            {
              "id": "schema:Thursday",
              "name": "Thursday",
              "type": "DayOfWeek"
            },
            {
              "id": "schema:Wednesday",
              "name": "Wednesday",
              "type": "DayOfWeek"
            },
            {
              "id": "schema:Tuesday",
              "name": "Tuesday",
              "type": "DayOfWeek"
            },
            {
              "id": "schema:Saturday",
              "name": "Saturday",
              "type": "DayOfWeek"
            },
            {
              "id": "schema:Friday",
              "name": "Friday",
              "type": "DayOfWeek"
            },
            {
              "id": "schema:Sunday",
              "name": "Sunday",
              "type": "DayOfWeek"
            }
          ]
        }
      }
    },
    "collection": {
      "id": "https://meta.imin.co/v2#/imin:index/collection",
      "type": "imin:Collection",
      "imin:totalItems": 3,
      "imin:item": [
        {
          "type": "beta:ConceptCollection",
          "id": "https://data.emduk.org/collections/strength-and-conditioning.jsonld",
          "title": "Strength and Conditioning",
          "description": "Group Exercise and Dance classes considered good for Strength and Conditioning.",
          "beta:creator": "EMD UK"
        },
        {
          "type": "beta:ConceptCollection",
          "id": "https://data.emduk.org/collections/holistic.jsonld",
          "title": "Holistic",
          "description": "Group Exercise and Dance classes considered Holistic.",
          "beta:creator": "EMD UK"
        },
        {
          "type": "beta:ConceptCollection",
          "id": "https://data.emduk.org/collections/cardio.jsonld",
          "title": "Cardio",
          "description": "Group Exercise and Dance classes considered good for Cardio.",
          "beta:creator": "EMD UK"
        }
      ]
    },
    "scheme": {
      "id": "https://meta.imin.co/v2#/imin:index/scheme",
      "type": "imin:Collection",
      "imin:totalItems": 2,
      "imin:item": [
        {
          "type": "ConceptScheme",
          "id": "https://openactive.io/activity-list",
          "title": "OpenActive Activity List",
          "description": "This document describes the OpenActive standard activity list.",
          "license": "https://creativecommons.org/licenses/by/4.0/"
        },
        {
          "type": "ConceptScheme",
          "id": "https://data.emduk.org/activity-list/activity-list.jsonld",
          "title": "EMD UK Restricted Activity List",
          "description": "List of activities within scope of EMD UK",
          "beta:creator": "EMD UK"
        }
      ]
    }
  }
};
