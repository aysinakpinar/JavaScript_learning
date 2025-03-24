"If/Else if": {
    "prefix": "iei",
    "body": [
      "if (${1:ifCondition}) {",
      "${2:outcome};",
      "} else if (${3:elseCondition}) {",
        "${4:otherOutcome};",
    "}"
    ]
},
"If/Else bool": {
    "prefix": "ieb",
    "body": [
      "if (${1:ifCondition}) {",
      "return true;",
      "} else {",
        "return false;",
    "}"
    ]
}