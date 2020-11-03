var data = {
  // table
  report: [
    {
      "report_id": 9184,
      "name": "PLN_TO_CHANGE_TYPE",
      "description": "抓取执行过的SQL执行计划，谓词过滤中出现关键字\"INTERNAL_FUNCTION\"，\"SYS_OP\"，以及部分情况下的TO_NUMBER",
      "advice": "查询列索引失效",
      "risky": "high",
      "audit_type": "SQL",
      "cn_name": "存在隐式类型转换",
      "target_number": 1,
      "total": 3,
      "ratio": 33.3,
      "detail": [
        {
          "id": 42414,
          "sql_id": "78n0nrw1jhxh9",
          "sql_type": "DQL",
          "report_id": 9184,
          "db_id": 288,
          "sql_text": "SELECT  DISTINCT OWNER,OBJECT_NAME,OBJECT_TYPE FROM    (SELECT OWNER,OBJECT_NAME,OBJECT_TYPE FROM ALL_OBJECTS WHERE OBJECT_TYPE IN ('TABLE','PACKAGE','PROCEDURE','FUNCTION','SYNONYM','SYNONYM') AND UPPER(OBJECT_NAME) LIKE :1  UNION ALL\nSELECT  O.OWNER,O.OBJECT_NAME,O.OBJECT_TYPE\nFROM ALL_SYNONYMS S,ALL_OBJECTS O\nWHERE O.OWNER=S.TABLE_OWNER AND O.OBJECT_NAME=S.TABLE_NAME AND S.OWNER='PUBLIC' AND UPPER(S.SYNONYM_NAME)  LIKE :2 )\nORDER BY OBJECT_NAME",
          "first_audit_time": 1602576001,
          "current_audit_time": 1603083629,
          "schema": "TEST",
          "source": "dynamic",
          "parent_id": 0,
          "status": "problem",
          "score": 35,
          "hc_path": "",
          "executions": 1,
          "elapsed_time": 576.09,
          "avg_elapsed_time": 576.09,
          "origin_type": "",
          "origin_name": "",
          "file_id": 0,
          "sensitive_table": "",
          "audit": [
            {
              "target_id": 42414,
              "id": 479301,
              "name": "PLN_TO_CHANGE_TYPE",
              "risky": "high",
              "description": "抓取执行过的SQL执行计划，谓词过滤中出现关键字\"INTERNAL_FUNCTION\"，\"SYS_OP\"，以及部分情况下的TO_NUMBER",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479295,
              "name": "PLN_MERGE_JOIN_CARTESIAN",
              "risky": "middle",
              "description": "执行计划中出现关键字\"MERGE JOIN CARTESIAN\"",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479297,
              "name": "PLN_TAB_FULL",
              "risky": "low",
              "description": "发现全表扫描",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479298,
              "name": "SQL_UNION",
              "risky": "low",
              "description": "SQL中出现union,minus,intersect",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479299,
              "name": "PLN_IDX_FFS",
              "risky": "low",
              "description": "执行计划出现index fast full scan",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479300,
              "name": "SQL_SUBQUERY_FROM",
              "risky": "low",
              "description": "from段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479294,
              "name": "SQL_BUFFER_GETS",
              "risky": "low",
              "description": "SQL单次执行逻辑读大于1000",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479302,
              "name": "SQL_SUBQUERY_WHERE",
              "risky": "low",
              "description": "where段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479296,
              "name": "PLN_FILTER",
              "risky": "low",
              "description": "执行计划存在filter操作",
              "status": "problem"
            }],
          "db_name": "oracle_test_1",
          "file": ""
        },
        {
          "id": 42414,
          "sql_id": "78n0nrw1jhxh9",
          "sql_type": "DQL",
          "report_id": 9184,
          "db_id": 288,
          "sql_text": "SELECT  DISTINCT OWNER,OBJECT_NAME,OBJECT_TYPE FROM    (SELECT OWNER,OBJECT_NAME,OBJECT_TYPE FROM ALL_OBJECTS WHERE OBJECT_TYPE IN ('TABLE','PACKAGE','PROCEDURE','FUNCTION','SYNONYM','SYNONYM') AND UPPER(OBJECT_NAME) LIKE :1  UNION ALL\nSELECT  O.OWNER,O.OBJECT_NAME,O.OBJECT_TYPE\nFROM ALL_SYNONYMS S,ALL_OBJECTS O\nWHERE O.OWNER=S.TABLE_OWNER AND O.OBJECT_NAME=S.TABLE_NAME AND S.OWNER='PUBLIC' AND UPPER(S.SYNONYM_NAME)  LIKE :2 )\nORDER BY OBJECT_NAME",
          "first_audit_time": 1602576001,
          "current_audit_time": 1603083629,
          "schema": "TEST",
          "source": "dynamic",
          "parent_id": 0,
          "status": "problem",
          "score": 35,
          "hc_path": "",
          "executions": 1,
          "elapsed_time": 576.09,
          "avg_elapsed_time": 576.09,
          "origin_type": "",
          "origin_name": "",
          "file_id": 0,
          "sensitive_table": "",
          "audit": [
            {
              "target_id": 42414,
              "id": 479301,
              "name": "PLN_TO_CHANGE_TYPE",
              "risky": "high",
              "description": "抓取执行过的SQL执行计划，谓词过滤中出现关键字\"INTERNAL_FUNCTION\"，\"SYS_OP\"，以及部分情况下的TO_NUMBER",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479295,
              "name": "PLN_MERGE_JOIN_CARTESIAN",
              "risky": "middle",
              "description": "执行计划中出现关键字\"MERGE JOIN CARTESIAN\"",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479297,
              "name": "PLN_TAB_FULL",
              "risky": "low",
              "description": "发现全表扫描",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479298,
              "name": "SQL_UNION",
              "risky": "low",
              "description": "SQL中出现union,minus,intersect",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479299,
              "name": "PLN_IDX_FFS",
              "risky": "low",
              "description": "执行计划出现index fast full scan",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479300,
              "name": "SQL_SUBQUERY_FROM",
              "risky": "low",
              "description": "from段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479294,
              "name": "SQL_BUFFER_GETS",
              "risky": "low",
              "description": "SQL单次执行逻辑读大于1000",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479302,
              "name": "SQL_SUBQUERY_WHERE",
              "risky": "low",
              "description": "where段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479296,
              "name": "PLN_FILTER",
              "risky": "low",
              "description": "执行计划存在filter操作",
              "status": "problem"
            }],
          "db_name": "oracle_test_1",
          "file": ""
        },
        {
          "id": 42414,
          "sql_id": "78n0nrw1jhxh9",
          "sql_type": "DQL",
          "report_id": 9184,
          "db_id": 288,
          "sql_text": "SELECT  DISTINCT OWNER,OBJECT_NAME,OBJECT_TYPE FROM    (SELECT OWNER,OBJECT_NAME,OBJECT_TYPE FROM ALL_OBJECTS WHERE OBJECT_TYPE IN ('TABLE','PACKAGE','PROCEDURE','FUNCTION','SYNONYM','SYNONYM') AND UPPER(OBJECT_NAME) LIKE :1  UNION ALL\nSELECT  O.OWNER,O.OBJECT_NAME,O.OBJECT_TYPE\nFROM ALL_SYNONYMS S,ALL_OBJECTS O\nWHERE O.OWNER=S.TABLE_OWNER AND O.OBJECT_NAME=S.TABLE_NAME AND S.OWNER='PUBLIC' AND UPPER(S.SYNONYM_NAME)  LIKE :2 )\nORDER BY OBJECT_NAME",
          "first_audit_time": 1602576001,
          "current_audit_time": 1603083629,
          "schema": "TEST",
          "source": "dynamic",
          "parent_id": 0,
          "status": "problem",
          "score": 35,
          "hc_path": "",
          "executions": 1,
          "elapsed_time": 576.09,
          "avg_elapsed_time": 576.09,
          "origin_type": "",
          "origin_name": "",
          "file_id": 0,
          "sensitive_table": "",
          "audit": [
            {
              "target_id": 42414,
              "id": 479301,
              "name": "PLN_TO_CHANGE_TYPE",
              "risky": "high",
              "description": "抓取执行过的SQL执行计划，谓词过滤中出现关键字\"INTERNAL_FUNCTION\"，\"SYS_OP\"，以及部分情况下的TO_NUMBER",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479295,
              "name": "PLN_MERGE_JOIN_CARTESIAN",
              "risky": "middle",
              "description": "执行计划中出现关键字\"MERGE JOIN CARTESIAN\"",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479297,
              "name": "PLN_TAB_FULL",
              "risky": "low",
              "description": "发现全表扫描",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479298,
              "name": "SQL_UNION",
              "risky": "low",
              "description": "SQL中出现union,minus,intersect",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479299,
              "name": "PLN_IDX_FFS",
              "risky": "low",
              "description": "执行计划出现index fast full scan",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479300,
              "name": "SQL_SUBQUERY_FROM",
              "risky": "low",
              "description": "from段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479294,
              "name": "SQL_BUFFER_GETS",
              "risky": "low",
              "description": "SQL单次执行逻辑读大于1000",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479302,
              "name": "SQL_SUBQUERY_WHERE",
              "risky": "low",
              "description": "where段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479296,
              "name": "PLN_FILTER",
              "risky": "low",
              "description": "执行计划存在filter操作",
              "status": "problem"
            }],
          "db_name": "oracle_test_1",
          "file": ""
        },
        {
          "id": 42414,
          "sql_id": "78n0nrw1jhxh9",
          "sql_type": "DQL",
          "report_id": 9184,
          "db_id": 288,
          "sql_text": "SELECT  DISTINCT OWNER,OBJECT_NAME,OBJECT_TYPE FROM    (SELECT OWNER,OBJECT_NAME,OBJECT_TYPE FROM ALL_OBJECTS WHERE OBJECT_TYPE IN ('TABLE','PACKAGE','PROCEDURE','FUNCTION','SYNONYM','SYNONYM') AND UPPER(OBJECT_NAME) LIKE :1  UNION ALL\nSELECT  O.OWNER,O.OBJECT_NAME,O.OBJECT_TYPE\nFROM ALL_SYNONYMS S,ALL_OBJECTS O\nWHERE O.OWNER=S.TABLE_OWNER AND O.OBJECT_NAME=S.TABLE_NAME AND S.OWNER='PUBLIC' AND UPPER(S.SYNONYM_NAME)  LIKE :2 )\nORDER BY OBJECT_NAME",
          "first_audit_time": 1602576001,
          "current_audit_time": 1603083629,
          "schema": "TEST",
          "source": "dynamic",
          "parent_id": 0,
          "status": "problem",
          "score": 35,
          "hc_path": "",
          "executions": 1,
          "elapsed_time": 576.09,
          "avg_elapsed_time": 576.09,
          "origin_type": "",
          "origin_name": "",
          "file_id": 0,
          "sensitive_table": "",
          "audit": [
            {
              "target_id": 42414,
              "id": 479301,
              "name": "PLN_TO_CHANGE_TYPE",
              "risky": "high",
              "description": "抓取执行过的SQL执行计划，谓词过滤中出现关键字\"INTERNAL_FUNCTION\"，\"SYS_OP\"，以及部分情况下的TO_NUMBER",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479295,
              "name": "PLN_MERGE_JOIN_CARTESIAN",
              "risky": "middle",
              "description": "执行计划中出现关键字\"MERGE JOIN CARTESIAN\"",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479297,
              "name": "PLN_TAB_FULL",
              "risky": "low",
              "description": "发现全表扫描",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479298,
              "name": "SQL_UNION",
              "risky": "low",
              "description": "SQL中出现union,minus,intersect",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479299,
              "name": "PLN_IDX_FFS",
              "risky": "low",
              "description": "执行计划出现index fast full scan",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479300,
              "name": "SQL_SUBQUERY_FROM",
              "risky": "low",
              "description": "from段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479294,
              "name": "SQL_BUFFER_GETS",
              "risky": "low",
              "description": "SQL单次执行逻辑读大于1000",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479302,
              "name": "SQL_SUBQUERY_WHERE",
              "risky": "low",
              "description": "where段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479296,
              "name": "PLN_FILTER",
              "risky": "low",
              "description": "执行计划存在filter操作",
              "status": "problem"
            }],
          "db_name": "oracle_test_1",
          "file": ""
        },
        {
          "id": 42414,
          "sql_id": "78n0nrw1jhxh9",
          "sql_type": "DQL",
          "report_id": 9184,
          "db_id": 288,
          "sql_text": "SELECT  DISTINCT OWNER,OBJECT_NAME,OBJECT_TYPE FROM    (SELECT OWNER,OBJECT_NAME,OBJECT_TYPE FROM ALL_OBJECTS WHERE OBJECT_TYPE IN ('TABLE','PACKAGE','PROCEDURE','FUNCTION','SYNONYM','SYNONYM') AND UPPER(OBJECT_NAME) LIKE :1  UNION ALL\nSELECT  O.OWNER,O.OBJECT_NAME,O.OBJECT_TYPE\nFROM ALL_SYNONYMS S,ALL_OBJECTS O\nWHERE O.OWNER=S.TABLE_OWNER AND O.OBJECT_NAME=S.TABLE_NAME AND S.OWNER='PUBLIC' AND UPPER(S.SYNONYM_NAME)  LIKE :2 )\nORDER BY OBJECT_NAME",
          "first_audit_time": 1602576001,
          "current_audit_time": 1603083629,
          "schema": "TEST",
          "source": "dynamic",
          "parent_id": 0,
          "status": "problem",
          "score": 35,
          "hc_path": "",
          "executions": 1,
          "elapsed_time": 576.09,
          "avg_elapsed_time": 576.09,
          "origin_type": "",
          "origin_name": "",
          "file_id": 0,
          "sensitive_table": "",
          "audit": [
            {
              "target_id": 42414,
              "id": 479301,
              "name": "PLN_TO_CHANGE_TYPE",
              "risky": "high",
              "description": "抓取执行过的SQL执行计划，谓词过滤中出现关键字\"INTERNAL_FUNCTION\"，\"SYS_OP\"，以及部分情况下的TO_NUMBER",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479295,
              "name": "PLN_MERGE_JOIN_CARTESIAN",
              "risky": "middle",
              "description": "执行计划中出现关键字\"MERGE JOIN CARTESIAN\"",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479297,
              "name": "PLN_TAB_FULL",
              "risky": "low",
              "description": "发现全表扫描",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479298,
              "name": "SQL_UNION",
              "risky": "low",
              "description": "SQL中出现union,minus,intersect",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479299,
              "name": "PLN_IDX_FFS",
              "risky": "low",
              "description": "执行计划出现index fast full scan",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479300,
              "name": "SQL_SUBQUERY_FROM",
              "risky": "low",
              "description": "from段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479294,
              "name": "SQL_BUFFER_GETS",
              "risky": "low",
              "description": "SQL单次执行逻辑读大于1000",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479302,
              "name": "SQL_SUBQUERY_WHERE",
              "risky": "low",
              "description": "where段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479296,
              "name": "PLN_FILTER",
              "risky": "low",
              "description": "执行计划存在filter操作",
              "status": "problem"
            }],
          "db_name": "oracle_test_1",
          "file": ""
        },
        {
          "id": 42414,
          "sql_id": "78n0nrw1jhxh9",
          "sql_type": "DQL",
          "report_id": 9184,
          "db_id": 288,
          "sql_text": "SELECT  DISTINCT OWNER,OBJECT_NAME,OBJECT_TYPE FROM    (SELECT OWNER,OBJECT_NAME,OBJECT_TYPE FROM ALL_OBJECTS WHERE OBJECT_TYPE IN ('TABLE','PACKAGE','PROCEDURE','FUNCTION','SYNONYM','SYNONYM') AND UPPER(OBJECT_NAME) LIKE :1  UNION ALL\nSELECT  O.OWNER,O.OBJECT_NAME,O.OBJECT_TYPE\nFROM ALL_SYNONYMS S,ALL_OBJECTS O\nWHERE O.OWNER=S.TABLE_OWNER AND O.OBJECT_NAME=S.TABLE_NAME AND S.OWNER='PUBLIC' AND UPPER(S.SYNONYM_NAME)  LIKE :2 )\nORDER BY OBJECT_NAME",
          "first_audit_time": 1602576001,
          "current_audit_time": 1603083629,
          "schema": "TEST",
          "source": "dynamic",
          "parent_id": 0,
          "status": "problem",
          "score": 35,
          "hc_path": "",
          "executions": 1,
          "elapsed_time": 576.09,
          "avg_elapsed_time": 576.09,
          "origin_type": "",
          "origin_name": "",
          "file_id": 0,
          "sensitive_table": "",
          "audit": [
            {
              "target_id": 42414,
              "id": 479301,
              "name": "PLN_TO_CHANGE_TYPE",
              "risky": "high",
              "description": "抓取执行过的SQL执行计划，谓词过滤中出现关键字\"INTERNAL_FUNCTION\"，\"SYS_OP\"，以及部分情况下的TO_NUMBER",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479295,
              "name": "PLN_MERGE_JOIN_CARTESIAN",
              "risky": "middle",
              "description": "执行计划中出现关键字\"MERGE JOIN CARTESIAN\"",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479297,
              "name": "PLN_TAB_FULL",
              "risky": "low",
              "description": "发现全表扫描",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479298,
              "name": "SQL_UNION",
              "risky": "low",
              "description": "SQL中出现union,minus,intersect",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479299,
              "name": "PLN_IDX_FFS",
              "risky": "low",
              "description": "执行计划出现index fast full scan",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479300,
              "name": "SQL_SUBQUERY_FROM",
              "risky": "low",
              "description": "from段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479294,
              "name": "SQL_BUFFER_GETS",
              "risky": "low",
              "description": "SQL单次执行逻辑读大于1000",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479302,
              "name": "SQL_SUBQUERY_WHERE",
              "risky": "low",
              "description": "where段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479296,
              "name": "PLN_FILTER",
              "risky": "low",
              "description": "执行计划存在filter操作",
              "status": "problem"
            }],
          "db_name": "oracle_test_1",
          "file": ""
        },
        {
          "id": 42414,
          "sql_id": "78n0nrw1jhxh9",
          "sql_type": "DQL",
          "report_id": 9184,
          "db_id": 288,
          "sql_text": "SELECT  DISTINCT OWNER,OBJECT_NAME,OBJECT_TYPE FROM    (SELECT OWNER,OBJECT_NAME,OBJECT_TYPE FROM ALL_OBJECTS WHERE OBJECT_TYPE IN ('TABLE','PACKAGE','PROCEDURE','FUNCTION','SYNONYM','SYNONYM') AND UPPER(OBJECT_NAME) LIKE :1  UNION ALL\nSELECT  O.OWNER,O.OBJECT_NAME,O.OBJECT_TYPE\nFROM ALL_SYNONYMS S,ALL_OBJECTS O\nWHERE O.OWNER=S.TABLE_OWNER AND O.OBJECT_NAME=S.TABLE_NAME AND S.OWNER='PUBLIC' AND UPPER(S.SYNONYM_NAME)  LIKE :2 )\nORDER BY OBJECT_NAME",
          "first_audit_time": 1602576001,
          "current_audit_time": 1603083629,
          "schema": "TEST",
          "source": "dynamic",
          "parent_id": 0,
          "status": "problem",
          "score": 35,
          "hc_path": "",
          "executions": 1,
          "elapsed_time": 576.09,
          "avg_elapsed_time": 576.09,
          "origin_type": "",
          "origin_name": "",
          "file_id": 0,
          "sensitive_table": "",
          "audit": [
            {
              "target_id": 42414,
              "id": 479301,
              "name": "PLN_TO_CHANGE_TYPE",
              "risky": "high",
              "description": "抓取执行过的SQL执行计划，谓词过滤中出现关键字\"INTERNAL_FUNCTION\"，\"SYS_OP\"，以及部分情况下的TO_NUMBER",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479295,
              "name": "PLN_MERGE_JOIN_CARTESIAN",
              "risky": "middle",
              "description": "执行计划中出现关键字\"MERGE JOIN CARTESIAN\"",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479297,
              "name": "PLN_TAB_FULL",
              "risky": "low",
              "description": "发现全表扫描",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479298,
              "name": "SQL_UNION",
              "risky": "low",
              "description": "SQL中出现union,minus,intersect",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479299,
              "name": "PLN_IDX_FFS",
              "risky": "low",
              "description": "执行计划出现index fast full scan",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479300,
              "name": "SQL_SUBQUERY_FROM",
              "risky": "low",
              "description": "from段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479294,
              "name": "SQL_BUFFER_GETS",
              "risky": "low",
              "description": "SQL单次执行逻辑读大于1000",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479302,
              "name": "SQL_SUBQUERY_WHERE",
              "risky": "low",
              "description": "where段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479296,
              "name": "PLN_FILTER",
              "risky": "low",
              "description": "执行计划存在filter操作",
              "status": "problem"
            }],
          "db_name": "oracle_test_1",
          "file": ""
        },
        {
          "id": 42414,
          "sql_id": "78n0nrw1jhxh9",
          "sql_type": "DQL",
          "report_id": 9184,
          "db_id": 288,
          "sql_text": "SELECT  DISTINCT OWNER,OBJECT_NAME,OBJECT_TYPE FROM    (SELECT OWNER,OBJECT_NAME,OBJECT_TYPE FROM ALL_OBJECTS WHERE OBJECT_TYPE IN ('TABLE','PACKAGE','PROCEDURE','FUNCTION','SYNONYM','SYNONYM') AND UPPER(OBJECT_NAME) LIKE :1  UNION ALL\nSELECT  O.OWNER,O.OBJECT_NAME,O.OBJECT_TYPE\nFROM ALL_SYNONYMS S,ALL_OBJECTS O\nWHERE O.OWNER=S.TABLE_OWNER AND O.OBJECT_NAME=S.TABLE_NAME AND S.OWNER='PUBLIC' AND UPPER(S.SYNONYM_NAME)  LIKE :2 )\nORDER BY OBJECT_NAME",
          "first_audit_time": 1602576001,
          "current_audit_time": 1603083629,
          "schema": "TEST",
          "source": "dynamic",
          "parent_id": 0,
          "status": "problem",
          "score": 35,
          "hc_path": "",
          "executions": 1,
          "elapsed_time": 576.09,
          "avg_elapsed_time": 576.09,
          "origin_type": "",
          "origin_name": "",
          "file_id": 0,
          "sensitive_table": "",
          "audit": [
            {
              "target_id": 42414,
              "id": 479301,
              "name": "PLN_TO_CHANGE_TYPE",
              "risky": "high",
              "description": "抓取执行过的SQL执行计划，谓词过滤中出现关键字\"INTERNAL_FUNCTION\"，\"SYS_OP\"，以及部分情况下的TO_NUMBER",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479295,
              "name": "PLN_MERGE_JOIN_CARTESIAN",
              "risky": "middle",
              "description": "执行计划中出现关键字\"MERGE JOIN CARTESIAN\"",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479297,
              "name": "PLN_TAB_FULL",
              "risky": "low",
              "description": "发现全表扫描",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479298,
              "name": "SQL_UNION",
              "risky": "low",
              "description": "SQL中出现union,minus,intersect",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479299,
              "name": "PLN_IDX_FFS",
              "risky": "low",
              "description": "执行计划出现index fast full scan",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479300,
              "name": "SQL_SUBQUERY_FROM",
              "risky": "low",
              "description": "from段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479294,
              "name": "SQL_BUFFER_GETS",
              "risky": "low",
              "description": "SQL单次执行逻辑读大于1000",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479302,
              "name": "SQL_SUBQUERY_WHERE",
              "risky": "low",
              "description": "where段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479296,
              "name": "PLN_FILTER",
              "risky": "low",
              "description": "执行计划存在filter操作",
              "status": "problem"
            }],
          "db_name": "oracle_test_1",
          "file": ""
        },
        {
          "id": 42414,
          "sql_id": "78n0nrw1jhxh9",
          "sql_type": "DQL",
          "report_id": 9184,
          "db_id": 288,
          "sql_text": "SELECT  DISTINCT OWNER,OBJECT_NAME,OBJECT_TYPE FROM    (SELECT OWNER,OBJECT_NAME,OBJECT_TYPE FROM ALL_OBJECTS WHERE OBJECT_TYPE IN ('TABLE','PACKAGE','PROCEDURE','FUNCTION','SYNONYM','SYNONYM') AND UPPER(OBJECT_NAME) LIKE :1  UNION ALL\nSELECT  O.OWNER,O.OBJECT_NAME,O.OBJECT_TYPE\nFROM ALL_SYNONYMS S,ALL_OBJECTS O\nWHERE O.OWNER=S.TABLE_OWNER AND O.OBJECT_NAME=S.TABLE_NAME AND S.OWNER='PUBLIC' AND UPPER(S.SYNONYM_NAME)  LIKE :2 )\nORDER BY OBJECT_NAME",
          "first_audit_time": 1602576001,
          "current_audit_time": 1603083629,
          "schema": "TEST",
          "source": "dynamic",
          "parent_id": 0,
          "status": "problem",
          "score": 35,
          "hc_path": "",
          "executions": 1,
          "elapsed_time": 576.09,
          "avg_elapsed_time": 576.09,
          "origin_type": "",
          "origin_name": "",
          "file_id": 0,
          "sensitive_table": "",
          "audit": [
            {
              "target_id": 42414,
              "id": 479301,
              "name": "PLN_TO_CHANGE_TYPE",
              "risky": "high",
              "description": "抓取执行过的SQL执行计划，谓词过滤中出现关键字\"INTERNAL_FUNCTION\"，\"SYS_OP\"，以及部分情况下的TO_NUMBER",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479295,
              "name": "PLN_MERGE_JOIN_CARTESIAN",
              "risky": "middle",
              "description": "执行计划中出现关键字\"MERGE JOIN CARTESIAN\"",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479297,
              "name": "PLN_TAB_FULL",
              "risky": "low",
              "description": "发现全表扫描",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479298,
              "name": "SQL_UNION",
              "risky": "low",
              "description": "SQL中出现union,minus,intersect",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479299,
              "name": "PLN_IDX_FFS",
              "risky": "low",
              "description": "执行计划出现index fast full scan",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479300,
              "name": "SQL_SUBQUERY_FROM",
              "risky": "low",
              "description": "from段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479294,
              "name": "SQL_BUFFER_GETS",
              "risky": "low",
              "description": "SQL单次执行逻辑读大于1000",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479302,
              "name": "SQL_SUBQUERY_WHERE",
              "risky": "low",
              "description": "where段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479296,
              "name": "PLN_FILTER",
              "risky": "low",
              "description": "执行计划存在filter操作",
              "status": "problem"
            }],
          "db_name": "oracle_test_1",
          "file": ""
        },
        {
          "id": 42414,
          "sql_id": "78n0nrw1jhxh9",
          "sql_type": "DQL",
          "report_id": 9184,
          "db_id": 288,
          "sql_text": "SELECT  DISTINCT OWNER,OBJECT_NAME,OBJECT_TYPE FROM    (SELECT OWNER,OBJECT_NAME,OBJECT_TYPE FROM ALL_OBJECTS WHERE OBJECT_TYPE IN ('TABLE','PACKAGE','PROCEDURE','FUNCTION','SYNONYM','SYNONYM') AND UPPER(OBJECT_NAME) LIKE :1  UNION ALL\nSELECT  O.OWNER,O.OBJECT_NAME,O.OBJECT_TYPE\nFROM ALL_SYNONYMS S,ALL_OBJECTS O\nWHERE O.OWNER=S.TABLE_OWNER AND O.OBJECT_NAME=S.TABLE_NAME AND S.OWNER='PUBLIC' AND UPPER(S.SYNONYM_NAME)  LIKE :2 )\nORDER BY OBJECT_NAME",
          "first_audit_time": 1602576001,
          "current_audit_time": 1603083629,
          "schema": "TEST",
          "source": "dynamic",
          "parent_id": 0,
          "status": "problem",
          "score": 35,
          "hc_path": "",
          "executions": 1,
          "elapsed_time": 576.09,
          "avg_elapsed_time": 576.09,
          "origin_type": "",
          "origin_name": "",
          "file_id": 0,
          "sensitive_table": "",
          "audit": [
            {
              "target_id": 42414,
              "id": 479301,
              "name": "PLN_TO_CHANGE_TYPE",
              "risky": "high",
              "description": "抓取执行过的SQL执行计划，谓词过滤中出现关键字\"INTERNAL_FUNCTION\"，\"SYS_OP\"，以及部分情况下的TO_NUMBER",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479295,
              "name": "PLN_MERGE_JOIN_CARTESIAN",
              "risky": "middle",
              "description": "执行计划中出现关键字\"MERGE JOIN CARTESIAN\"",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479297,
              "name": "PLN_TAB_FULL",
              "risky": "low",
              "description": "发现全表扫描",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479298,
              "name": "SQL_UNION",
              "risky": "low",
              "description": "SQL中出现union,minus,intersect",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479299,
              "name": "PLN_IDX_FFS",
              "risky": "low",
              "description": "执行计划出现index fast full scan",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479300,
              "name": "SQL_SUBQUERY_FROM",
              "risky": "low",
              "description": "from段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479294,
              "name": "SQL_BUFFER_GETS",
              "risky": "low",
              "description": "SQL单次执行逻辑读大于1000",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479302,
              "name": "SQL_SUBQUERY_WHERE",
              "risky": "low",
              "description": "where段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479296,
              "name": "PLN_FILTER",
              "risky": "low",
              "description": "执行计划存在filter操作",
              "status": "problem"
            }],
          "db_name": "oracle_test_1",
          "file": ""
        },
        {
          "id": 42414,
          "sql_id": "78n0nrw1jhxh9",
          "sql_type": "DQL",
          "report_id": 9184,
          "db_id": 288,
          "sql_text": "SELECT  DISTINCT OWNER,OBJECT_NAME,OBJECT_TYPE FROM    (SELECT OWNER,OBJECT_NAME,OBJECT_TYPE FROM ALL_OBJECTS WHERE OBJECT_TYPE IN ('TABLE','PACKAGE','PROCEDURE','FUNCTION','SYNONYM','SYNONYM') AND UPPER(OBJECT_NAME) LIKE :1  UNION ALL\nSELECT  O.OWNER,O.OBJECT_NAME,O.OBJECT_TYPE\nFROM ALL_SYNONYMS S,ALL_OBJECTS O\nWHERE O.OWNER=S.TABLE_OWNER AND O.OBJECT_NAME=S.TABLE_NAME AND S.OWNER='PUBLIC' AND UPPER(S.SYNONYM_NAME)  LIKE :2 )\nORDER BY OBJECT_NAME",
          "first_audit_time": 1602576001,
          "current_audit_time": 1603083629,
          "schema": "TEST",
          "source": "dynamic",
          "parent_id": 0,
          "status": "problem",
          "score": 35,
          "hc_path": "",
          "executions": 1,
          "elapsed_time": 576.09,
          "avg_elapsed_time": 576.09,
          "origin_type": "",
          "origin_name": "",
          "file_id": 0,
          "sensitive_table": "",
          "audit": [
            {
              "target_id": 42414,
              "id": 479301,
              "name": "PLN_TO_CHANGE_TYPE",
              "risky": "high",
              "description": "抓取执行过的SQL执行计划，谓词过滤中出现关键字\"INTERNAL_FUNCTION\"，\"SYS_OP\"，以及部分情况下的TO_NUMBER",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479295,
              "name": "PLN_MERGE_JOIN_CARTESIAN",
              "risky": "middle",
              "description": "执行计划中出现关键字\"MERGE JOIN CARTESIAN\"",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479297,
              "name": "PLN_TAB_FULL",
              "risky": "low",
              "description": "发现全表扫描",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479298,
              "name": "SQL_UNION",
              "risky": "low",
              "description": "SQL中出现union,minus,intersect",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479299,
              "name": "PLN_IDX_FFS",
              "risky": "low",
              "description": "执行计划出现index fast full scan",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479300,
              "name": "SQL_SUBQUERY_FROM",
              "risky": "low",
              "description": "from段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479294,
              "name": "SQL_BUFFER_GETS",
              "risky": "low",
              "description": "SQL单次执行逻辑读大于1000",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479302,
              "name": "SQL_SUBQUERY_WHERE",
              "risky": "low",
              "description": "where段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479296,
              "name": "PLN_FILTER",
              "risky": "low",
              "description": "执行计划存在filter操作",
              "status": "problem"
            }],
          "db_name": "oracle_test_1",
          "file": ""
        },
        {
          "id": 42414,
          "sql_id": "78n0nrw1jhxh9",
          "sql_type": "DQL",
          "report_id": 9184,
          "db_id": 288,
          "sql_text": "SELECT  DISTINCT OWNER,OBJECT_NAME,OBJECT_TYPE FROM    (SELECT OWNER,OBJECT_NAME,OBJECT_TYPE FROM ALL_OBJECTS WHERE OBJECT_TYPE IN ('TABLE','PACKAGE','PROCEDURE','FUNCTION','SYNONYM','SYNONYM') AND UPPER(OBJECT_NAME) LIKE :1  UNION ALL\nSELECT  O.OWNER,O.OBJECT_NAME,O.OBJECT_TYPE\nFROM ALL_SYNONYMS S,ALL_OBJECTS O\nWHERE O.OWNER=S.TABLE_OWNER AND O.OBJECT_NAME=S.TABLE_NAME AND S.OWNER='PUBLIC' AND UPPER(S.SYNONYM_NAME)  LIKE :2 )\nORDER BY OBJECT_NAME",
          "first_audit_time": 1602576001,
          "current_audit_time": 1603083629,
          "schema": "TEST",
          "source": "dynamic",
          "parent_id": 0,
          "status": "problem",
          "score": 35,
          "hc_path": "",
          "executions": 1,
          "elapsed_time": 576.09,
          "avg_elapsed_time": 576.09,
          "origin_type": "",
          "origin_name": "",
          "file_id": 0,
          "sensitive_table": "",
          "audit": [
            {
              "target_id": 42414,
              "id": 479301,
              "name": "PLN_TO_CHANGE_TYPE",
              "risky": "high",
              "description": "抓取执行过的SQL执行计划，谓词过滤中出现关键字\"INTERNAL_FUNCTION\"，\"SYS_OP\"，以及部分情况下的TO_NUMBER",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479295,
              "name": "PLN_MERGE_JOIN_CARTESIAN",
              "risky": "middle",
              "description": "执行计划中出现关键字\"MERGE JOIN CARTESIAN\"",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479297,
              "name": "PLN_TAB_FULL",
              "risky": "low",
              "description": "发现全表扫描",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479298,
              "name": "SQL_UNION",
              "risky": "low",
              "description": "SQL中出现union,minus,intersect",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479299,
              "name": "PLN_IDX_FFS",
              "risky": "low",
              "description": "执行计划出现index fast full scan",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479300,
              "name": "SQL_SUBQUERY_FROM",
              "risky": "low",
              "description": "from段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479294,
              "name": "SQL_BUFFER_GETS",
              "risky": "low",
              "description": "SQL单次执行逻辑读大于1000",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479302,
              "name": "SQL_SUBQUERY_WHERE",
              "risky": "low",
              "description": "where段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479296,
              "name": "PLN_FILTER",
              "risky": "low",
              "description": "执行计划存在filter操作",
              "status": "problem"
            }],
          "db_name": "oracle_test_1",
          "file": ""
        },
        {
          "id": 42414,
          "sql_id": "78n0nrw1jhxh9",
          "sql_type": "DQL",
          "report_id": 9184,
          "db_id": 288,
          "sql_text": "SELECT  DISTINCT OWNER,OBJECT_NAME,OBJECT_TYPE FROM    (SELECT OWNER,OBJECT_NAME,OBJECT_TYPE FROM ALL_OBJECTS WHERE OBJECT_TYPE IN ('TABLE','PACKAGE','PROCEDURE','FUNCTION','SYNONYM','SYNONYM') AND UPPER(OBJECT_NAME) LIKE :1  UNION ALL\nSELECT  O.OWNER,O.OBJECT_NAME,O.OBJECT_TYPE\nFROM ALL_SYNONYMS S,ALL_OBJECTS O\nWHERE O.OWNER=S.TABLE_OWNER AND O.OBJECT_NAME=S.TABLE_NAME AND S.OWNER='PUBLIC' AND UPPER(S.SYNONYM_NAME)  LIKE :2 )\nORDER BY OBJECT_NAME",
          "first_audit_time": 1602576001,
          "current_audit_time": 1603083629,
          "schema": "TEST",
          "source": "dynamic",
          "parent_id": 0,
          "status": "problem",
          "score": 35,
          "hc_path": "",
          "executions": 1,
          "elapsed_time": 576.09,
          "avg_elapsed_time": 576.09,
          "origin_type": "",
          "origin_name": "",
          "file_id": 0,
          "sensitive_table": "",
          "audit": [
            {
              "target_id": 42414,
              "id": 479301,
              "name": "PLN_TO_CHANGE_TYPE",
              "risky": "high",
              "description": "抓取执行过的SQL执行计划，谓词过滤中出现关键字\"INTERNAL_FUNCTION\"，\"SYS_OP\"，以及部分情况下的TO_NUMBER",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479295,
              "name": "PLN_MERGE_JOIN_CARTESIAN",
              "risky": "middle",
              "description": "执行计划中出现关键字\"MERGE JOIN CARTESIAN\"",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479297,
              "name": "PLN_TAB_FULL",
              "risky": "low",
              "description": "发现全表扫描",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479298,
              "name": "SQL_UNION",
              "risky": "low",
              "description": "SQL中出现union,minus,intersect",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479299,
              "name": "PLN_IDX_FFS",
              "risky": "low",
              "description": "执行计划出现index fast full scan",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479300,
              "name": "SQL_SUBQUERY_FROM",
              "risky": "low",
              "description": "from段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479294,
              "name": "SQL_BUFFER_GETS",
              "risky": "low",
              "description": "SQL单次执行逻辑读大于1000",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479302,
              "name": "SQL_SUBQUERY_WHERE",
              "risky": "low",
              "description": "where段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479296,
              "name": "PLN_FILTER",
              "risky": "low",
              "description": "执行计划存在filter操作",
              "status": "problem"
            }],
          "db_name": "oracle_test_1",
          "file": ""
        },
        {
          "id": 42414,
          "sql_id": "78n0nrw1jhxh9",
          "sql_type": "DQL",
          "report_id": 9184,
          "db_id": 288,
          "sql_text": "SELECT  DISTINCT OWNER,OBJECT_NAME,OBJECT_TYPE FROM    (SELECT OWNER,OBJECT_NAME,OBJECT_TYPE FROM ALL_OBJECTS WHERE OBJECT_TYPE IN ('TABLE','PACKAGE','PROCEDURE','FUNCTION','SYNONYM','SYNONYM') AND UPPER(OBJECT_NAME) LIKE :1  UNION ALL\nSELECT  O.OWNER,O.OBJECT_NAME,O.OBJECT_TYPE\nFROM ALL_SYNONYMS S,ALL_OBJECTS O\nWHERE O.OWNER=S.TABLE_OWNER AND O.OBJECT_NAME=S.TABLE_NAME AND S.OWNER='PUBLIC' AND UPPER(S.SYNONYM_NAME)  LIKE :2 )\nORDER BY OBJECT_NAME",
          "first_audit_time": 1602576001,
          "current_audit_time": 1603083629,
          "schema": "TEST",
          "source": "dynamic",
          "parent_id": 0,
          "status": "problem",
          "score": 35,
          "hc_path": "",
          "executions": 1,
          "elapsed_time": 576.09,
          "avg_elapsed_time": 576.09,
          "origin_type": "",
          "origin_name": "",
          "file_id": 0,
          "sensitive_table": "",
          "audit": [
            {
              "target_id": 42414,
              "id": 479301,
              "name": "PLN_TO_CHANGE_TYPE",
              "risky": "high",
              "description": "抓取执行过的SQL执行计划，谓词过滤中出现关键字\"INTERNAL_FUNCTION\"，\"SYS_OP\"，以及部分情况下的TO_NUMBER",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479295,
              "name": "PLN_MERGE_JOIN_CARTESIAN",
              "risky": "middle",
              "description": "执行计划中出现关键字\"MERGE JOIN CARTESIAN\"",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479297,
              "name": "PLN_TAB_FULL",
              "risky": "low",
              "description": "发现全表扫描",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479298,
              "name": "SQL_UNION",
              "risky": "low",
              "description": "SQL中出现union,minus,intersect",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479299,
              "name": "PLN_IDX_FFS",
              "risky": "low",
              "description": "执行计划出现index fast full scan",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479300,
              "name": "SQL_SUBQUERY_FROM",
              "risky": "low",
              "description": "from段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479294,
              "name": "SQL_BUFFER_GETS",
              "risky": "low",
              "description": "SQL单次执行逻辑读大于1000",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479302,
              "name": "SQL_SUBQUERY_WHERE",
              "risky": "low",
              "description": "where段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479296,
              "name": "PLN_FILTER",
              "risky": "low",
              "description": "执行计划存在filter操作",
              "status": "problem"
            }],
          "db_name": "oracle_test_1",
          "file": ""
        },
        {
          "id": 42414,
          "sql_id": "78n0nrw1jhxh9",
          "sql_type": "DQL",
          "report_id": 9184,
          "db_id": 288,
          "sql_text": "SELECT  DISTINCT OWNER,OBJECT_NAME,OBJECT_TYPE FROM    (SELECT OWNER,OBJECT_NAME,OBJECT_TYPE FROM ALL_OBJECTS WHERE OBJECT_TYPE IN ('TABLE','PACKAGE','PROCEDURE','FUNCTION','SYNONYM','SYNONYM') AND UPPER(OBJECT_NAME) LIKE :1  UNION ALL\nSELECT  O.OWNER,O.OBJECT_NAME,O.OBJECT_TYPE\nFROM ALL_SYNONYMS S,ALL_OBJECTS O\nWHERE O.OWNER=S.TABLE_OWNER AND O.OBJECT_NAME=S.TABLE_NAME AND S.OWNER='PUBLIC' AND UPPER(S.SYNONYM_NAME)  LIKE :2 )\nORDER BY OBJECT_NAME",
          "first_audit_time": 1602576001,
          "current_audit_time": 1603083629,
          "schema": "TEST",
          "source": "dynamic",
          "parent_id": 0,
          "status": "problem",
          "score": 35,
          "hc_path": "",
          "executions": 1,
          "elapsed_time": 576.09,
          "avg_elapsed_time": 576.09,
          "origin_type": "",
          "origin_name": "",
          "file_id": 0,
          "sensitive_table": "",
          "audit": [
            {
              "target_id": 42414,
              "id": 479301,
              "name": "PLN_TO_CHANGE_TYPE",
              "risky": "high",
              "description": "抓取执行过的SQL执行计划，谓词过滤中出现关键字\"INTERNAL_FUNCTION\"，\"SYS_OP\"，以及部分情况下的TO_NUMBER",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479295,
              "name": "PLN_MERGE_JOIN_CARTESIAN",
              "risky": "middle",
              "description": "执行计划中出现关键字\"MERGE JOIN CARTESIAN\"",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479297,
              "name": "PLN_TAB_FULL",
              "risky": "low",
              "description": "发现全表扫描",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479298,
              "name": "SQL_UNION",
              "risky": "low",
              "description": "SQL中出现union,minus,intersect",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479299,
              "name": "PLN_IDX_FFS",
              "risky": "low",
              "description": "执行计划出现index fast full scan",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479300,
              "name": "SQL_SUBQUERY_FROM",
              "risky": "low",
              "description": "from段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479294,
              "name": "SQL_BUFFER_GETS",
              "risky": "low",
              "description": "SQL单次执行逻辑读大于1000",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479302,
              "name": "SQL_SUBQUERY_WHERE",
              "risky": "low",
              "description": "where段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479296,
              "name": "PLN_FILTER",
              "risky": "low",
              "description": "执行计划存在filter操作",
              "status": "problem"
            }],
          "db_name": "oracle_test_1",
          "file": ""
        },
        {
          "id": 42414,
          "sql_id": "78n0nrw1jhxh9",
          "sql_type": "DQL",
          "report_id": 9184,
          "db_id": 288,
          "sql_text": "SELECT  DISTINCT OWNER,OBJECT_NAME,OBJECT_TYPE FROM    (SELECT OWNER,OBJECT_NAME,OBJECT_TYPE FROM ALL_OBJECTS WHERE OBJECT_TYPE IN ('TABLE','PACKAGE','PROCEDURE','FUNCTION','SYNONYM','SYNONYM') AND UPPER(OBJECT_NAME) LIKE :1  UNION ALL\nSELECT  O.OWNER,O.OBJECT_NAME,O.OBJECT_TYPE\nFROM ALL_SYNONYMS S,ALL_OBJECTS O\nWHERE O.OWNER=S.TABLE_OWNER AND O.OBJECT_NAME=S.TABLE_NAME AND S.OWNER='PUBLIC' AND UPPER(S.SYNONYM_NAME)  LIKE :2 )\nORDER BY OBJECT_NAME",
          "first_audit_time": 1602576001,
          "current_audit_time": 1603083629,
          "schema": "TEST",
          "source": "dynamic",
          "parent_id": 0,
          "status": "problem",
          "score": 35,
          "hc_path": "",
          "executions": 1,
          "elapsed_time": 576.09,
          "avg_elapsed_time": 576.09,
          "origin_type": "",
          "origin_name": "",
          "file_id": 0,
          "sensitive_table": "",
          "audit": [
            {
              "target_id": 42414,
              "id": 479301,
              "name": "PLN_TO_CHANGE_TYPE",
              "risky": "high",
              "description": "抓取执行过的SQL执行计划，谓词过滤中出现关键字\"INTERNAL_FUNCTION\"，\"SYS_OP\"，以及部分情况下的TO_NUMBER",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479295,
              "name": "PLN_MERGE_JOIN_CARTESIAN",
              "risky": "middle",
              "description": "执行计划中出现关键字\"MERGE JOIN CARTESIAN\"",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479297,
              "name": "PLN_TAB_FULL",
              "risky": "low",
              "description": "发现全表扫描",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479298,
              "name": "SQL_UNION",
              "risky": "low",
              "description": "SQL中出现union,minus,intersect",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479299,
              "name": "PLN_IDX_FFS",
              "risky": "low",
              "description": "执行计划出现index fast full scan",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479300,
              "name": "SQL_SUBQUERY_FROM",
              "risky": "low",
              "description": "from段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479294,
              "name": "SQL_BUFFER_GETS",
              "risky": "low",
              "description": "SQL单次执行逻辑读大于1000",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479302,
              "name": "SQL_SUBQUERY_WHERE",
              "risky": "low",
              "description": "where段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479296,
              "name": "PLN_FILTER",
              "risky": "low",
              "description": "执行计划存在filter操作",
              "status": "problem"
            }],
          "db_name": "oracle_test_1",
          "file": ""
        },
        {
          "id": 42414,
          "sql_id": "78n0nrw1jhxh9",
          "sql_type": "DQL",
          "report_id": 9184,
          "db_id": 288,
          "sql_text": "SELECT  DISTINCT OWNER,OBJECT_NAME,OBJECT_TYPE FROM    (SELECT OWNER,OBJECT_NAME,OBJECT_TYPE FROM ALL_OBJECTS WHERE OBJECT_TYPE IN ('TABLE','PACKAGE','PROCEDURE','FUNCTION','SYNONYM','SYNONYM') AND UPPER(OBJECT_NAME) LIKE :1  UNION ALL\nSELECT  O.OWNER,O.OBJECT_NAME,O.OBJECT_TYPE\nFROM ALL_SYNONYMS S,ALL_OBJECTS O\nWHERE O.OWNER=S.TABLE_OWNER AND O.OBJECT_NAME=S.TABLE_NAME AND S.OWNER='PUBLIC' AND UPPER(S.SYNONYM_NAME)  LIKE :2 )\nORDER BY OBJECT_NAME",
          "first_audit_time": 1602576001,
          "current_audit_time": 1603083629,
          "schema": "TEST",
          "source": "dynamic",
          "parent_id": 0,
          "status": "problem",
          "score": 35,
          "hc_path": "",
          "executions": 1,
          "elapsed_time": 576.09,
          "avg_elapsed_time": 576.09,
          "origin_type": "",
          "origin_name": "",
          "file_id": 0,
          "sensitive_table": "",
          "audit": [
            {
              "target_id": 42414,
              "id": 479301,
              "name": "PLN_TO_CHANGE_TYPE",
              "risky": "high",
              "description": "抓取执行过的SQL执行计划，谓词过滤中出现关键字\"INTERNAL_FUNCTION\"，\"SYS_OP\"，以及部分情况下的TO_NUMBER",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479295,
              "name": "PLN_MERGE_JOIN_CARTESIAN",
              "risky": "middle",
              "description": "执行计划中出现关键字\"MERGE JOIN CARTESIAN\"",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479297,
              "name": "PLN_TAB_FULL",
              "risky": "low",
              "description": "发现全表扫描",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479298,
              "name": "SQL_UNION",
              "risky": "low",
              "description": "SQL中出现union,minus,intersect",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479299,
              "name": "PLN_IDX_FFS",
              "risky": "low",
              "description": "执行计划出现index fast full scan",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479300,
              "name": "SQL_SUBQUERY_FROM",
              "risky": "low",
              "description": "from段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479294,
              "name": "SQL_BUFFER_GETS",
              "risky": "low",
              "description": "SQL单次执行逻辑读大于1000",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479302,
              "name": "SQL_SUBQUERY_WHERE",
              "risky": "low",
              "description": "where段出现子查询",
              "status": "problem"
            },
            {
              "target_id": 42414,
              "id": 479296,
              "name": "PLN_FILTER",
              "risky": "low",
              "description": "执行计划存在filter操作",
              "status": "problem"
            }],
          "db_name": "oracle_test_1",
          "file": ""
        },
      ]
    },
    {
      "report_id": 9184,
      "name": "IDX_INVISIBLE",
      "description": "索引为invisible或unusable",
      "advice": "关注索引是否有必要调整",
      "risky": "high",
      "audit_type": "OBJECT",
      "cn_name": "索引状态异常",
      "target_number": 2,
      "total": 93,
      "ratio": 2.2,
      "detail": [
        {
          "id": 295599,
          "name": "INDEX8",
          "table_name": "",
          "type": "INDEX",
          "schema": "DBMGR",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE INDEX \"DBMGR\".\"INDEX8\" ON \"DBMGR\".\"TEST8\" (\"ID1\", \"ID2\", \"ID3\", \"ID4\", \"ID5\", \"ID6\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS \n  STORAGE( INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n  ALTER INDEX \"DBMGR\".\"INDEX8\"  UNUSABLE"}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            }, "INDEX": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": 1,
                  "DEGREE": "1",
                  "STATUS": "UNUSABLE",
                  "NUM_ROWS": 0,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "INDEX8",
                  "INDEX_TYPE": "NORMAL",
                  "UNIQUENESS": "NONUNIQUE",
                  "LEAF_BLOCKS": 0,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": 0,
                  "LAST_ANALYZED": "2020-04-22 20:15",
                  "CLUSTERING_FACTOR": 0
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "COLUMN": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{"DESCEND": "ASC", "INDEX_NAME": "INDEX8", "COLUMN_NAME": "ID1", "COLUMN_POSITION": 1},
                  {"DESCEND": "ASC", "INDEX_NAME": "INDEX8", "COLUMN_NAME": "ID2", "COLUMN_POSITION": 2},
                  {"DESCEND": "ASC", "INDEX_NAME": "INDEX8", "COLUMN_NAME": "ID3", "COLUMN_POSITION": 3},
                  {"DESCEND": "ASC", "INDEX_NAME": "INDEX8", "COLUMN_NAME": "ID4", "COLUMN_POSITION": 4},
                  {"DESCEND": "ASC", "INDEX_NAME": "INDEX8", "COLUMN_NAME": "ID5", "COLUMN_POSITION": 5},
                  {"DESCEND": "ASC", "INDEX_NAME": "INDEX8", "COLUMN_NAME": "ID6", "COLUMN_POSITION": 6}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "DESCEND": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "COLUMN_NAME": "VARCHAR2",
                  "COLUMN_POSITION": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596717885,
          "current_audit_time": 1603083815,
          "rules": ["IDX_INVISIBLE"],
          "score": 80,
          "audit": [{
            "target_id": 295599,
            "id": 479352,
            "name": "IDX_INVISIBLE",
            "risky": "high",
            "description": "索引为invisible或unusable",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295598,
          "name": "IDX11_UN",
          "table_name": "",
          "type": "INDEX",
          "schema": "BOBING",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE INDEX \"BOBING\".\"IDX11_UN\" ON \"BOBING\".\"TEST11\" (\"CREATEDATE\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 INVISIBLE COMPUTE STATISTICS \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\"  "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": 1,
                  "DEGREE": "1",
                  "STATUS": "VALID",
                  "NUM_ROWS": 0,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "IDX11_UN",
                  "INDEX_TYPE": "NORMAL",
                  "UNIQUENESS": "NONUNIQUE",
                  "LEAF_BLOCKS": 0,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": 0,
                  "LAST_ANALYZED": "2020-05-29 22:00",
                  "CLUSTERING_FACTOR": 0
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "COLUMN": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "DESCEND": "ASC",
                  "INDEX_NAME": "IDX11_UN",
                  "COLUMN_NAME": "CREATEDATE",
                  "COLUMN_POSITION": 1
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "DESCEND": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "COLUMN_NAME": "VARCHAR2",
                  "COLUMN_POSITION": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596717880,
          "current_audit_time": 1603083812,
          "rules": ["IDX_INVISIBLE"],
          "score": 80,
          "audit": [{
            "target_id": 295598,
            "id": 479351,
            "name": "IDX_INVISIBLE",
            "risky": "high",
            "description": "索引为invisible或unusable",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295599,
          "name": "INDEX8",
          "table_name": "",
          "type": "INDEX",
          "schema": "DBMGR",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE INDEX \"DBMGR\".\"INDEX8\" ON \"DBMGR\".\"TEST8\" (\"ID1\", \"ID2\", \"ID3\", \"ID4\", \"ID5\", \"ID6\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS \n  STORAGE( INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n  ALTER INDEX \"DBMGR\".\"INDEX8\"  UNUSABLE"}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            }, "INDEX": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": 1,
                  "DEGREE": "1",
                  "STATUS": "UNUSABLE",
                  "NUM_ROWS": 0,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "INDEX8",
                  "INDEX_TYPE": "NORMAL",
                  "UNIQUENESS": "NONUNIQUE",
                  "LEAF_BLOCKS": 0,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": 0,
                  "LAST_ANALYZED": "2020-04-22 20:15",
                  "CLUSTERING_FACTOR": 0
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "COLUMN": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID1",
                  "COLUMN_POSITION": 1
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID2",
                  "COLUMN_POSITION": 2
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID3",
                  "COLUMN_POSITION": 3
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID4",
                  "COLUMN_POSITION": 4
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID5",
                  "COLUMN_POSITION": 5
                }, {"DESCEND": "ASC", "INDEX_NAME": "INDEX8", "COLUMN_NAME": "ID6", "COLUMN_POSITION": 6}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "DESCEND": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "COLUMN_NAME": "VARCHAR2",
                  "COLUMN_POSITION": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596717885,
          "current_audit_time": 1603083815,
          "rules": ["IDX_INVISIBLE"],
          "score": 80,
          "audit": [{
            "target_id": 295599,
            "id": 479352,
            "name": "IDX_INVISIBLE",
            "risky": "high",
            "description": "索引为invisible或unusable",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295598,
          "name": "IDX11_UN",
          "table_name": "",
          "type": "INDEX",
          "schema": "BOBING",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE INDEX \"BOBING\".\"IDX11_UN\" ON \"BOBING\".\"TEST11\" (\"CREATEDATE\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 INVISIBLE COMPUTE STATISTICS \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\"  "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": 1,
                  "DEGREE": "1",
                  "STATUS": "VALID",
                  "NUM_ROWS": 0,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "IDX11_UN",
                  "INDEX_TYPE": "NORMAL",
                  "UNIQUENESS": "NONUNIQUE",
                  "LEAF_BLOCKS": 0,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": 0,
                  "LAST_ANALYZED": "2020-05-29 22:00",
                  "CLUSTERING_FACTOR": 0
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "COLUMN": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "DESCEND": "ASC",
                  "INDEX_NAME": "IDX11_UN",
                  "COLUMN_NAME": "CREATEDATE",
                  "COLUMN_POSITION": 1
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "DESCEND": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "COLUMN_NAME": "VARCHAR2",
                  "COLUMN_POSITION": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596717880,
          "current_audit_time": 1603083812,
          "rules": ["IDX_INVISIBLE"],
          "score": 80,
          "audit": [{
            "target_id": 295598,
            "id": 479351,
            "name": "IDX_INVISIBLE",
            "risky": "high",
            "description": "索引为invisible或unusable",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295599,
          "name": "INDEX8",
          "table_name": "",
          "type": "INDEX",
          "schema": "DBMGR",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE INDEX \"DBMGR\".\"INDEX8\" ON \"DBMGR\".\"TEST8\" (\"ID1\", \"ID2\", \"ID3\", \"ID4\", \"ID5\", \"ID6\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS \n  STORAGE( INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n  ALTER INDEX \"DBMGR\".\"INDEX8\"  UNUSABLE"}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            }, "INDEX": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": 1,
                  "DEGREE": "1",
                  "STATUS": "UNUSABLE",
                  "NUM_ROWS": 0,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "INDEX8",
                  "INDEX_TYPE": "NORMAL",
                  "UNIQUENESS": "NONUNIQUE",
                  "LEAF_BLOCKS": 0,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": 0,
                  "LAST_ANALYZED": "2020-04-22 20:15",
                  "CLUSTERING_FACTOR": 0
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "COLUMN": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID1",
                  "COLUMN_POSITION": 1
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID2",
                  "COLUMN_POSITION": 2
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID3",
                  "COLUMN_POSITION": 3
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID4",
                  "COLUMN_POSITION": 4
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID5",
                  "COLUMN_POSITION": 5
                }, {"DESCEND": "ASC", "INDEX_NAME": "INDEX8", "COLUMN_NAME": "ID6", "COLUMN_POSITION": 6}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "DESCEND": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "COLUMN_NAME": "VARCHAR2",
                  "COLUMN_POSITION": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596717885,
          "current_audit_time": 1603083815,
          "rules": ["IDX_INVISIBLE"],
          "score": 80,
          "audit": [{
            "target_id": 295599,
            "id": 479352,
            "name": "IDX_INVISIBLE",
            "risky": "high",
            "description": "索引为invisible或unusable",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295598,
          "name": "IDX11_UN",
          "table_name": "",
          "type": "INDEX",
          "schema": "BOBING",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE INDEX \"BOBING\".\"IDX11_UN\" ON \"BOBING\".\"TEST11\" (\"CREATEDATE\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 INVISIBLE COMPUTE STATISTICS \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\"  "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": 1,
                  "DEGREE": "1",
                  "STATUS": "VALID",
                  "NUM_ROWS": 0,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "IDX11_UN",
                  "INDEX_TYPE": "NORMAL",
                  "UNIQUENESS": "NONUNIQUE",
                  "LEAF_BLOCKS": 0,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": 0,
                  "LAST_ANALYZED": "2020-05-29 22:00",
                  "CLUSTERING_FACTOR": 0
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "COLUMN": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "DESCEND": "ASC",
                  "INDEX_NAME": "IDX11_UN",
                  "COLUMN_NAME": "CREATEDATE",
                  "COLUMN_POSITION": 1
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "DESCEND": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "COLUMN_NAME": "VARCHAR2",
                  "COLUMN_POSITION": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596717880,
          "current_audit_time": 1603083812,
          "rules": ["IDX_INVISIBLE"],
          "score": 80,
          "audit": [{
            "target_id": 295598,
            "id": 479351,
            "name": "IDX_INVISIBLE",
            "risky": "high",
            "description": "索引为invisible或unusable",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295599,
          "name": "INDEX8",
          "table_name": "",
          "type": "INDEX",
          "schema": "DBMGR",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE INDEX \"DBMGR\".\"INDEX8\" ON \"DBMGR\".\"TEST8\" (\"ID1\", \"ID2\", \"ID3\", \"ID4\", \"ID5\", \"ID6\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS \n  STORAGE( INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n  ALTER INDEX \"DBMGR\".\"INDEX8\"  UNUSABLE"}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            }, "INDEX": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": 1,
                  "DEGREE": "1",
                  "STATUS": "UNUSABLE",
                  "NUM_ROWS": 0,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "INDEX8",
                  "INDEX_TYPE": "NORMAL",
                  "UNIQUENESS": "NONUNIQUE",
                  "LEAF_BLOCKS": 0,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": 0,
                  "LAST_ANALYZED": "2020-04-22 20:15",
                  "CLUSTERING_FACTOR": 0
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "COLUMN": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID1",
                  "COLUMN_POSITION": 1
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID2",
                  "COLUMN_POSITION": 2
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID3",
                  "COLUMN_POSITION": 3
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID4",
                  "COLUMN_POSITION": 4
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID5",
                  "COLUMN_POSITION": 5
                }, {"DESCEND": "ASC", "INDEX_NAME": "INDEX8", "COLUMN_NAME": "ID6", "COLUMN_POSITION": 6}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "DESCEND": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "COLUMN_NAME": "VARCHAR2",
                  "COLUMN_POSITION": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596717885,
          "current_audit_time": 1603083815,
          "rules": ["IDX_INVISIBLE"],
          "score": 80,
          "audit": [{
            "target_id": 295599,
            "id": 479352,
            "name": "IDX_INVISIBLE",
            "risky": "high",
            "description": "索引为invisible或unusable",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295598,
          "name": "IDX11_UN",
          "table_name": "",
          "type": "INDEX",
          "schema": "BOBING",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE INDEX \"BOBING\".\"IDX11_UN\" ON \"BOBING\".\"TEST11\" (\"CREATEDATE\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 INVISIBLE COMPUTE STATISTICS \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\"  "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": 1,
                  "DEGREE": "1",
                  "STATUS": "VALID",
                  "NUM_ROWS": 0,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "IDX11_UN",
                  "INDEX_TYPE": "NORMAL",
                  "UNIQUENESS": "NONUNIQUE",
                  "LEAF_BLOCKS": 0,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": 0,
                  "LAST_ANALYZED": "2020-05-29 22:00",
                  "CLUSTERING_FACTOR": 0
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "COLUMN": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "DESCEND": "ASC",
                  "INDEX_NAME": "IDX11_UN",
                  "COLUMN_NAME": "CREATEDATE",
                  "COLUMN_POSITION": 1
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "DESCEND": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "COLUMN_NAME": "VARCHAR2",
                  "COLUMN_POSITION": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596717880,
          "current_audit_time": 1603083812,
          "rules": ["IDX_INVISIBLE"],
          "score": 80,
          "audit": [{
            "target_id": 295598,
            "id": 479351,
            "name": "IDX_INVISIBLE",
            "risky": "high",
            "description": "索引为invisible或unusable",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295599,
          "name": "INDEX8",
          "table_name": "",
          "type": "INDEX",
          "schema": "DBMGR",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE INDEX \"DBMGR\".\"INDEX8\" ON \"DBMGR\".\"TEST8\" (\"ID1\", \"ID2\", \"ID3\", \"ID4\", \"ID5\", \"ID6\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS \n  STORAGE( INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n  ALTER INDEX \"DBMGR\".\"INDEX8\"  UNUSABLE"}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            }, "INDEX": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": 1,
                  "DEGREE": "1",
                  "STATUS": "UNUSABLE",
                  "NUM_ROWS": 0,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "INDEX8",
                  "INDEX_TYPE": "NORMAL",
                  "UNIQUENESS": "NONUNIQUE",
                  "LEAF_BLOCKS": 0,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": 0,
                  "LAST_ANALYZED": "2020-04-22 20:15",
                  "CLUSTERING_FACTOR": 0
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "COLUMN": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID1",
                  "COLUMN_POSITION": 1
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID2",
                  "COLUMN_POSITION": 2
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID3",
                  "COLUMN_POSITION": 3
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID4",
                  "COLUMN_POSITION": 4
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID5",
                  "COLUMN_POSITION": 5
                }, {"DESCEND": "ASC", "INDEX_NAME": "INDEX8", "COLUMN_NAME": "ID6", "COLUMN_POSITION": 6}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "DESCEND": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "COLUMN_NAME": "VARCHAR2",
                  "COLUMN_POSITION": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596717885,
          "current_audit_time": 1603083815,
          "rules": ["IDX_INVISIBLE"],
          "score": 80,
          "audit": [{
            "target_id": 295599,
            "id": 479352,
            "name": "IDX_INVISIBLE",
            "risky": "high",
            "description": "索引为invisible或unusable",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295598,
          "name": "IDX11_UN",
          "table_name": "",
          "type": "INDEX",
          "schema": "BOBING",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE INDEX \"BOBING\".\"IDX11_UN\" ON \"BOBING\".\"TEST11\" (\"CREATEDATE\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 INVISIBLE COMPUTE STATISTICS \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\"  "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": 1,
                  "DEGREE": "1",
                  "STATUS": "VALID",
                  "NUM_ROWS": 0,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "IDX11_UN",
                  "INDEX_TYPE": "NORMAL",
                  "UNIQUENESS": "NONUNIQUE",
                  "LEAF_BLOCKS": 0,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": 0,
                  "LAST_ANALYZED": "2020-05-29 22:00",
                  "CLUSTERING_FACTOR": 0
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "COLUMN": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "DESCEND": "ASC",
                  "INDEX_NAME": "IDX11_UN",
                  "COLUMN_NAME": "CREATEDATE",
                  "COLUMN_POSITION": 1
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "DESCEND": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "COLUMN_NAME": "VARCHAR2",
                  "COLUMN_POSITION": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596717880,
          "current_audit_time": 1603083812,
          "rules": ["IDX_INVISIBLE"],
          "score": 80,
          "audit": [{
            "target_id": 295598,
            "id": 479351,
            "name": "IDX_INVISIBLE",
            "risky": "high",
            "description": "索引为invisible或unusable",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295599,
          "name": "INDEX8",
          "table_name": "",
          "type": "INDEX",
          "schema": "DBMGR",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE INDEX \"DBMGR\".\"INDEX8\" ON \"DBMGR\".\"TEST8\" (\"ID1\", \"ID2\", \"ID3\", \"ID4\", \"ID5\", \"ID6\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS \n  STORAGE( INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n  ALTER INDEX \"DBMGR\".\"INDEX8\"  UNUSABLE"}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            }, "INDEX": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": 1,
                  "DEGREE": "1",
                  "STATUS": "UNUSABLE",
                  "NUM_ROWS": 0,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "INDEX8",
                  "INDEX_TYPE": "NORMAL",
                  "UNIQUENESS": "NONUNIQUE",
                  "LEAF_BLOCKS": 0,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": 0,
                  "LAST_ANALYZED": "2020-04-22 20:15",
                  "CLUSTERING_FACTOR": 0
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "COLUMN": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID1",
                  "COLUMN_POSITION": 1
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID2",
                  "COLUMN_POSITION": 2
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID3",
                  "COLUMN_POSITION": 3
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID4",
                  "COLUMN_POSITION": 4
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID5",
                  "COLUMN_POSITION": 5
                }, {"DESCEND": "ASC", "INDEX_NAME": "INDEX8", "COLUMN_NAME": "ID6", "COLUMN_POSITION": 6}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "DESCEND": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "COLUMN_NAME": "VARCHAR2",
                  "COLUMN_POSITION": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596717885,
          "current_audit_time": 1603083815,
          "rules": ["IDX_INVISIBLE"],
          "score": 80,
          "audit": [{
            "target_id": 295599,
            "id": 479352,
            "name": "IDX_INVISIBLE",
            "risky": "high",
            "description": "索引为invisible或unusable",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295598,
          "name": "IDX11_UN",
          "table_name": "",
          "type": "INDEX",
          "schema": "BOBING",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE INDEX \"BOBING\".\"IDX11_UN\" ON \"BOBING\".\"TEST11\" (\"CREATEDATE\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 INVISIBLE COMPUTE STATISTICS \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\"  "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": 1,
                  "DEGREE": "1",
                  "STATUS": "VALID",
                  "NUM_ROWS": 0,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "IDX11_UN",
                  "INDEX_TYPE": "NORMAL",
                  "UNIQUENESS": "NONUNIQUE",
                  "LEAF_BLOCKS": 0,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": 0,
                  "LAST_ANALYZED": "2020-05-29 22:00",
                  "CLUSTERING_FACTOR": 0
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "COLUMN": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "DESCEND": "ASC",
                  "INDEX_NAME": "IDX11_UN",
                  "COLUMN_NAME": "CREATEDATE",
                  "COLUMN_POSITION": 1
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "DESCEND": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "COLUMN_NAME": "VARCHAR2",
                  "COLUMN_POSITION": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596717880,
          "current_audit_time": 1603083812,
          "rules": ["IDX_INVISIBLE"],
          "score": 80,
          "audit": [{
            "target_id": 295598,
            "id": 479351,
            "name": "IDX_INVISIBLE",
            "risky": "high",
            "description": "索引为invisible或unusable",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295599,
          "name": "INDEX8",
          "table_name": "",
          "type": "INDEX",
          "schema": "DBMGR",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE INDEX \"DBMGR\".\"INDEX8\" ON \"DBMGR\".\"TEST8\" (\"ID1\", \"ID2\", \"ID3\", \"ID4\", \"ID5\", \"ID6\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS \n  STORAGE( INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n  ALTER INDEX \"DBMGR\".\"INDEX8\"  UNUSABLE"}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            }, "INDEX": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": 1,
                  "DEGREE": "1",
                  "STATUS": "UNUSABLE",
                  "NUM_ROWS": 0,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "INDEX8",
                  "INDEX_TYPE": "NORMAL",
                  "UNIQUENESS": "NONUNIQUE",
                  "LEAF_BLOCKS": 0,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": 0,
                  "LAST_ANALYZED": "2020-04-22 20:15",
                  "CLUSTERING_FACTOR": 0
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "COLUMN": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID1",
                  "COLUMN_POSITION": 1
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID2",
                  "COLUMN_POSITION": 2
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID3",
                  "COLUMN_POSITION": 3
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID4",
                  "COLUMN_POSITION": 4
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID5",
                  "COLUMN_POSITION": 5
                }, {"DESCEND": "ASC", "INDEX_NAME": "INDEX8", "COLUMN_NAME": "ID6", "COLUMN_POSITION": 6}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "DESCEND": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "COLUMN_NAME": "VARCHAR2",
                  "COLUMN_POSITION": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596717885,
          "current_audit_time": 1603083815,
          "rules": ["IDX_INVISIBLE"],
          "score": 80,
          "audit": [{
            "target_id": 295599,
            "id": 479352,
            "name": "IDX_INVISIBLE",
            "risky": "high",
            "description": "索引为invisible或unusable",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295598,
          "name": "IDX11_UN",
          "table_name": "",
          "type": "INDEX",
          "schema": "BOBING",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE INDEX \"BOBING\".\"IDX11_UN\" ON \"BOBING\".\"TEST11\" (\"CREATEDATE\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 INVISIBLE COMPUTE STATISTICS \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\"  "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": 1,
                  "DEGREE": "1",
                  "STATUS": "VALID",
                  "NUM_ROWS": 0,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "IDX11_UN",
                  "INDEX_TYPE": "NORMAL",
                  "UNIQUENESS": "NONUNIQUE",
                  "LEAF_BLOCKS": 0,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": 0,
                  "LAST_ANALYZED": "2020-05-29 22:00",
                  "CLUSTERING_FACTOR": 0
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "COLUMN": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "DESCEND": "ASC",
                  "INDEX_NAME": "IDX11_UN",
                  "COLUMN_NAME": "CREATEDATE",
                  "COLUMN_POSITION": 1
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "DESCEND": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "COLUMN_NAME": "VARCHAR2",
                  "COLUMN_POSITION": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596717880,
          "current_audit_time": 1603083812,
          "rules": ["IDX_INVISIBLE"],
          "score": 80,
          "audit": [{
            "target_id": 295598,
            "id": 479351,
            "name": "IDX_INVISIBLE",
            "risky": "high",
            "description": "索引为invisible或unusable",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295599,
          "name": "INDEX8",
          "table_name": "",
          "type": "INDEX",
          "schema": "DBMGR",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE INDEX \"DBMGR\".\"INDEX8\" ON \"DBMGR\".\"TEST8\" (\"ID1\", \"ID2\", \"ID3\", \"ID4\", \"ID5\", \"ID6\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS \n  STORAGE( INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n  ALTER INDEX \"DBMGR\".\"INDEX8\"  UNUSABLE"}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            }, "INDEX": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": 1,
                  "DEGREE": "1",
                  "STATUS": "UNUSABLE",
                  "NUM_ROWS": 0,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "INDEX8",
                  "INDEX_TYPE": "NORMAL",
                  "UNIQUENESS": "NONUNIQUE",
                  "LEAF_BLOCKS": 0,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": 0,
                  "LAST_ANALYZED": "2020-04-22 20:15",
                  "CLUSTERING_FACTOR": 0
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "COLUMN": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID1",
                  "COLUMN_POSITION": 1
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID2",
                  "COLUMN_POSITION": 2
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID3",
                  "COLUMN_POSITION": 3
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID4",
                  "COLUMN_POSITION": 4
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID5",
                  "COLUMN_POSITION": 5
                }, {"DESCEND": "ASC", "INDEX_NAME": "INDEX8", "COLUMN_NAME": "ID6", "COLUMN_POSITION": 6}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "DESCEND": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "COLUMN_NAME": "VARCHAR2",
                  "COLUMN_POSITION": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596717885,
          "current_audit_time": 1603083815,
          "rules": ["IDX_INVISIBLE"],
          "score": 80,
          "audit": [{
            "target_id": 295599,
            "id": 479352,
            "name": "IDX_INVISIBLE",
            "risky": "high",
            "description": "索引为invisible或unusable",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295598,
          "name": "IDX11_UN",
          "table_name": "",
          "type": "INDEX",
          "schema": "BOBING",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE INDEX \"BOBING\".\"IDX11_UN\" ON \"BOBING\".\"TEST11\" (\"CREATEDATE\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 INVISIBLE COMPUTE STATISTICS \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\"  "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": 1,
                  "DEGREE": "1",
                  "STATUS": "VALID",
                  "NUM_ROWS": 0,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "IDX11_UN",
                  "INDEX_TYPE": "NORMAL",
                  "UNIQUENESS": "NONUNIQUE",
                  "LEAF_BLOCKS": 0,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": 0,
                  "LAST_ANALYZED": "2020-05-29 22:00",
                  "CLUSTERING_FACTOR": 0
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "COLUMN": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "DESCEND": "ASC",
                  "INDEX_NAME": "IDX11_UN",
                  "COLUMN_NAME": "CREATEDATE",
                  "COLUMN_POSITION": 1
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "DESCEND": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "COLUMN_NAME": "VARCHAR2",
                  "COLUMN_POSITION": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596717880,
          "current_audit_time": 1603083812,
          "rules": ["IDX_INVISIBLE"],
          "score": 80,
          "audit": [{
            "target_id": 295598,
            "id": 479351,
            "name": "IDX_INVISIBLE",
            "risky": "high",
            "description": "索引为invisible或unusable",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295599,
          "name": "INDEX8",
          "table_name": "",
          "type": "INDEX",
          "schema": "DBMGR",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE INDEX \"DBMGR\".\"INDEX8\" ON \"DBMGR\".\"TEST8\" (\"ID1\", \"ID2\", \"ID3\", \"ID4\", \"ID5\", \"ID6\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS \n  STORAGE( INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n  ALTER INDEX \"DBMGR\".\"INDEX8\"  UNUSABLE"}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            }, "INDEX": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": 1,
                  "DEGREE": "1",
                  "STATUS": "UNUSABLE",
                  "NUM_ROWS": 0,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "INDEX8",
                  "INDEX_TYPE": "NORMAL",
                  "UNIQUENESS": "NONUNIQUE",
                  "LEAF_BLOCKS": 0,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": 0,
                  "LAST_ANALYZED": "2020-04-22 20:15",
                  "CLUSTERING_FACTOR": 0
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "COLUMN": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID1",
                  "COLUMN_POSITION": 1
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID2",
                  "COLUMN_POSITION": 2
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID3",
                  "COLUMN_POSITION": 3
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID4",
                  "COLUMN_POSITION": 4
                }, {
                  "DESCEND": "ASC",
                  "INDEX_NAME": "INDEX8",
                  "COLUMN_NAME": "ID5",
                  "COLUMN_POSITION": 5
                }, {"DESCEND": "ASC", "INDEX_NAME": "INDEX8", "COLUMN_NAME": "ID6", "COLUMN_POSITION": 6}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "DESCEND": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "COLUMN_NAME": "VARCHAR2",
                  "COLUMN_POSITION": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596717885,
          "current_audit_time": 1603083815,
          "rules": ["IDX_INVISIBLE"],
          "score": 80,
          "audit": [{
            "target_id": 295599,
            "id": 479352,
            "name": "IDX_INVISIBLE",
            "risky": "high",
            "description": "索引为invisible或unusable",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295598,
          "name": "IDX11_UN",
          "table_name": "",
          "type": "INDEX",
          "schema": "BOBING",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE INDEX \"BOBING\".\"IDX11_UN\" ON \"BOBING\".\"TEST11\" (\"CREATEDATE\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 INVISIBLE COMPUTE STATISTICS \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\"  "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": 1,
                  "DEGREE": "1",
                  "STATUS": "VALID",
                  "NUM_ROWS": 0,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "IDX11_UN",
                  "INDEX_TYPE": "NORMAL",
                  "UNIQUENESS": "NONUNIQUE",
                  "LEAF_BLOCKS": 0,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": 0,
                  "LAST_ANALYZED": "2020-05-29 22:00",
                  "CLUSTERING_FACTOR": 0
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "COLUMN": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "DESCEND": "ASC",
                  "INDEX_NAME": "IDX11_UN",
                  "COLUMN_NAME": "CREATEDATE",
                  "COLUMN_POSITION": 1
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "DESCEND": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "COLUMN_NAME": "VARCHAR2",
                  "COLUMN_POSITION": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596717880,
          "current_audit_time": 1603083812,
          "rules": ["IDX_INVISIBLE"],
          "score": 80,
          "audit": [{
            "target_id": 295598,
            "id": 479351,
            "name": "IDX_INVISIBLE",
            "risky": "high",
            "description": "索引为invisible或unusable",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        }
      ]
    },
    {
      "report_id": 9184,
      "name": "IDX_INVALID",
      "description": "索引状态为INVALID",
      "advice": "建议排查修复",
      "risky": "high",
      "audit_type": "OBJECT",
      "cn_name": "索引INVALID",
      "target_number": 1,
      "total": 93,
      "ratio": 1.1, "detail": [{
        "id": 295600,
        "name": "INDEX8",
        "table_name": "TEST8",
        "type": "INDEX",
        "schema": "DBMGR",
        "report_id": 9184,
        "detail": {
          "DDL": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{"DDL": "\n  CREATE INDEX \"DBMGR\".\"INDEX8\" ON \"DBMGR\".\"TEST8\" (\"ID1\", \"ID2\", \"ID3\", \"ID4\", \"ID5\", \"ID6\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS \n  STORAGE( INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n  ALTER INDEX \"DBMGR\".\"INDEX8\"  UNUSABLE"}],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {"DDL": "CLOB"},
              "column_sequence": ["DDL"]
            }
          },
          "INDEX": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "BLEVEL": 1,
                "DEGREE": "1",
                "STATUS": "UNUSABLE",
                "NUM_ROWS": 0,
                "TEMPORARY": "N",
                "INDEX_NAME": "INDEX8",
                "INDEX_TYPE": "NORMAL",
                "UNIQUENESS": "NONUNIQUE",
                "LEAF_BLOCKS": 0,
                "PARTITIONED": "NO",
                "DISTINCT_KEYS": 0,
                "LAST_ANALYZED": "2020-04-22 20:15",
                "CLUSTERING_FACTOR": 0
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "BLEVEL": "NUMBER",
                "DEGREE": "VARCHAR2",
                "STATUS": "VARCHAR2",
                "NUM_ROWS": "NUMBER",
                "TEMPORARY": "VARCHAR2",
                "INDEX_NAME": "VARCHAR2",
                "INDEX_TYPE": "VARCHAR2",
                "UNIQUENESS": "VARCHAR2",
                "LEAF_BLOCKS": "NUMBER",
                "PARTITIONED": "VARCHAR2",
                "DISTINCT_KEYS": "NUMBER",
                "LAST_ANALYZED": "VARCHAR2",
                "CLUSTERING_FACTOR": "NUMBER"
              },
              "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
            }
          },
          "COLUMN": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "DESCEND": "ASC",
                "INDEX_NAME": "INDEX8",
                "COLUMN_NAME": "ID1",
                "COLUMN_POSITION": 1
              }, {
                "DESCEND": "ASC",
                "INDEX_NAME": "INDEX8",
                "COLUMN_NAME": "ID2",
                "COLUMN_POSITION": 2
              }, {
                "DESCEND": "ASC",
                "INDEX_NAME": "INDEX8",
                "COLUMN_NAME": "ID3",
                "COLUMN_POSITION": 3
              }, {
                "DESCEND": "ASC",
                "INDEX_NAME": "INDEX8",
                "COLUMN_NAME": "ID4",
                "COLUMN_POSITION": 4
              }, {
                "DESCEND": "ASC",
                "INDEX_NAME": "INDEX8",
                "COLUMN_NAME": "ID5",
                "COLUMN_POSITION": 5
              }, {"DESCEND": "ASC", "INDEX_NAME": "INDEX8", "COLUMN_NAME": "ID6", "COLUMN_POSITION": 6}],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "DESCEND": "VARCHAR2",
                "INDEX_NAME": "VARCHAR2",
                "COLUMN_NAME": "VARCHAR2",
                "COLUMN_POSITION": "NUMBER"
              },
              "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
            }
          }
        },
        "db_id": 288,
        "first_audit_time": 1596717885,
        "current_audit_time": 1603083818,
        "rules": ["IDX_COL_LOTS", "IDX_INVALID"],
        "score": 70,
        "audit": [{
          "target_id": 295600,
          "id": 479407,
          "name": "IDX_INVALID",
          "risky": "high",
          "description": "索引状态为INVALID",
          "status": "problem"
        }, {
          "target_id": 295600,
          "id": 479353,
          "name": "IDX_COL_LOTS",
          "risky": "middle",
          "description": "索引列过多，索引占用空间增长特别快，性能低",
          "status": "problem"
        }],
        "db_name": "oracle_test_1"
      }]
    },
    {
      "report_id": 9184,
      "name": "IDX_COL_NOT_NULL",
      "description": "索引列缺少非空约束",
      "advice": "设计上尽量回避出现可为null的列",
      "risky": "middle", "audit_type": "OBJECT",
      "cn_name": "索引列无非空约束",
      "target_number": 1,
      "total": 93,
      "ratio": 1.1,
      "detail": [
        {
          "id": 295569,
          "name": "IDX_COL3",
          "table_name": "PART_TAB",
          "type": "INDEX",
          "schema": "ISQLAUDIT",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE INDEX \"ISQLAUDIT\".\"IDX_COL3\" ON \"ISQLAUDIT\".\"PART_TAB\" (\"COL3\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": 3,
                  "DEGREE": "1",
                  "STATUS": "VALID",
                  "NUM_ROWS": 11986361,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "IDX_COL3",
                  "INDEX_TYPE": "NORMAL",
                  "UNIQUENESS": "NONUNIQUE",
                  "LEAF_BLOCKS": 38580,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": 11986361,
                  "LAST_ANALYZED": "2020-06-01 19:38",
                  "CLUSTERING_FACTOR": 2344339
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "COLUMN": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DESCEND": "ASC", "INDEX_NAME": "IDX_COL3", "COLUMN_NAME": "COL3", "COLUMN_POSITION": 1}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "DESCEND": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "COLUMN_NAME": "VARCHAR2",
                  "COLUMN_POSITION": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596782824,
          "current_audit_time": 1603083678,
          "rules": ["IDX_COL_NOT_NULL"],
          "score": 90,
          "audit": [{
            "target_id": 295569,
            "id": 479315,
            "name": "IDX_COL_NOT_NULL",
            "risky": "middle",
            "description": "索引列缺少非空约束",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295569,
          "name": "IDX_COL3",
          "table_name": "PART_TAB",
          "type": "INDEX",
          "schema": "ISQLAUDIT",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE INDEX \"ISQLAUDIT\".\"IDX_COL3\" ON \"ISQLAUDIT\".\"PART_TAB\" (\"COL3\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": 3,
                  "DEGREE": "1",
                  "STATUS": "VALID",
                  "NUM_ROWS": 11986361,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "IDX_COL3",
                  "INDEX_TYPE": "NORMAL",
                  "UNIQUENESS": "NONUNIQUE",
                  "LEAF_BLOCKS": 38580,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": 11986361,
                  "LAST_ANALYZED": "2020-06-01 19:38",
                  "CLUSTERING_FACTOR": 2344339
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "COLUMN": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DESCEND": "ASC", "INDEX_NAME": "IDX_COL3", "COLUMN_NAME": "COL3", "COLUMN_POSITION": 1}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "DESCEND": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "COLUMN_NAME": "VARCHAR2",
                  "COLUMN_POSITION": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596782824,
          "current_audit_time": 1603083678,
          "rules": ["IDX_COL_NOT_NULL"],
          "score": 90,
          "audit": [{
            "target_id": 295569,
            "id": 479315,
            "name": "IDX_COL_NOT_NULL",
            "risky": "middle",
            "description": "索引列缺少非空约束",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295569,
          "name": "IDX_COL3",
          "table_name": "PART_TAB",
          "type": "INDEX",
          "schema": "ISQLAUDIT",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE INDEX \"ISQLAUDIT\".\"IDX_COL3\" ON \"ISQLAUDIT\".\"PART_TAB\" (\"COL3\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": 3,
                  "DEGREE": "1",
                  "STATUS": "VALID",
                  "NUM_ROWS": 11986361,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "IDX_COL3",
                  "INDEX_TYPE": "NORMAL",
                  "UNIQUENESS": "NONUNIQUE",
                  "LEAF_BLOCKS": 38580,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": 11986361,
                  "LAST_ANALYZED": "2020-06-01 19:38",
                  "CLUSTERING_FACTOR": 2344339
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "COLUMN": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DESCEND": "ASC", "INDEX_NAME": "IDX_COL3", "COLUMN_NAME": "COL3", "COLUMN_POSITION": 1}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "DESCEND": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "COLUMN_NAME": "VARCHAR2",
                  "COLUMN_POSITION": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596782824,
          "current_audit_time": 1603083678,
          "rules": ["IDX_COL_NOT_NULL"],
          "score": 90,
          "audit": [{
            "target_id": 295569,
            "id": 479315,
            "name": "IDX_COL_NOT_NULL",
            "risky": "middle",
            "description": "索引列缺少非空约束",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295569,
          "name": "IDX_COL3",
          "table_name": "PART_TAB",
          "type": "INDEX",
          "schema": "ISQLAUDIT",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE INDEX \"ISQLAUDIT\".\"IDX_COL3\" ON \"ISQLAUDIT\".\"PART_TAB\" (\"COL3\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": 3,
                  "DEGREE": "1",
                  "STATUS": "VALID",
                  "NUM_ROWS": 11986361,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "IDX_COL3",
                  "INDEX_TYPE": "NORMAL",
                  "UNIQUENESS": "NONUNIQUE",
                  "LEAF_BLOCKS": 38580,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": 11986361,
                  "LAST_ANALYZED": "2020-06-01 19:38",
                  "CLUSTERING_FACTOR": 2344339
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "COLUMN": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DESCEND": "ASC", "INDEX_NAME": "IDX_COL3", "COLUMN_NAME": "COL3", "COLUMN_POSITION": 1}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "DESCEND": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "COLUMN_NAME": "VARCHAR2",
                  "COLUMN_POSITION": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596782824,
          "current_audit_time": 1603083678,
          "rules": ["IDX_COL_NOT_NULL"],
          "score": 90,
          "audit": [{
            "target_id": 295569,
            "id": 479315,
            "name": "IDX_COL_NOT_NULL",
            "risky": "middle",
            "description": "索引列缺少非空约束",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295569,
          "name": "IDX_COL3",
          "table_name": "PART_TAB",
          "type": "INDEX",
          "schema": "ISQLAUDIT",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE INDEX \"ISQLAUDIT\".\"IDX_COL3\" ON \"ISQLAUDIT\".\"PART_TAB\" (\"COL3\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": 3,
                  "DEGREE": "1",
                  "STATUS": "VALID",
                  "NUM_ROWS": 11986361,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "IDX_COL3",
                  "INDEX_TYPE": "NORMAL",
                  "UNIQUENESS": "NONUNIQUE",
                  "LEAF_BLOCKS": 38580,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": 11986361,
                  "LAST_ANALYZED": "2020-06-01 19:38",
                  "CLUSTERING_FACTOR": 2344339
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "COLUMN": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DESCEND": "ASC", "INDEX_NAME": "IDX_COL3", "COLUMN_NAME": "COL3", "COLUMN_POSITION": 1}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "DESCEND": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "COLUMN_NAME": "VARCHAR2",
                  "COLUMN_POSITION": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596782824,
          "current_audit_time": 1603083678,
          "rules": ["IDX_COL_NOT_NULL"],
          "score": 90,
          "audit": [{
            "target_id": 295569,
            "id": 479315,
            "name": "IDX_COL_NOT_NULL",
            "risky": "middle",
            "description": "索引列缺少非空约束",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295569,
          "name": "IDX_COL3",
          "table_name": "PART_TAB",
          "type": "INDEX",
          "schema": "ISQLAUDIT",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE INDEX \"ISQLAUDIT\".\"IDX_COL3\" ON \"ISQLAUDIT\".\"PART_TAB\" (\"COL3\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": 3,
                  "DEGREE": "1",
                  "STATUS": "VALID",
                  "NUM_ROWS": 11986361,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "IDX_COL3",
                  "INDEX_TYPE": "NORMAL",
                  "UNIQUENESS": "NONUNIQUE",
                  "LEAF_BLOCKS": 38580,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": 11986361,
                  "LAST_ANALYZED": "2020-06-01 19:38",
                  "CLUSTERING_FACTOR": 2344339
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "COLUMN": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DESCEND": "ASC", "INDEX_NAME": "IDX_COL3", "COLUMN_NAME": "COL3", "COLUMN_POSITION": 1}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "DESCEND": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "COLUMN_NAME": "VARCHAR2",
                  "COLUMN_POSITION": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596782824,
          "current_audit_time": 1603083678,
          "rules": ["IDX_COL_NOT_NULL"],
          "score": 90,
          "audit": [{
            "target_id": 295569,
            "id": 479315,
            "name": "IDX_COL_NOT_NULL",
            "risky": "middle",
            "description": "索引列缺少非空约束",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295569,
          "name": "IDX_COL3",
          "table_name": "PART_TAB",
          "type": "INDEX",
          "schema": "ISQLAUDIT",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE INDEX \"ISQLAUDIT\".\"IDX_COL3\" ON \"ISQLAUDIT\".\"PART_TAB\" (\"COL3\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": 3,
                  "DEGREE": "1",
                  "STATUS": "VALID",
                  "NUM_ROWS": 11986361,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "IDX_COL3",
                  "INDEX_TYPE": "NORMAL",
                  "UNIQUENESS": "NONUNIQUE",
                  "LEAF_BLOCKS": 38580,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": 11986361,
                  "LAST_ANALYZED": "2020-06-01 19:38",
                  "CLUSTERING_FACTOR": 2344339
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "COLUMN": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DESCEND": "ASC", "INDEX_NAME": "IDX_COL3", "COLUMN_NAME": "COL3", "COLUMN_POSITION": 1}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "DESCEND": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "COLUMN_NAME": "VARCHAR2",
                  "COLUMN_POSITION": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596782824,
          "current_audit_time": 1603083678,
          "rules": ["IDX_COL_NOT_NULL"],
          "score": 90,
          "audit": [{
            "target_id": 295569,
            "id": 479315,
            "name": "IDX_COL_NOT_NULL",
            "risky": "middle",
            "description": "索引列缺少非空约束",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
      ]
    },
    {
      "report_id": 9184,
      "name": "SEQ_NO_RECOM_NAMING",
      "description": "序列命名需遵循设定规范",
      "advice": "建议遵循最佳实践",
      "risky": "low",
      "audit_type": "OBJECT",
      "cn_name": "序列命名不规范",
      "target_number": 3,
      "total": 93,
      "ratio": 3.2,
      "detail": [
        {
          "id": 295568,
          "name": "SEQ_1",
          "table_name": "",
          "type": "SEQUENCE",
          "schema": "ISQLAUDIT",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n   CREATE SEQUENCE  \"ISQLAUDIT\".\"SEQ_1\"  MINVALUE 1 MAXVALUE 999999999 INCREMENT BY 1 START WITH 1061 CACHE 20 NOORDER  NOCYCLE "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596782834,
          "current_audit_time": 1603083665,
          "rules": ["SEQ_NO_RECOM_NAMING", "SEQ_CACHESIZE"],
          "score": 85,
          "audit": [{
            "target_id": 295568,
            "id": 479314,
            "name": "SEQ_CACHESIZE",
            "risky": "middle",
            "description": "序列CACHESIZE过小，cache值较小，内存中预先缓存的cache值很快被耗尽，再次取值时需要修改数据字典信息，在此期间，会持有SQ锁。",
            "status": "problem"
          }, {
            "target_id": 295568,
            "id": 479311,
            "name": "SEQ_NO_RECOM_NAMING",
            "risky": "low",
            "description": "序列命名需遵循设定规范",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295567,
          "name": "SEQ36_2",
          "table_name": "",
          "type": "SEQUENCE",
          "schema": "DBMGR",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n   CREATE SEQUENCE  \"DBMGR\".\"SEQ36_2\"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596717952,
          "current_audit_time": 1603083663,
          "rules": ["SEQ_NO_RECOM_NAMING", "SEQ_CACHESIZE"],
          "score": 85,
          "audit": [{
            "target_id": 295567,
            "id": 479313,
            "name": "SEQ_CACHESIZE",
            "risky": "middle",
            "description": "序列CACHESIZE过小，cache值较小，内存中预先缓存的cache值很快被耗尽，再次取值时需要修改数据字典信息，在此期间，会持有SQ锁。",
            "status": "problem"
          }, {
            "target_id": 295567,
            "id": 479310,
            "name": "SEQ_NO_RECOM_NAMING",
            "risky": "low",
            "description": "序列命名需遵循设定规范",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295566,
          "name": "SEQ36_1",
          "table_name": "",
          "type": "SEQUENCE",
          "schema": "DBMGR",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n   CREATE SEQUENCE  \"DBMGR\".\"SEQ36_1\"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 ORDER  NOCYCLE "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596717943,
          "current_audit_time": 1603083661,
          "rules": ["SEQ_NO_RECOM_NAMING", "SEQ_CACHESIZE", "SEQ_ORDER"],
          "score": 80,
          "audit": [{
            "target_id": 295566,
            "id": 479312,
            "name": "SEQ_CACHESIZE",
            "risky": "middle",
            "description": "序列CACHESIZE过小，cache值较小，内存中预先缓存的cache值很快被耗尽，再次取值时需要修改数据字典信息，在此期间，会持有SQ锁。",
            "status": "problem"
          }, {
            "target_id": 295566,
            "id": 479363,
            "name": "SEQ_ORDER",
            "risky": "low",
            "description": "数据库中存在ORDERED的序列",
            "status": "problem"
          }, {
            "target_id": 295566,
            "id": 479309,
            "name": "SEQ_NO_RECOM_NAMING",
            "risky": "low",
            "description": "序列命名需遵循设定规范",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295566,
          "name": "SEQ36_1",
          "table_name": "",
          "type": "SEQUENCE",
          "schema": "DBMGR",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n   CREATE SEQUENCE  \"DBMGR\".\"SEQ36_1\"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 ORDER  NOCYCLE "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596717943,
          "current_audit_time": 1603083661,
          "rules": ["SEQ_NO_RECOM_NAMING", "SEQ_CACHESIZE", "SEQ_ORDER"],
          "score": 80,
          "audit": [{
            "target_id": 295566,
            "id": 479312,
            "name": "SEQ_CACHESIZE",
            "risky": "middle",
            "description": "序列CACHESIZE过小，cache值较小，内存中预先缓存的cache值很快被耗尽，再次取值时需要修改数据字典信息，在此期间，会持有SQ锁。",
            "status": "problem"
          }, {
            "target_id": 295566,
            "id": 479363,
            "name": "SEQ_ORDER",
            "risky": "low",
            "description": "数据库中存在ORDERED的序列",
            "status": "problem"
          }, {
            "target_id": 295566,
            "id": 479309,
            "name": "SEQ_NO_RECOM_NAMING",
            "risky": "low",
            "description": "序列命名需遵循设定规范",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295566,
          "name": "SEQ36_1",
          "table_name": "",
          "type": "SEQUENCE",
          "schema": "DBMGR",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n   CREATE SEQUENCE  \"DBMGR\".\"SEQ36_1\"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 ORDER  NOCYCLE "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596717943,
          "current_audit_time": 1603083661,
          "rules": ["SEQ_NO_RECOM_NAMING", "SEQ_CACHESIZE", "SEQ_ORDER"],
          "score": 80,
          "audit": [{
            "target_id": 295566,
            "id": 479312,
            "name": "SEQ_CACHESIZE",
            "risky": "middle",
            "description": "序列CACHESIZE过小，cache值较小，内存中预先缓存的cache值很快被耗尽，再次取值时需要修改数据字典信息，在此期间，会持有SQ锁。",
            "status": "problem"
          }, {
            "target_id": 295566,
            "id": 479363,
            "name": "SEQ_ORDER",
            "risky": "low",
            "description": "数据库中存在ORDERED的序列",
            "status": "problem"
          }, {
            "target_id": 295566,
            "id": 479309,
            "name": "SEQ_NO_RECOM_NAMING",
            "risky": "low",
            "description": "序列命名需遵循设定规范",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295566,
          "name": "SEQ36_1",
          "table_name": "",
          "type": "SEQUENCE",
          "schema": "DBMGR",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n   CREATE SEQUENCE  \"DBMGR\".\"SEQ36_1\"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 ORDER  NOCYCLE "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596717943,
          "current_audit_time": 1603083661,
          "rules": ["SEQ_NO_RECOM_NAMING", "SEQ_CACHESIZE", "SEQ_ORDER"],
          "score": 80,
          "audit": [{
            "target_id": 295566,
            "id": 479312,
            "name": "SEQ_CACHESIZE",
            "risky": "middle",
            "description": "序列CACHESIZE过小，cache值较小，内存中预先缓存的cache值很快被耗尽，再次取值时需要修改数据字典信息，在此期间，会持有SQ锁。",
            "status": "problem"
          }, {
            "target_id": 295566,
            "id": 479363,
            "name": "SEQ_ORDER",
            "risky": "low",
            "description": "数据库中存在ORDERED的序列",
            "status": "problem"
          }, {
            "target_id": 295566,
            "id": 479309,
            "name": "SEQ_NO_RECOM_NAMING",
            "risky": "low",
            "description": "序列命名需遵循设定规范",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 295566,
          "name": "SEQ36_1",
          "table_name": "",
          "type": "SEQUENCE",
          "schema": "DBMGR",
          "report_id": 9184,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n   CREATE SEQUENCE  \"DBMGR\".\"SEQ36_1\"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 ORDER  NOCYCLE "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1596717943,
          "current_audit_time": 1603083661,
          "rules": ["SEQ_NO_RECOM_NAMING", "SEQ_CACHESIZE", "SEQ_ORDER"],
          "score": 80,
          "audit": [{
            "target_id": 295566,
            "id": 479312,
            "name": "SEQ_CACHESIZE",
            "risky": "middle",
            "description": "序列CACHESIZE过小，cache值较小，内存中预先缓存的cache值很快被耗尽，再次取值时需要修改数据字典信息，在此期间，会持有SQ锁。",
            "status": "problem"
          }, {
            "target_id": 295566,
            "id": 479363,
            "name": "SEQ_ORDER",
            "risky": "low",
            "description": "数据库中存在ORDERED的序列",
            "status": "problem"
          }, {
            "target_id": 295566,
            "id": 479309,
            "name": "SEQ_NO_RECOM_NAMING",
            "risky": "low",
            "description": "序列命名需遵循设定规范",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
      ]
    },
  ],
  report_high: [
    {
      "report_id": 12215,
      "name": "存在隐式类型转换",
      "description": "抓取执行过的SQL执行计划，谓词过滤中出现关键字\"INTERNAL_FUNCTION\"，\"SYS_OP\"，以及部分情况下的TO_NUMBER",
      "advice": "查询列索引失效",
      "risky": "high",
      "audit_type": "SQL",
      "cn_name": "存在隐式类型转换",
      "target_number": 2,
      "total": 5,
      "ratio": 40,
      "detail": [{
        "id": 219628,
        "name": "INDEX8",
        "table_name": "TEST8",
        "type": "INDEX",
        "schema": "DBMGR",
        "report_id": 6376,
        "detail": {
          "DDL": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{"DDL": "\n  CREATE INDEX \"DBMGR\".\"INDEX8\" ON \"DBMGR\".\"TEST8\" (\"ID1\", \"ID2\", \"ID3\", \"ID4\", \"ID5\", \"ID6\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS \n  STORAGE( INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n  ALTER INDEX \"DBMGR\".\"INDEX8\"  UNUSABLE"}],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {"DDL": "CLOB"},
              "column_sequence": ["DDL"]
            }
          },
          "INDEX": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "BLEVEL": 1,
                "DEGREE": "1",
                "STATUS": "UNUSABLE",
                "NUM_ROWS": 0,
                "TEMPORARY": "N",
                "INDEX_NAME": "INDEX8",
                "INDEX_TYPE": "NORMAL",
                "UNIQUENESS": "NONUNIQUE",
                "LEAF_BLOCKS": 0,
                "PARTITIONED": "NO",
                "DISTINCT_KEYS": 0,
                "LAST_ANALYZED": "2020-04-22 20:15",
                "CLUSTERING_FACTOR": 0
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "BLEVEL": "NUMBER",
                "DEGREE": "VARCHAR2",
                "STATUS": "VARCHAR2",
                "NUM_ROWS": "NUMBER",
                "TEMPORARY": "VARCHAR2",
                "INDEX_NAME": "VARCHAR2",
                "INDEX_TYPE": "VARCHAR2",
                "UNIQUENESS": "VARCHAR2",
                "LEAF_BLOCKS": "NUMBER",
                "PARTITIONED": "VARCHAR2",
                "DISTINCT_KEYS": "NUMBER",
                "LAST_ANALYZED": "VARCHAR2",
                "CLUSTERING_FACTOR": "NUMBER"
              },
              "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
            }
          },
          "COLUMN": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "DESCEND": "ASC",
                "INDEX_NAME": "INDEX8",
                "COLUMN_NAME": "ID1",
                "COLUMN_POSITION": 1
              }, {
                "DESCEND": "ASC",
                "INDEX_NAME": "INDEX8",
                "COLUMN_NAME": "ID2",
                "COLUMN_POSITION": 2
              }, {
                "DESCEND": "ASC",
                "INDEX_NAME": "INDEX8",
                "COLUMN_NAME": "ID3",
                "COLUMN_POSITION": 3
              }, {
                "DESCEND": "ASC",
                "INDEX_NAME": "INDEX8",
                "COLUMN_NAME": "ID4",
                "COLUMN_POSITION": 4
              }, {
                "DESCEND": "ASC",
                "INDEX_NAME": "INDEX8",
                "COLUMN_NAME": "ID5",
                "COLUMN_POSITION": 5
              }, {"DESCEND": "ASC", "INDEX_NAME": "INDEX8", "COLUMN_NAME": "ID6", "COLUMN_POSITION": 6}],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "DESCEND": "VARCHAR2",
                "INDEX_NAME": "VARCHAR2",
                "COLUMN_NAME": "VARCHAR2",
                "COLUMN_POSITION": "NUMBER"
              },
              "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
            }
          }
        },
        "db_id": 288,
        "first_audit_time": 1596717885,
        "current_audit_time": 1601357232,
        "rules": ["IDX_COL_LOTS", "IDX_NO_RECM_NAMING", "IDX_INVALID"],
        "score": 65,
        "implement_advice": "",
        "audit": [{
          "target_id": 219628,
          "id": 368546,
          "name": "索引INVALID",
          "risky": "high",
          "description": "索引状态为INVALID",
          "status": "problem"
        }, {
          "target_id": 219628,
          "id": 360772,
          "name": "索引列过多",
          "risky": "middle",
          "description": "索引列过多，索引占用空间增长特别快，性能低",
          "status": "problem"
        }, {
          "target_id": 219628,
          "id": 364575,
          "name": "索引命名不规范",
          "risky": "low",
          "description": "索引命名不符合既定规范",
          "status": "problem"
        }],
        "db_name": "oracle_test_1"
      }],
    }, {
      "report_id": 12215,
      "name": "索引状态异常",
      "description": "索引为invisible或unusable",
      "advice": "关注索引是否有必要调整",
      "risky": "high",
      "audit_type": "OBJECT",
      "cn_name": "索引状态异常",
      "target_number": 1,
      "total": 1,
      "ratio": 100,
      "detail": [{
        "id": 219627,
        "name": "INDEX8",
        "table_name": "",
        "type": "INDEX",
        "schema": "DBMGR",
        "report_id": 6376,
        "detail": {
          "DDL": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{"DDL": "\n  CREATE INDEX \"DBMGR\".\"INDEX8\" ON \"DBMGR\".\"TEST8\" (\"ID1\", \"ID2\", \"ID3\", \"ID4\", \"ID5\", \"ID6\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS \n  STORAGE( INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n  ALTER INDEX \"DBMGR\".\"INDEX8\"  UNUSABLE"}],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {"DDL": "CLOB"},
              "column_sequence": ["DDL"]
            }
          },
          "INDEX": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "BLEVEL": 1,
                "DEGREE": "1",
                "STATUS": "UNUSABLE",
                "NUM_ROWS": 0,
                "TEMPORARY": "N",
                "INDEX_NAME": "INDEX8",
                "INDEX_TYPE": "NORMAL",
                "UNIQUENESS": "NONUNIQUE",
                "LEAF_BLOCKS": 0,
                "PARTITIONED": "NO",
                "DISTINCT_KEYS": 0,
                "LAST_ANALYZED": "2020-04-22 20:15",
                "CLUSTERING_FACTOR": 0
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "BLEVEL": "NUMBER",
                "DEGREE": "VARCHAR2",
                "STATUS": "VARCHAR2",
                "NUM_ROWS": "NUMBER",
                "TEMPORARY": "VARCHAR2",
                "INDEX_NAME": "VARCHAR2",
                "INDEX_TYPE": "VARCHAR2",
                "UNIQUENESS": "VARCHAR2",
                "LEAF_BLOCKS": "NUMBER",
                "PARTITIONED": "VARCHAR2",
                "DISTINCT_KEYS": "NUMBER",
                "LAST_ANALYZED": "VARCHAR2",
                "CLUSTERING_FACTOR": "NUMBER"
              },
              "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
            }
          },
          "COLUMN": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "DESCEND": "ASC",
                "INDEX_NAME": "INDEX8",
                "COLUMN_NAME": "ID1",
                "COLUMN_POSITION": 1
              }, {
                "DESCEND": "ASC",
                "INDEX_NAME": "INDEX8",
                "COLUMN_NAME": "ID2",
                "COLUMN_POSITION": 2
              }, {
                "DESCEND": "ASC",
                "INDEX_NAME": "INDEX8",
                "COLUMN_NAME": "ID3",
                "COLUMN_POSITION": 3
              }, {
                "DESCEND": "ASC",
                "INDEX_NAME": "INDEX8",
                "COLUMN_NAME": "ID4",
                "COLUMN_POSITION": 4
              }, {
                "DESCEND": "ASC",
                "INDEX_NAME": "INDEX8",
                "COLUMN_NAME": "ID5",
                "COLUMN_POSITION": 5
              }, {"DESCEND": "ASC", "INDEX_NAME": "INDEX8", "COLUMN_NAME": "ID6", "COLUMN_POSITION": 6}],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "DESCEND": "VARCHAR2",
                "INDEX_NAME": "VARCHAR2",
                "COLUMN_NAME": "VARCHAR2",
                "COLUMN_POSITION": "NUMBER"
              },
              "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
            }
          }
        },
        "db_id": 288,
        "first_audit_time": 1596717885,
        "current_audit_time": 1601357231,
        "rules": ["IDX_INVISIBLE"],
        "score": 80,
        "implement_advice": "",
        "audit": [{
          "target_id": 219627,
          "id": 360770,
          "name": "索引状态异常",
          "risky": "high",
          "description": "索引为invisible或unusable",
          "status": "problem"
        }],
        "db_name": "oracle_test_1"
      }, {
        "id": 219624,
        "name": "IDX11_UN",
        "table_name": "",
        "type": "INDEX",
        "schema": "BOBING",
        "report_id": 6376,
        "detail": {
          "DDL": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{"DDL": "\n  CREATE INDEX \"BOBING\".\"IDX11_UN\" ON \"BOBING\".\"TEST11\" (\"CREATEDATE\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 INVISIBLE COMPUTE STATISTICS \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\"  "}],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {"DDL": "CLOB"},
              "column_sequence": ["DDL"]
            }
          },
          "INDEX": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "BLEVEL": 1,
                "DEGREE": "1",
                "STATUS": "VALID",
                "NUM_ROWS": 0,
                "TEMPORARY": "N",
                "INDEX_NAME": "IDX11_UN",
                "INDEX_TYPE": "NORMAL",
                "UNIQUENESS": "NONUNIQUE",
                "LEAF_BLOCKS": 0,
                "PARTITIONED": "NO",
                "DISTINCT_KEYS": 0,
                "LAST_ANALYZED": "2020-05-29 22:00",
                "CLUSTERING_FACTOR": 0
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "BLEVEL": "NUMBER",
                "DEGREE": "VARCHAR2",
                "STATUS": "VARCHAR2",
                "NUM_ROWS": "NUMBER",
                "TEMPORARY": "VARCHAR2",
                "INDEX_NAME": "VARCHAR2",
                "INDEX_TYPE": "VARCHAR2",
                "UNIQUENESS": "VARCHAR2",
                "LEAF_BLOCKS": "NUMBER",
                "PARTITIONED": "VARCHAR2",
                "DISTINCT_KEYS": "NUMBER",
                "LAST_ANALYZED": "VARCHAR2",
                "CLUSTERING_FACTOR": "NUMBER"
              },
              "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
            }
          },
          "COLUMN": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{"DESCEND": "ASC", "INDEX_NAME": "IDX11_UN", "COLUMN_NAME": "CREATEDATE", "COLUMN_POSITION": 1}],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "DESCEND": "VARCHAR2",
                "INDEX_NAME": "VARCHAR2",
                "COLUMN_NAME": "VARCHAR2",
                "COLUMN_POSITION": "NUMBER"
              },
              "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
            }
          }
        },
        "db_id": 288,
        "first_audit_time": 1596717880,
        "current_audit_time": 1601357230,
        "rules": ["IDX_INVISIBLE"],
        "score": 80,
        "implement_advice": "",
        "audit": [{
          "target_id": 219624,
          "id": 360768,
          "name": "索引状态异常",
          "risky": "high",
          "description": "索引为invisible或unusable",
          "status": "problem"
        }],
        "db_name": "oracle_test_1"
      }],
    }],
  report_middle: [
    {
      "report_id": 6376,
      "name": "索引列过多",
      "description": "索引列过多，索引占用空间增长特别快，性能低",
      "advice": "设计上尽量回避",
      "risky": "middle",
      "audit_type": "OBJECT",
      "cn_name": "索引列过多",
      "target_number": 1,
      "total": 5048,
      "ratio": 0,
      "detail": [{
        "id": 219628,
        "name": "INDEX8",
        "table_name": "TEST8",
        "type": "INDEX",
        "schema": "DBMGR",
        "report_id": 6376,
        "detail": {
          "DDL": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{"DDL": "\n  CREATE INDEX \"DBMGR\".\"INDEX8\" ON \"DBMGR\".\"TEST8\" (\"ID1\", \"ID2\", \"ID3\", \"ID4\", \"ID5\", \"ID6\") \n  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS \n  STORAGE( INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n  ALTER INDEX \"DBMGR\".\"INDEX8\"  UNUSABLE"}],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {"DDL": "CLOB"},
              "column_sequence": ["DDL"]
            }
          },
          "INDEX": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "BLEVEL": 1,
                "DEGREE": "1",
                "STATUS": "UNUSABLE",
                "NUM_ROWS": 0,
                "TEMPORARY": "N",
                "INDEX_NAME": "INDEX8",
                "INDEX_TYPE": "NORMAL",
                "UNIQUENESS": "NONUNIQUE",
                "LEAF_BLOCKS": 0,
                "PARTITIONED": "NO",
                "DISTINCT_KEYS": 0,
                "LAST_ANALYZED": "2020-04-22 20:15",
                "CLUSTERING_FACTOR": 0
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "BLEVEL": "NUMBER",
                "DEGREE": "VARCHAR2",
                "STATUS": "VARCHAR2",
                "NUM_ROWS": "NUMBER",
                "TEMPORARY": "VARCHAR2",
                "INDEX_NAME": "VARCHAR2",
                "INDEX_TYPE": "VARCHAR2",
                "UNIQUENESS": "VARCHAR2",
                "LEAF_BLOCKS": "NUMBER",
                "PARTITIONED": "VARCHAR2",
                "DISTINCT_KEYS": "NUMBER",
                "LAST_ANALYZED": "VARCHAR2",
                "CLUSTERING_FACTOR": "NUMBER"
              },
              "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
            }
          },
          "COLUMN": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "DESCEND": "ASC",
                "INDEX_NAME": "INDEX8",
                "COLUMN_NAME": "ID1",
                "COLUMN_POSITION": 1
              }, {
                "DESCEND": "ASC",
                "INDEX_NAME": "INDEX8",
                "COLUMN_NAME": "ID2",
                "COLUMN_POSITION": 2
              }, {
                "DESCEND": "ASC",
                "INDEX_NAME": "INDEX8",
                "COLUMN_NAME": "ID3",
                "COLUMN_POSITION": 3
              }, {
                "DESCEND": "ASC",
                "INDEX_NAME": "INDEX8",
                "COLUMN_NAME": "ID4",
                "COLUMN_POSITION": 4
              }, {
                "DESCEND": "ASC",
                "INDEX_NAME": "INDEX8",
                "COLUMN_NAME": "ID5",
                "COLUMN_POSITION": 5
              }, {"DESCEND": "ASC", "INDEX_NAME": "INDEX8", "COLUMN_NAME": "ID6", "COLUMN_POSITION": 6}],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "DESCEND": "VARCHAR2",
                "INDEX_NAME": "VARCHAR2",
                "COLUMN_NAME": "VARCHAR2",
                "COLUMN_POSITION": "NUMBER"
              },
              "column_sequence": ["INDEX_NAME", "COLUMN_POSITION", "COLUMN_NAME", "DESCEND"]
            }
          }
        },
        "db_id": 288,
        "first_audit_time": 1596717885,
        "current_audit_time": 1601357232,
        "rules": ["IDX_COL_LOTS", "IDX_NO_RECM_NAMING", "IDX_INVALID"],
        "score": 65,
        "implement_advice": "",
        "audit": [{
          "target_id": 219628,
          "id": 368546,
          "name": "索引INVALID",
          "risky": "high",
          "description": "索引状态为INVALID",
          "status": "problem"
        }, {
          "target_id": 219628,
          "id": 360772,
          "name": "索引列过多",
          "risky": "middle",
          "description": "索引列过多，索引占用空间增长特别快，性能低",
          "status": "problem"
        }, {
          "target_id": 219628,
          "id": 364575,
          "name": "索引命名不规范",
          "risky": "low",
          "description": "索引命名不符合既定规范",
          "status": "problem"
        }],
        "db_name": "oracle_test_1"
      }],
    },
    {
      "report_id": 6376,
      "name": "表没有日期字段",
      "description": "表没有date或timestamp类型的字段",
      "advice": "添加时间字段(比如插入、更新的时间戳)",
      "risky": "middle",
      "audit_type": "OBJECT",
      "cn_name": "表没有日期字段",
      "target_number": 869,
      "total": 5048,
      "ratio": 17.2,
      "detail": [
        {
          "id": 222316,
          "name": "TEST2534",
          "table_name": "TEST2534",
          "type": "TABLE",
          "schema": "TEST",
          "report_id": 6376,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE TABLE \"TEST\".\"TEST2534\" \n   (\t\"A\" NUMBER(*,0), \n\t\"B\" VARCHAR2(2000), \n\t\"C\" BLOB, \n\t\"D\" LONG\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n LOB (\"C\") STORE AS BASICFILE (\n  TABLESPACE \"USERS\" ENABLE STORAGE IN ROW CHUNK 8192 RETENTION \n  NOCACHE LOGGING \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)) "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": null,
                  "DEGREE": "0",
                  "STATUS": "VALID",
                  "NUM_ROWS": null,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "SYS_IL0000027017C00003$$",
                  "INDEX_TYPE": "LOB",
                  "UNIQUENESS": "UNIQUE",
                  "LEAF_BLOCKS": null,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": null,
                  "LAST_ANALYZED": null,
                  "CLUSTERING_FACTOR": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "TABLE": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "OWNER": "TEST",
                  "BLOCKS": 0,
                  "DEGREE": "         1",
                  "NUM_ROWS": 0,
                  "TABLE_NAME": "TEST2534",
                  "AVG_ROW_LEN": 0,
                  "SAMPLE_SIZE": 0,
                  "GLOBAL_STATS": "YES",
                  "LAST_ANALYZED": "2020-06-24 22:01",
                  "TABLESPACE_NAME": "USERS"
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "OWNER": "VARCHAR2",
                  "BLOCKS": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TABLE_NAME": "VARCHAR2",
                  "AVG_ROW_LEN": "NUMBER",
                  "SAMPLE_SIZE": "NUMBER",
                  "GLOBAL_STATS": "VARCHAR2",
                  "LAST_ANALYZED": "VARCHAR2",
                  "TABLESPACE_NAME": "VARCHAR2"
                },
                "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
              }
            },
            "COLUMN": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "NULLABLE": "Y",
                  "COLUMN_ID": 1,
                  "DATA_TYPE": "NUMBER(,0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "A",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 2,
                  "DATA_TYPE": "VARCHAR2(2000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "B",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 3,
                  "DATA_TYPE": "BLOB(4000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "C",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 4,
                  "DATA_TYPE": "LONG(0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": null,
                  "COLUMN_NAME": "D",
                  "NUM_BUCKETS": null,
                  "NUM_DISTINCT": null,
                  "LAST_ANALYZED": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "NULLABLE": "VARCHAR2",
                  "COLUMN_ID": "NUMBER",
                  "DATA_TYPE": "VARCHAR2",
                  "HISTOGRAM": "VARCHAR2",
                  "NUM_NULLS": "NUMBER",
                  "COLUMN_NAME": "VARCHAR2",
                  "NUM_BUCKETS": "NUMBER",
                  "NUM_DISTINCT": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2"
                },
                "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1600925828,
          "current_audit_time": 1601358389,
          "rules": ["TAB_NO_TIMESTAMP"],
          "score": 90,
          "implement_advice": "",
          "audit": [{
            "target_id": 222316,
            "id": 364530,
            "name": "表没有日期字段",
            "risky": "middle",
            "description": "表没有date或timestamp类型的字段",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 222315,
          "name": "TEST2523",
          "table_name": "TEST2523",
          "type": "TABLE",
          "schema": "TEST",
          "report_id": 6376,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE TABLE \"TEST\".\"TEST2523\" \n   (\t\"A\" NUMBER(*,0), \n\t\"B\" VARCHAR2(2000), \n\t\"C\" BLOB, \n\t\"D\" LONG\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n LOB (\"C\") STORE AS BASICFILE (\n  TABLESPACE \"USERS\" ENABLE STORAGE IN ROW CHUNK 8192 RETENTION \n  NOCACHE LOGGING \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)) "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": null,
                  "DEGREE": "0",
                  "STATUS": "VALID",
                  "NUM_ROWS": null,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "SYS_IL0000026984C00003$$",
                  "INDEX_TYPE": "LOB",
                  "UNIQUENESS": "UNIQUE",
                  "LEAF_BLOCKS": null,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": null,
                  "LAST_ANALYZED": null,
                  "CLUSTERING_FACTOR": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "TABLE": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "OWNER": "TEST",
                  "BLOCKS": 0,
                  "DEGREE": "         1",
                  "NUM_ROWS": 0,
                  "TABLE_NAME": "TEST2523",
                  "AVG_ROW_LEN": 0,
                  "SAMPLE_SIZE": 0,
                  "GLOBAL_STATS": "YES",
                  "LAST_ANALYZED": "2020-06-24 22:01",
                  "TABLESPACE_NAME": "USERS"
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "OWNER": "VARCHAR2",
                  "BLOCKS": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TABLE_NAME": "VARCHAR2",
                  "AVG_ROW_LEN": "NUMBER",
                  "SAMPLE_SIZE": "NUMBER",
                  "GLOBAL_STATS": "VARCHAR2",
                  "LAST_ANALYZED": "VARCHAR2",
                  "TABLESPACE_NAME": "VARCHAR2"
                },
                "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
              }
            },
            "COLUMN": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "NULLABLE": "Y",
                  "COLUMN_ID": 1,
                  "DATA_TYPE": "NUMBER(,0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "A",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 2,
                  "DATA_TYPE": "VARCHAR2(2000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "B",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 3,
                  "DATA_TYPE": "BLOB(4000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "C",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 4,
                  "DATA_TYPE": "LONG(0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": null,
                  "COLUMN_NAME": "D",
                  "NUM_BUCKETS": null,
                  "NUM_DISTINCT": null,
                  "LAST_ANALYZED": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "NULLABLE": "VARCHAR2",
                  "COLUMN_ID": "NUMBER",
                  "DATA_TYPE": "VARCHAR2",
                  "HISTOGRAM": "VARCHAR2",
                  "NUM_NULLS": "NUMBER",
                  "COLUMN_NAME": "VARCHAR2",
                  "NUM_BUCKETS": "NUMBER",
                  "NUM_DISTINCT": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2"
                },
                "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1600925827,
          "current_audit_time": 1601358387,
          "rules": ["TAB_NO_TIMESTAMP"],
          "score": 90,
          "implement_advice": "",
          "audit": [{
            "target_id": 222315,
            "id": 364529,
            "name": "表没有日期字段",
            "risky": "middle",
            "description": "表没有date或timestamp类型的字段",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 222313,
          "name": "TEST2509",
          "table_name": "TEST2509",
          "type": "TABLE",
          "schema": "TEST",
          "report_id": 6376,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE TABLE \"TEST\".\"TEST2509\" \n   (\t\"A\" NUMBER(*,0), \n\t\"B\" VARCHAR2(2000), \n\t\"C\" BLOB, \n\t\"D\" LONG\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n LOB (\"C\") STORE AS BASICFILE (\n  TABLESPACE \"USERS\" ENABLE STORAGE IN ROW CHUNK 8192 RETENTION \n  NOCACHE LOGGING \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)) "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": null,
                  "DEGREE": "0",
                  "STATUS": "VALID",
                  "NUM_ROWS": null,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "SYS_IL0000026942C00003$$",
                  "INDEX_TYPE": "LOB",
                  "UNIQUENESS": "UNIQUE",
                  "LEAF_BLOCKS": null,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": null,
                  "LAST_ANALYZED": null,
                  "CLUSTERING_FACTOR": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "TABLE": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "OWNER": "TEST",
                  "BLOCKS": 0,
                  "DEGREE": "         1",
                  "NUM_ROWS": 0,
                  "TABLE_NAME": "TEST2509",
                  "AVG_ROW_LEN": 0,
                  "SAMPLE_SIZE": 0,
                  "GLOBAL_STATS": "YES",
                  "LAST_ANALYZED": "2020-06-24 22:01",
                  "TABLESPACE_NAME": "USERS"
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "OWNER": "VARCHAR2",
                  "BLOCKS": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TABLE_NAME": "VARCHAR2",
                  "AVG_ROW_LEN": "NUMBER",
                  "SAMPLE_SIZE": "NUMBER",
                  "GLOBAL_STATS": "VARCHAR2",
                  "LAST_ANALYZED": "VARCHAR2",
                  "TABLESPACE_NAME": "VARCHAR2"
                },
                "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
              }
            },
            "COLUMN": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "NULLABLE": "Y",
                  "COLUMN_ID": 1,
                  "DATA_TYPE": "NUMBER(,0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "A",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 2,
                  "DATA_TYPE": "VARCHAR2(2000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "B",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 3,
                  "DATA_TYPE": "BLOB(4000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "C",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 4,
                  "DATA_TYPE": "LONG(0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": null,
                  "COLUMN_NAME": "D",
                  "NUM_BUCKETS": null,
                  "NUM_DISTINCT": null,
                  "LAST_ANALYZED": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "NULLABLE": "VARCHAR2",
                  "COLUMN_ID": "NUMBER",
                  "DATA_TYPE": "VARCHAR2",
                  "HISTOGRAM": "VARCHAR2",
                  "NUM_NULLS": "NUMBER",
                  "COLUMN_NAME": "VARCHAR2",
                  "NUM_BUCKETS": "NUMBER",
                  "NUM_DISTINCT": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2"
                },
                "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1600925825,
          "current_audit_time": 1601358386,
          "rules": ["TAB_NO_TIMESTAMP"],
          "score": 90,
          "implement_advice": "",
          "audit": [{
            "target_id": 222313,
            "id": 364524,
            "name": "表没有日期字段",
            "risky": "middle",
            "description": "表没有date或timestamp类型的字段",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 222310,
          "name": "TEST2507",
          "table_name": "TEST2507",
          "type": "TABLE",
          "schema": "TEST",
          "report_id": 6376,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE TABLE \"TEST\".\"TEST2507\" \n   (\t\"A\" NUMBER(*,0), \n\t\"B\" VARCHAR2(2000), \n\t\"C\" BLOB, \n\t\"D\" LONG\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n LOB (\"C\") STORE AS BASICFILE (\n  TABLESPACE \"USERS\" ENABLE STORAGE IN ROW CHUNK 8192 RETENTION \n  NOCACHE LOGGING \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)) "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": null,
                  "DEGREE": "0",
                  "STATUS": "VALID",
                  "NUM_ROWS": null,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "SYS_IL0000026936C00003$$",
                  "INDEX_TYPE": "LOB",
                  "UNIQUENESS": "UNIQUE",
                  "LEAF_BLOCKS": null,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": null,
                  "LAST_ANALYZED": null,
                  "CLUSTERING_FACTOR": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "TABLE": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "OWNER": "TEST",
                  "BLOCKS": 0,
                  "DEGREE": "         1",
                  "NUM_ROWS": 0,
                  "TABLE_NAME": "TEST2507",
                  "AVG_ROW_LEN": 0,
                  "SAMPLE_SIZE": 0,
                  "GLOBAL_STATS": "YES",
                  "LAST_ANALYZED": "2020-06-24 22:01",
                  "TABLESPACE_NAME": "USERS"
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "OWNER": "VARCHAR2",
                  "BLOCKS": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TABLE_NAME": "VARCHAR2",
                  "AVG_ROW_LEN": "NUMBER",
                  "SAMPLE_SIZE": "NUMBER",
                  "GLOBAL_STATS": "VARCHAR2",
                  "LAST_ANALYZED": "VARCHAR2",
                  "TABLESPACE_NAME": "VARCHAR2"
                },
                "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
              }
            },
            "COLUMN": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "NULLABLE": "Y",
                  "COLUMN_ID": 1,
                  "DATA_TYPE": "NUMBER(,0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "A",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 2,
                  "DATA_TYPE": "VARCHAR2(2000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "B",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 3,
                  "DATA_TYPE": "BLOB(4000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "C",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 4,
                  "DATA_TYPE": "LONG(0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": null,
                  "COLUMN_NAME": "D",
                  "NUM_BUCKETS": null,
                  "NUM_DISTINCT": null,
                  "LAST_ANALYZED": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "NULLABLE": "VARCHAR2",
                  "COLUMN_ID": "NUMBER",
                  "DATA_TYPE": "VARCHAR2",
                  "HISTOGRAM": "VARCHAR2",
                  "NUM_NULLS": "NUMBER",
                  "COLUMN_NAME": "VARCHAR2",
                  "NUM_BUCKETS": "NUMBER",
                  "NUM_DISTINCT": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2"
                },
                "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1600925824,
          "current_audit_time": 1601358385,
          "rules": ["TAB_NO_TIMESTAMP"],
          "score": 90,
          "implement_advice": "",
          "audit": [{
            "target_id": 222310,
            "id": 364522,
            "name": "表没有日期字段",
            "risky": "middle",
            "description": "表没有date或timestamp类型的字段",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 222309,
          "name": "TEST2504",
          "table_name": "TEST2504",
          "type": "TABLE",
          "schema": "TEST",
          "report_id": 6376,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE TABLE \"TEST\".\"TEST2504\" \n   (\t\"A\" NUMBER(*,0), \n\t\"B\" VARCHAR2(2000), \n\t\"C\" BLOB, \n\t\"D\" LONG\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n LOB (\"C\") STORE AS BASICFILE (\n  TABLESPACE \"USERS\" ENABLE STORAGE IN ROW CHUNK 8192 RETENTION \n  NOCACHE LOGGING \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)) "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": null,
                  "DEGREE": "0",
                  "STATUS": "VALID",
                  "NUM_ROWS": null,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "SYS_IL0000026927C00003$$",
                  "INDEX_TYPE": "LOB",
                  "UNIQUENESS": "UNIQUE",
                  "LEAF_BLOCKS": null,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": null,
                  "LAST_ANALYZED": null,
                  "CLUSTERING_FACTOR": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "TABLE": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "OWNER": "TEST",
                  "BLOCKS": 0,
                  "DEGREE": "         1",
                  "NUM_ROWS": 0,
                  "TABLE_NAME": "TEST2504",
                  "AVG_ROW_LEN": 0,
                  "SAMPLE_SIZE": 0,
                  "GLOBAL_STATS": "YES",
                  "LAST_ANALYZED": "2020-06-24 22:01",
                  "TABLESPACE_NAME": "USERS"
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "OWNER": "VARCHAR2",
                  "BLOCKS": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TABLE_NAME": "VARCHAR2",
                  "AVG_ROW_LEN": "NUMBER",
                  "SAMPLE_SIZE": "NUMBER",
                  "GLOBAL_STATS": "VARCHAR2",
                  "LAST_ANALYZED": "VARCHAR2",
                  "TABLESPACE_NAME": "VARCHAR2"
                },
                "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
              }
            },
            "COLUMN": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "NULLABLE": "Y",
                  "COLUMN_ID": 1,
                  "DATA_TYPE": "NUMBER(,0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "A",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 2,
                  "DATA_TYPE": "VARCHAR2(2000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "B",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 3,
                  "DATA_TYPE": "BLOB(4000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "C",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 4,
                  "DATA_TYPE": "LONG(0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": null,
                  "COLUMN_NAME": "D",
                  "NUM_BUCKETS": null,
                  "NUM_DISTINCT": null,
                  "LAST_ANALYZED": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "NULLABLE": "VARCHAR2",
                  "COLUMN_ID": "NUMBER",
                  "DATA_TYPE": "VARCHAR2",
                  "HISTOGRAM": "VARCHAR2",
                  "NUM_NULLS": "NUMBER",
                  "COLUMN_NAME": "VARCHAR2",
                  "NUM_BUCKETS": "NUMBER",
                  "NUM_DISTINCT": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2"
                },
                "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1600925823,
          "current_audit_time": 1601358383,
          "rules": ["TAB_NO_TIMESTAMP"],
          "score": 90,
          "implement_advice": "",
          "audit": [{
            "target_id": 222309,
            "id": 364521,
            "name": "表没有日期字段",
            "risky": "middle",
            "description": "表没有date或timestamp类型的字段",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 222306,
          "name": "TEST2503",
          "table_name": "TEST2503",
          "type": "TABLE",
          "schema": "TEST",
          "report_id": 6376,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE TABLE \"TEST\".\"TEST2503\" \n   (\t\"A\" NUMBER(*,0), \n\t\"B\" VARCHAR2(2000), \n\t\"C\" BLOB, \n\t\"D\" LONG\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n LOB (\"C\") STORE AS BASICFILE (\n  TABLESPACE \"USERS\" ENABLE STORAGE IN ROW CHUNK 8192 RETENTION \n  NOCACHE LOGGING \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)) "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": null,
                  "DEGREE": "0",
                  "STATUS": "VALID",
                  "NUM_ROWS": null,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "SYS_IL0000026924C00003$$",
                  "INDEX_TYPE": "LOB",
                  "UNIQUENESS": "UNIQUE",
                  "LEAF_BLOCKS": null,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": null,
                  "LAST_ANALYZED": null,
                  "CLUSTERING_FACTOR": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "TABLE": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "OWNER": "TEST",
                  "BLOCKS": 0,
                  "DEGREE": "         1",
                  "NUM_ROWS": 0,
                  "TABLE_NAME": "TEST2503",
                  "AVG_ROW_LEN": 0,
                  "SAMPLE_SIZE": 0,
                  "GLOBAL_STATS": "YES",
                  "LAST_ANALYZED": "2020-06-24 22:01",
                  "TABLESPACE_NAME": "USERS"
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "OWNER": "VARCHAR2",
                  "BLOCKS": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TABLE_NAME": "VARCHAR2",
                  "AVG_ROW_LEN": "NUMBER",
                  "SAMPLE_SIZE": "NUMBER",
                  "GLOBAL_STATS": "VARCHAR2",
                  "LAST_ANALYZED": "VARCHAR2",
                  "TABLESPACE_NAME": "VARCHAR2"
                },
                "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
              }
            },
            "COLUMN": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "NULLABLE": "Y",
                  "COLUMN_ID": 1,
                  "DATA_TYPE": "NUMBER(,0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "A",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 2,
                  "DATA_TYPE": "VARCHAR2(2000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "B",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 3,
                  "DATA_TYPE": "BLOB(4000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "C",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 4,
                  "DATA_TYPE": "LONG(0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": null,
                  "COLUMN_NAME": "D",
                  "NUM_BUCKETS": null,
                  "NUM_DISTINCT": null,
                  "LAST_ANALYZED": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "NULLABLE": "VARCHAR2",
                  "COLUMN_ID": "NUMBER",
                  "DATA_TYPE": "VARCHAR2",
                  "HISTOGRAM": "VARCHAR2",
                  "NUM_NULLS": "NUMBER",
                  "COLUMN_NAME": "VARCHAR2",
                  "NUM_BUCKETS": "NUMBER",
                  "NUM_DISTINCT": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2"
                },
                "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1600925821,
          "current_audit_time": 1601358382,
          "rules": ["TAB_NO_TIMESTAMP"],
          "score": 90,
          "implement_advice": "",
          "audit": [{
            "target_id": 222306,
            "id": 364518,
            "name": "表没有日期字段",
            "risky": "middle",
            "description": "表没有date或timestamp类型的字段",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 222305,
          "name": "TEST2502",
          "table_name": "TEST2502",
          "type": "TABLE",
          "schema": "TEST",
          "report_id": 6376,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE TABLE \"TEST\".\"TEST2502\" \n   (\t\"A\" NUMBER(*,0), \n\t\"B\" VARCHAR2(2000), \n\t\"C\" BLOB, \n\t\"D\" LONG\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n LOB (\"C\") STORE AS BASICFILE (\n  TABLESPACE \"USERS\" ENABLE STORAGE IN ROW CHUNK 8192 RETENTION \n  NOCACHE LOGGING \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)) "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": null,
                  "DEGREE": "0",
                  "STATUS": "VALID",
                  "NUM_ROWS": null,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "SYS_IL0000026921C00003$$",
                  "INDEX_TYPE": "LOB",
                  "UNIQUENESS": "UNIQUE",
                  "LEAF_BLOCKS": null,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": null,
                  "LAST_ANALYZED": null,
                  "CLUSTERING_FACTOR": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "TABLE": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "OWNER": "TEST",
                  "BLOCKS": 0,
                  "DEGREE": "         1",
                  "NUM_ROWS": 0,
                  "TABLE_NAME": "TEST2502",
                  "AVG_ROW_LEN": 0,
                  "SAMPLE_SIZE": 0,
                  "GLOBAL_STATS": "YES",
                  "LAST_ANALYZED": "2020-06-24 22:01",
                  "TABLESPACE_NAME": "USERS"
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "OWNER": "VARCHAR2",
                  "BLOCKS": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TABLE_NAME": "VARCHAR2",
                  "AVG_ROW_LEN": "NUMBER",
                  "SAMPLE_SIZE": "NUMBER",
                  "GLOBAL_STATS": "VARCHAR2",
                  "LAST_ANALYZED": "VARCHAR2",
                  "TABLESPACE_NAME": "VARCHAR2"
                },
                "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
              }
            },
            "COLUMN": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "NULLABLE": "Y",
                  "COLUMN_ID": 1,
                  "DATA_TYPE": "NUMBER(,0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "A",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 2,
                  "DATA_TYPE": "VARCHAR2(2000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "B",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 3,
                  "DATA_TYPE": "BLOB(4000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "C",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 4,
                  "DATA_TYPE": "LONG(0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": null,
                  "COLUMN_NAME": "D",
                  "NUM_BUCKETS": null,
                  "NUM_DISTINCT": null,
                  "LAST_ANALYZED": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "NULLABLE": "VARCHAR2",
                  "COLUMN_ID": "NUMBER",
                  "DATA_TYPE": "VARCHAR2",
                  "HISTOGRAM": "VARCHAR2",
                  "NUM_NULLS": "NUMBER",
                  "COLUMN_NAME": "VARCHAR2",
                  "NUM_BUCKETS": "NUMBER",
                  "NUM_DISTINCT": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2"
                },
                "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1600925820,
          "current_audit_time": 1601358381,
          "rules": ["TAB_NO_TIMESTAMP"],
          "score": 90,
          "implement_advice": "",
          "audit": [{
            "target_id": 222305,
            "id": 364516,
            "name": "表没有日期字段",
            "risky": "middle",
            "description": "表没有date或timestamp类型的字段",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 222302,
          "name": "TEST2501",
          "table_name": "TEST2501",
          "type": "TABLE",
          "schema": "TEST",
          "report_id": 6376,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE TABLE \"TEST\".\"TEST2501\" \n   (\t\"A\" NUMBER(*,0), \n\t\"B\" VARCHAR2(2000), \n\t\"C\" BLOB, \n\t\"D\" LONG\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n LOB (\"C\") STORE AS BASICFILE (\n  TABLESPACE \"USERS\" ENABLE STORAGE IN ROW CHUNK 8192 RETENTION \n  NOCACHE LOGGING \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)) "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": null,
                  "DEGREE": "0",
                  "STATUS": "VALID",
                  "NUM_ROWS": null,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "SYS_IL0000026918C00003$$",
                  "INDEX_TYPE": "LOB",
                  "UNIQUENESS": "UNIQUE",
                  "LEAF_BLOCKS": null,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": null,
                  "LAST_ANALYZED": null,
                  "CLUSTERING_FACTOR": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "TABLE": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "OWNER": "TEST",
                  "BLOCKS": 0,
                  "DEGREE": "         1",
                  "NUM_ROWS": 0,
                  "TABLE_NAME": "TEST2501",
                  "AVG_ROW_LEN": 0,
                  "SAMPLE_SIZE": 0,
                  "GLOBAL_STATS": "YES",
                  "LAST_ANALYZED": "2020-06-24 22:01",
                  "TABLESPACE_NAME": "USERS"
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "OWNER": "VARCHAR2",
                  "BLOCKS": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TABLE_NAME": "VARCHAR2",
                  "AVG_ROW_LEN": "NUMBER",
                  "SAMPLE_SIZE": "NUMBER",
                  "GLOBAL_STATS": "VARCHAR2",
                  "LAST_ANALYZED": "VARCHAR2",
                  "TABLESPACE_NAME": "VARCHAR2"
                },
                "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
              }
            },
            "COLUMN": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "NULLABLE": "Y",
                  "COLUMN_ID": 1,
                  "DATA_TYPE": "NUMBER(,0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "A",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 2,
                  "DATA_TYPE": "VARCHAR2(2000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "B",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 3,
                  "DATA_TYPE": "BLOB(4000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "C",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 4,
                  "DATA_TYPE": "LONG(0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": null,
                  "COLUMN_NAME": "D",
                  "NUM_BUCKETS": null,
                  "NUM_DISTINCT": null,
                  "LAST_ANALYZED": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "NULLABLE": "VARCHAR2",
                  "COLUMN_ID": "NUMBER",
                  "DATA_TYPE": "VARCHAR2",
                  "HISTOGRAM": "VARCHAR2",
                  "NUM_NULLS": "NUMBER",
                  "COLUMN_NAME": "VARCHAR2",
                  "NUM_BUCKETS": "NUMBER",
                  "NUM_DISTINCT": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2"
                },
                "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1600925818,
          "current_audit_time": 1601358379,
          "rules": ["TAB_NO_TIMESTAMP"],
          "score": 90,
          "implement_advice": "",
          "audit": [{
            "target_id": 222302,
            "id": 364514,
            "name": "表没有日期字段",
            "risky": "middle",
            "description": "表没有date或timestamp类型的字段",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 222301,
          "name": "TEST2493",
          "table_name": "TEST2493",
          "type": "TABLE",
          "schema": "TEST",
          "report_id": 6376,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE TABLE \"TEST\".\"TEST2493\" \n   (\t\"A\" NUMBER(*,0), \n\t\"B\" VARCHAR2(2000), \n\t\"C\" BLOB, \n\t\"D\" LONG\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n LOB (\"C\") STORE AS BASICFILE (\n  TABLESPACE \"USERS\" ENABLE STORAGE IN ROW CHUNK 8192 RETENTION \n  NOCACHE LOGGING \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)) "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": null,
                  "DEGREE": "0",
                  "STATUS": "VALID",
                  "NUM_ROWS": null,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "SYS_IL0000026894C00003$$",
                  "INDEX_TYPE": "LOB",
                  "UNIQUENESS": "UNIQUE",
                  "LEAF_BLOCKS": null,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": null,
                  "LAST_ANALYZED": null,
                  "CLUSTERING_FACTOR": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "TABLE": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "OWNER": "TEST",
                  "BLOCKS": 0,
                  "DEGREE": "         1",
                  "NUM_ROWS": 0,
                  "TABLE_NAME": "TEST2493",
                  "AVG_ROW_LEN": 0,
                  "SAMPLE_SIZE": 0,
                  "GLOBAL_STATS": "YES",
                  "LAST_ANALYZED": "2020-06-24 22:01",
                  "TABLESPACE_NAME": "USERS"
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "OWNER": "VARCHAR2",
                  "BLOCKS": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TABLE_NAME": "VARCHAR2",
                  "AVG_ROW_LEN": "NUMBER",
                  "SAMPLE_SIZE": "NUMBER",
                  "GLOBAL_STATS": "VARCHAR2",
                  "LAST_ANALYZED": "VARCHAR2",
                  "TABLESPACE_NAME": "VARCHAR2"
                },
                "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
              }
            },
            "COLUMN": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "NULLABLE": "Y",
                  "COLUMN_ID": 1,
                  "DATA_TYPE": "NUMBER(,0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "A",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 2,
                  "DATA_TYPE": "VARCHAR2(2000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "B",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 3,
                  "DATA_TYPE": "BLOB(4000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "C",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 4,
                  "DATA_TYPE": "LONG(0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": null,
                  "COLUMN_NAME": "D",
                  "NUM_BUCKETS": null,
                  "NUM_DISTINCT": null,
                  "LAST_ANALYZED": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "NULLABLE": "VARCHAR2",
                  "COLUMN_ID": "NUMBER",
                  "DATA_TYPE": "VARCHAR2",
                  "HISTOGRAM": "VARCHAR2",
                  "NUM_NULLS": "NUMBER",
                  "COLUMN_NAME": "VARCHAR2",
                  "NUM_BUCKETS": "NUMBER",
                  "NUM_DISTINCT": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2"
                },
                "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1600925817,
          "current_audit_time": 1601358378,
          "rules": ["TAB_NO_TIMESTAMP"],
          "score": 90,
          "implement_advice": "",
          "audit": [{
            "target_id": 222301,
            "id": 364512,
            "name": "表没有日期字段",
            "risky": "middle",
            "description": "表没有date或timestamp类型的字段",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 222298,
          "name": "TEST2492",
          "table_name": "TEST2492",
          "type": "TABLE",
          "schema": "TEST",
          "report_id": 6376,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE TABLE \"TEST\".\"TEST2492\" \n   (\t\"A\" NUMBER(*,0), \n\t\"B\" VARCHAR2(2000), \n\t\"C\" BLOB, \n\t\"D\" LONG\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n LOB (\"C\") STORE AS BASICFILE (\n  TABLESPACE \"USERS\" ENABLE STORAGE IN ROW CHUNK 8192 RETENTION \n  NOCACHE LOGGING \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)) "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": null,
                  "DEGREE": "0",
                  "STATUS": "VALID",
                  "NUM_ROWS": null,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "SYS_IL0000026891C00003$$",
                  "INDEX_TYPE": "LOB",
                  "UNIQUENESS": "UNIQUE",
                  "LEAF_BLOCKS": null,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": null,
                  "LAST_ANALYZED": null,
                  "CLUSTERING_FACTOR": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "TABLE": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "OWNER": "TEST",
                  "BLOCKS": 0,
                  "DEGREE": "         1",
                  "NUM_ROWS": 0,
                  "TABLE_NAME": "TEST2492",
                  "AVG_ROW_LEN": 0,
                  "SAMPLE_SIZE": 0,
                  "GLOBAL_STATS": "YES",
                  "LAST_ANALYZED": "2020-06-24 22:01",
                  "TABLESPACE_NAME": "USERS"
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "OWNER": "VARCHAR2",
                  "BLOCKS": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TABLE_NAME": "VARCHAR2",
                  "AVG_ROW_LEN": "NUMBER",
                  "SAMPLE_SIZE": "NUMBER",
                  "GLOBAL_STATS": "VARCHAR2",
                  "LAST_ANALYZED": "VARCHAR2",
                  "TABLESPACE_NAME": "VARCHAR2"
                },
                "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
              }
            },
            "COLUMN": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "NULLABLE": "Y",
                  "COLUMN_ID": 1,
                  "DATA_TYPE": "NUMBER(,0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "A",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 2,
                  "DATA_TYPE": "VARCHAR2(2000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "B",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 3,
                  "DATA_TYPE": "BLOB(4000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "C",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 4,
                  "DATA_TYPE": "LONG(0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": null,
                  "COLUMN_NAME": "D",
                  "NUM_BUCKETS": null,
                  "NUM_DISTINCT": null,
                  "LAST_ANALYZED": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "NULLABLE": "VARCHAR2",
                  "COLUMN_ID": "NUMBER",
                  "DATA_TYPE": "VARCHAR2",
                  "HISTOGRAM": "VARCHAR2",
                  "NUM_NULLS": "NUMBER",
                  "COLUMN_NAME": "VARCHAR2",
                  "NUM_BUCKETS": "NUMBER",
                  "NUM_DISTINCT": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2"
                },
                "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1600925816,
          "current_audit_time": 1601358376,
          "rules": ["TAB_NO_TIMESTAMP"],
          "score": 90,
          "implement_advice": "",
          "audit": [{
            "target_id": 222298,
            "id": 364508,
            "name": "表没有日期字段",
            "risky": "middle",
            "description": "表没有date或timestamp类型的字段",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 222296,
          "name": "TEST2482",
          "table_name": "TEST2482",
          "type": "TABLE",
          "schema": "TEST",
          "report_id": 6376,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE TABLE \"TEST\".\"TEST2482\" \n   (\t\"A\" NUMBER(*,0), \n\t\"B\" VARCHAR2(2000), \n\t\"C\" BLOB, \n\t\"D\" LONG\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n LOB (\"C\") STORE AS BASICFILE (\n  TABLESPACE \"USERS\" ENABLE STORAGE IN ROW CHUNK 8192 RETENTION \n  NOCACHE LOGGING \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)) "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": null,
                  "DEGREE": "0",
                  "STATUS": "VALID",
                  "NUM_ROWS": null,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "SYS_IL0000026861C00003$$",
                  "INDEX_TYPE": "LOB",
                  "UNIQUENESS": "UNIQUE",
                  "LEAF_BLOCKS": null,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": null,
                  "LAST_ANALYZED": null,
                  "CLUSTERING_FACTOR": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "TABLE": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "OWNER": "TEST",
                  "BLOCKS": 0,
                  "DEGREE": "         1",
                  "NUM_ROWS": 0,
                  "TABLE_NAME": "TEST2482",
                  "AVG_ROW_LEN": 0,
                  "SAMPLE_SIZE": 0,
                  "GLOBAL_STATS": "YES",
                  "LAST_ANALYZED": "2020-06-24 22:01",
                  "TABLESPACE_NAME": "USERS"
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "OWNER": "VARCHAR2",
                  "BLOCKS": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TABLE_NAME": "VARCHAR2",
                  "AVG_ROW_LEN": "NUMBER",
                  "SAMPLE_SIZE": "NUMBER",
                  "GLOBAL_STATS": "VARCHAR2",
                  "LAST_ANALYZED": "VARCHAR2",
                  "TABLESPACE_NAME": "VARCHAR2"
                },
                "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
              }
            },
            "COLUMN": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "NULLABLE": "Y",
                  "COLUMN_ID": 1,
                  "DATA_TYPE": "NUMBER(,0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "A",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 2,
                  "DATA_TYPE": "VARCHAR2(2000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "B",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 3,
                  "DATA_TYPE": "BLOB(4000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "C",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 4,
                  "DATA_TYPE": "LONG(0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": null,
                  "COLUMN_NAME": "D",
                  "NUM_BUCKETS": null,
                  "NUM_DISTINCT": null,
                  "LAST_ANALYZED": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "NULLABLE": "VARCHAR2",
                  "COLUMN_ID": "NUMBER",
                  "DATA_TYPE": "VARCHAR2",
                  "HISTOGRAM": "VARCHAR2",
                  "NUM_NULLS": "NUMBER",
                  "COLUMN_NAME": "VARCHAR2",
                  "NUM_BUCKETS": "NUMBER",
                  "NUM_DISTINCT": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2"
                },
                "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1600925814,
          "current_audit_time": 1601358375,
          "rules": ["TAB_NO_TIMESTAMP"],
          "score": 90,
          "implement_advice": "",
          "audit": [{
            "target_id": 222296,
            "id": 364506,
            "name": "表没有日期字段",
            "risky": "middle",
            "description": "表没有date或timestamp类型的字段",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 222294,
          "name": "TEST2480",
          "table_name": "TEST2480",
          "type": "TABLE",
          "schema": "TEST",
          "report_id": 6376,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE TABLE \"TEST\".\"TEST2480\" \n   (\t\"A\" NUMBER(*,0), \n\t\"B\" VARCHAR2(2000), \n\t\"C\" BLOB, \n\t\"D\" LONG\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n LOB (\"C\") STORE AS BASICFILE (\n  TABLESPACE \"USERS\" ENABLE STORAGE IN ROW CHUNK 8192 RETENTION \n  NOCACHE LOGGING \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)) "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": null,
                  "DEGREE": "0",
                  "STATUS": "VALID",
                  "NUM_ROWS": null,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "SYS_IL0000026855C00003$$",
                  "INDEX_TYPE": "LOB",
                  "UNIQUENESS": "UNIQUE",
                  "LEAF_BLOCKS": null,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": null,
                  "LAST_ANALYZED": null,
                  "CLUSTERING_FACTOR": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "TABLE": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "OWNER": "TEST",
                  "BLOCKS": 0,
                  "DEGREE": "         1",
                  "NUM_ROWS": 0,
                  "TABLE_NAME": "TEST2480",
                  "AVG_ROW_LEN": 0,
                  "SAMPLE_SIZE": 0,
                  "GLOBAL_STATS": "YES",
                  "LAST_ANALYZED": "2020-06-24 22:01",
                  "TABLESPACE_NAME": "USERS"
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "OWNER": "VARCHAR2",
                  "BLOCKS": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TABLE_NAME": "VARCHAR2",
                  "AVG_ROW_LEN": "NUMBER",
                  "SAMPLE_SIZE": "NUMBER",
                  "GLOBAL_STATS": "VARCHAR2",
                  "LAST_ANALYZED": "VARCHAR2",
                  "TABLESPACE_NAME": "VARCHAR2"
                },
                "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
              }
            },
            "COLUMN": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "NULLABLE": "Y",
                  "COLUMN_ID": 1,
                  "DATA_TYPE": "NUMBER(,0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "A",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 2,
                  "DATA_TYPE": "VARCHAR2(2000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "B",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 3,
                  "DATA_TYPE": "BLOB(4000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "C",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 4,
                  "DATA_TYPE": "LONG(0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": null,
                  "COLUMN_NAME": "D",
                  "NUM_BUCKETS": null,
                  "NUM_DISTINCT": null,
                  "LAST_ANALYZED": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "NULLABLE": "VARCHAR2",
                  "COLUMN_ID": "NUMBER",
                  "DATA_TYPE": "VARCHAR2",
                  "HISTOGRAM": "VARCHAR2",
                  "NUM_NULLS": "NUMBER",
                  "COLUMN_NAME": "VARCHAR2",
                  "NUM_BUCKETS": "NUMBER",
                  "NUM_DISTINCT": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2"
                },
                "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1600925813,
          "current_audit_time": 1601358374,
          "rules": ["TAB_NO_TIMESTAMP"],
          "score": 90,
          "implement_advice": "",
          "audit": [{
            "target_id": 222294,
            "id": 364504,
            "name": "表没有日期字段",
            "risky": "middle",
            "description": "表没有date或timestamp类型的字段",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 222293,
          "name": "TEST2472",
          "table_name": "TEST2472",
          "type": "TABLE",
          "schema": "TEST",
          "report_id": 6376,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE TABLE \"TEST\".\"TEST2472\" \n   (\t\"A\" NUMBER(*,0), \n\t\"B\" VARCHAR2(2000), \n\t\"C\" BLOB, \n\t\"D\" LONG\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n LOB (\"C\") STORE AS BASICFILE (\n  TABLESPACE \"USERS\" ENABLE STORAGE IN ROW CHUNK 8192 RETENTION \n  NOCACHE LOGGING \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)) "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": null,
                  "DEGREE": "0",
                  "STATUS": "VALID",
                  "NUM_ROWS": null,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "SYS_IL0000026831C00003$$",
                  "INDEX_TYPE": "LOB",
                  "UNIQUENESS": "UNIQUE",
                  "LEAF_BLOCKS": null,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": null,
                  "LAST_ANALYZED": null,
                  "CLUSTERING_FACTOR": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "TABLE": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "OWNER": "TEST",
                  "BLOCKS": 0,
                  "DEGREE": "         1",
                  "NUM_ROWS": 0,
                  "TABLE_NAME": "TEST2472",
                  "AVG_ROW_LEN": 0,
                  "SAMPLE_SIZE": 0,
                  "GLOBAL_STATS": "YES",
                  "LAST_ANALYZED": "2020-06-24 22:01",
                  "TABLESPACE_NAME": "USERS"
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "OWNER": "VARCHAR2",
                  "BLOCKS": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TABLE_NAME": "VARCHAR2",
                  "AVG_ROW_LEN": "NUMBER",
                  "SAMPLE_SIZE": "NUMBER",
                  "GLOBAL_STATS": "VARCHAR2",
                  "LAST_ANALYZED": "VARCHAR2",
                  "TABLESPACE_NAME": "VARCHAR2"
                },
                "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
              }
            },
            "COLUMN": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "NULLABLE": "Y",
                  "COLUMN_ID": 1,
                  "DATA_TYPE": "NUMBER(,0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "A",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 2,
                  "DATA_TYPE": "VARCHAR2(2000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "B",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 3,
                  "DATA_TYPE": "BLOB(4000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "C",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 4,
                  "DATA_TYPE": "LONG(0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": null,
                  "COLUMN_NAME": "D",
                  "NUM_BUCKETS": null,
                  "NUM_DISTINCT": null,
                  "LAST_ANALYZED": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "NULLABLE": "VARCHAR2",
                  "COLUMN_ID": "NUMBER",
                  "DATA_TYPE": "VARCHAR2",
                  "HISTOGRAM": "VARCHAR2",
                  "NUM_NULLS": "NUMBER",
                  "COLUMN_NAME": "VARCHAR2",
                  "NUM_BUCKETS": "NUMBER",
                  "NUM_DISTINCT": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2"
                },
                "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1599117463,
          "current_audit_time": 1601358373,
          "rules": ["TAB_NO_TIMESTAMP"],
          "score": 90,
          "implement_advice": "",
          "audit": [{
            "target_id": 222293,
            "id": 364503,
            "name": "表没有日期字段",
            "risky": "middle",
            "description": "表没有date或timestamp类型的字段",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 222290,
          "name": "TEST2469",
          "table_name": "TEST2469",
          "type": "TABLE",
          "schema": "TEST",
          "report_id": 6376,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE TABLE \"TEST\".\"TEST2469\" \n   (\t\"A\" NUMBER(*,0), \n\t\"B\" VARCHAR2(2000), \n\t\"C\" BLOB, \n\t\"D\" LONG\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n LOB (\"C\") STORE AS BASICFILE (\n  TABLESPACE \"USERS\" ENABLE STORAGE IN ROW CHUNK 8192 RETENTION \n  NOCACHE LOGGING \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)) "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": null,
                  "DEGREE": "0",
                  "STATUS": "VALID",
                  "NUM_ROWS": null,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "SYS_IL0000026822C00003$$",
                  "INDEX_TYPE": "LOB",
                  "UNIQUENESS": "UNIQUE",
                  "LEAF_BLOCKS": null,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": null,
                  "LAST_ANALYZED": null,
                  "CLUSTERING_FACTOR": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "TABLE": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "OWNER": "TEST",
                  "BLOCKS": 0,
                  "DEGREE": "         1",
                  "NUM_ROWS": 0,
                  "TABLE_NAME": "TEST2469",
                  "AVG_ROW_LEN": 0,
                  "SAMPLE_SIZE": 0,
                  "GLOBAL_STATS": "YES",
                  "LAST_ANALYZED": "2020-06-24 22:01",
                  "TABLESPACE_NAME": "USERS"
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "OWNER": "VARCHAR2",
                  "BLOCKS": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TABLE_NAME": "VARCHAR2",
                  "AVG_ROW_LEN": "NUMBER",
                  "SAMPLE_SIZE": "NUMBER",
                  "GLOBAL_STATS": "VARCHAR2",
                  "LAST_ANALYZED": "VARCHAR2",
                  "TABLESPACE_NAME": "VARCHAR2"
                },
                "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
              }
            },
            "COLUMN": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "NULLABLE": "Y",
                  "COLUMN_ID": 1,
                  "DATA_TYPE": "NUMBER(,0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "A",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 2,
                  "DATA_TYPE": "VARCHAR2(2000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "B",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 3,
                  "DATA_TYPE": "BLOB(4000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "C",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 4,
                  "DATA_TYPE": "LONG(0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": null,
                  "COLUMN_NAME": "D",
                  "NUM_BUCKETS": null,
                  "NUM_DISTINCT": null,
                  "LAST_ANALYZED": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "NULLABLE": "VARCHAR2",
                  "COLUMN_ID": "NUMBER",
                  "DATA_TYPE": "VARCHAR2",
                  "HISTOGRAM": "VARCHAR2",
                  "NUM_NULLS": "NUMBER",
                  "COLUMN_NAME": "VARCHAR2",
                  "NUM_BUCKETS": "NUMBER",
                  "NUM_DISTINCT": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2"
                },
                "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1600925811,
          "current_audit_time": 1601358372,
          "rules": ["TAB_NO_TIMESTAMP"],
          "score": 90,
          "implement_advice": "",
          "audit": [{
            "target_id": 222290,
            "id": 364500,
            "name": "表没有日期字段",
            "risky": "middle",
            "description": "表没有date或timestamp类型的字段",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 222288,
          "name": "TEST2466",
          "table_name": "TEST2466",
          "type": "TABLE",
          "schema": "TEST",
          "report_id": 6376,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE TABLE \"TEST\".\"TEST2466\" \n   (\t\"A\" NUMBER(*,0), \n\t\"B\" VARCHAR2(2000), \n\t\"C\" BLOB, \n\t\"D\" LONG\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n LOB (\"C\") STORE AS BASICFILE (\n  TABLESPACE \"USERS\" ENABLE STORAGE IN ROW CHUNK 8192 RETENTION \n  NOCACHE LOGGING \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)) "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": null,
                  "DEGREE": "0",
                  "STATUS": "VALID",
                  "NUM_ROWS": null,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "SYS_IL0000026813C00003$$",
                  "INDEX_TYPE": "LOB",
                  "UNIQUENESS": "UNIQUE",
                  "LEAF_BLOCKS": null,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": null,
                  "LAST_ANALYZED": null,
                  "CLUSTERING_FACTOR": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "TABLE": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "OWNER": "TEST",
                  "BLOCKS": 0,
                  "DEGREE": "         1",
                  "NUM_ROWS": 0,
                  "TABLE_NAME": "TEST2466",
                  "AVG_ROW_LEN": 0,
                  "SAMPLE_SIZE": 0,
                  "GLOBAL_STATS": "YES",
                  "LAST_ANALYZED": "2020-06-24 22:01",
                  "TABLESPACE_NAME": "USERS"
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "OWNER": "VARCHAR2",
                  "BLOCKS": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TABLE_NAME": "VARCHAR2",
                  "AVG_ROW_LEN": "NUMBER",
                  "SAMPLE_SIZE": "NUMBER",
                  "GLOBAL_STATS": "VARCHAR2",
                  "LAST_ANALYZED": "VARCHAR2",
                  "TABLESPACE_NAME": "VARCHAR2"
                },
                "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
              }
            },
            "COLUMN": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "NULLABLE": "Y",
                  "COLUMN_ID": 1,
                  "DATA_TYPE": "NUMBER(,0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "A",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 2,
                  "DATA_TYPE": "VARCHAR2(2000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "B",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 3,
                  "DATA_TYPE": "BLOB(4000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "C",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 4,
                  "DATA_TYPE": "LONG(0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": null,
                  "COLUMN_NAME": "D",
                  "NUM_BUCKETS": null,
                  "NUM_DISTINCT": null,
                  "LAST_ANALYZED": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "NULLABLE": "VARCHAR2",
                  "COLUMN_ID": "NUMBER",
                  "DATA_TYPE": "VARCHAR2",
                  "HISTOGRAM": "VARCHAR2",
                  "NUM_NULLS": "NUMBER",
                  "COLUMN_NAME": "VARCHAR2",
                  "NUM_BUCKETS": "NUMBER",
                  "NUM_DISTINCT": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2"
                },
                "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1600925810,
          "current_audit_time": 1601358371,
          "rules": ["TAB_NO_TIMESTAMP"],
          "score": 90,
          "implement_advice": "",
          "audit": [{
            "target_id": 222288,
            "id": 364499,
            "name": "表没有日期字段",
            "risky": "middle",
            "description": "表没有date或timestamp类型的字段",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 222286,
          "name": "TEST2462",
          "table_name": "TEST2462",
          "type": "TABLE",
          "schema": "TEST",
          "report_id": 6376,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE TABLE \"TEST\".\"TEST2462\" \n   (\t\"A\" NUMBER(*,0), \n\t\"B\" VARCHAR2(2000), \n\t\"C\" BLOB, \n\t\"D\" LONG\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n LOB (\"C\") STORE AS BASICFILE (\n  TABLESPACE \"USERS\" ENABLE STORAGE IN ROW CHUNK 8192 RETENTION \n  NOCACHE LOGGING \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)) "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": null,
                  "DEGREE": "0",
                  "STATUS": "VALID",
                  "NUM_ROWS": null,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "SYS_IL0000026801C00003$$",
                  "INDEX_TYPE": "LOB",
                  "UNIQUENESS": "UNIQUE",
                  "LEAF_BLOCKS": null,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": null,
                  "LAST_ANALYZED": null,
                  "CLUSTERING_FACTOR": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "TABLE": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "OWNER": "TEST",
                  "BLOCKS": 0,
                  "DEGREE": "         1",
                  "NUM_ROWS": 0,
                  "TABLE_NAME": "TEST2462",
                  "AVG_ROW_LEN": 0,
                  "SAMPLE_SIZE": 0,
                  "GLOBAL_STATS": "YES",
                  "LAST_ANALYZED": "2020-06-24 22:01",
                  "TABLESPACE_NAME": "USERS"
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "OWNER": "VARCHAR2",
                  "BLOCKS": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TABLE_NAME": "VARCHAR2",
                  "AVG_ROW_LEN": "NUMBER",
                  "SAMPLE_SIZE": "NUMBER",
                  "GLOBAL_STATS": "VARCHAR2",
                  "LAST_ANALYZED": "VARCHAR2",
                  "TABLESPACE_NAME": "VARCHAR2"
                },
                "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
              }
            },
            "COLUMN": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "NULLABLE": "Y",
                  "COLUMN_ID": 1,
                  "DATA_TYPE": "NUMBER(,0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "A",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 2,
                  "DATA_TYPE": "VARCHAR2(2000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "B",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 3,
                  "DATA_TYPE": "BLOB(4000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "C",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 4,
                  "DATA_TYPE": "LONG(0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": null,
                  "COLUMN_NAME": "D",
                  "NUM_BUCKETS": null,
                  "NUM_DISTINCT": null,
                  "LAST_ANALYZED": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "NULLABLE": "VARCHAR2",
                  "COLUMN_ID": "NUMBER",
                  "DATA_TYPE": "VARCHAR2",
                  "HISTOGRAM": "VARCHAR2",
                  "NUM_NULLS": "NUMBER",
                  "COLUMN_NAME": "VARCHAR2",
                  "NUM_BUCKETS": "NUMBER",
                  "NUM_DISTINCT": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2"
                },
                "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1599117448,
          "current_audit_time": 1601358370,
          "rules": ["TAB_NO_TIMESTAMP"],
          "score": 90,
          "implement_advice": "",
          "audit": [{
            "target_id": 222286,
            "id": 364496,
            "name": "表没有日期字段",
            "risky": "middle",
            "description": "表没有date或timestamp类型的字段",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 222284,
          "name": "TEST2461",
          "table_name": "TEST2461",
          "type": "TABLE",
          "schema": "TEST",
          "report_id": 6376,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE TABLE \"TEST\".\"TEST2461\" \n   (\t\"A\" NUMBER(*,0), \n\t\"B\" VARCHAR2(2000), \n\t\"C\" BLOB, \n\t\"D\" LONG\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n LOB (\"C\") STORE AS BASICFILE (\n  TABLESPACE \"USERS\" ENABLE STORAGE IN ROW CHUNK 8192 RETENTION \n  NOCACHE LOGGING \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)) "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": null,
                  "DEGREE": "0",
                  "STATUS": "VALID",
                  "NUM_ROWS": null,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "SYS_IL0000026798C00003$$",
                  "INDEX_TYPE": "LOB",
                  "UNIQUENESS": "UNIQUE",
                  "LEAF_BLOCKS": null,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": null,
                  "LAST_ANALYZED": null,
                  "CLUSTERING_FACTOR": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "TABLE": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "OWNER": "TEST",
                  "BLOCKS": 0,
                  "DEGREE": "         1",
                  "NUM_ROWS": 0,
                  "TABLE_NAME": "TEST2461",
                  "AVG_ROW_LEN": 0,
                  "SAMPLE_SIZE": 0,
                  "GLOBAL_STATS": "YES",
                  "LAST_ANALYZED": "2020-06-24 22:01",
                  "TABLESPACE_NAME": "USERS"
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "OWNER": "VARCHAR2",
                  "BLOCKS": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TABLE_NAME": "VARCHAR2",
                  "AVG_ROW_LEN": "NUMBER",
                  "SAMPLE_SIZE": "NUMBER",
                  "GLOBAL_STATS": "VARCHAR2",
                  "LAST_ANALYZED": "VARCHAR2",
                  "TABLESPACE_NAME": "VARCHAR2"
                },
                "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
              }
            },
            "COLUMN": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "NULLABLE": "Y",
                  "COLUMN_ID": 1,
                  "DATA_TYPE": "NUMBER(,0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "A",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 2,
                  "DATA_TYPE": "VARCHAR2(2000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "B",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 3,
                  "DATA_TYPE": "BLOB(4000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "C",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 4,
                  "DATA_TYPE": "LONG(0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": null,
                  "COLUMN_NAME": "D",
                  "NUM_BUCKETS": null,
                  "NUM_DISTINCT": null,
                  "LAST_ANALYZED": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "NULLABLE": "VARCHAR2",
                  "COLUMN_ID": "NUMBER",
                  "DATA_TYPE": "VARCHAR2",
                  "HISTOGRAM": "VARCHAR2",
                  "NUM_NULLS": "NUMBER",
                  "COLUMN_NAME": "VARCHAR2",
                  "NUM_BUCKETS": "NUMBER",
                  "NUM_DISTINCT": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2"
                },
                "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1599117445,
          "current_audit_time": 1601358369,
          "rules": ["TAB_NO_TIMESTAMP"],
          "score": 90,
          "implement_advice": "",
          "audit": [{
            "target_id": 222284,
            "id": 364494,
            "name": "表没有日期字段",
            "risky": "middle",
            "description": "表没有date或timestamp类型的字段",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 222282,
          "name": "TEST2456",
          "table_name": "TEST2456",
          "type": "TABLE",
          "schema": "TEST",
          "report_id": 6376,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE TABLE \"TEST\".\"TEST2456\" \n   (\t\"A\" NUMBER(*,0), \n\t\"B\" VARCHAR2(2000), \n\t\"C\" BLOB, \n\t\"D\" LONG\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n LOB (\"C\") STORE AS BASICFILE (\n  TABLESPACE \"USERS\" ENABLE STORAGE IN ROW CHUNK 8192 RETENTION \n  NOCACHE LOGGING \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)) "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": null,
                  "DEGREE": "0",
                  "STATUS": "VALID",
                  "NUM_ROWS": null,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "SYS_IL0000026783C00003$$",
                  "INDEX_TYPE": "LOB",
                  "UNIQUENESS": "UNIQUE",
                  "LEAF_BLOCKS": null,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": null,
                  "LAST_ANALYZED": null,
                  "CLUSTERING_FACTOR": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "TABLE": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "OWNER": "TEST",
                  "BLOCKS": 0,
                  "DEGREE": "         1",
                  "NUM_ROWS": 0,
                  "TABLE_NAME": "TEST2456",
                  "AVG_ROW_LEN": 0,
                  "SAMPLE_SIZE": 0,
                  "GLOBAL_STATS": "YES",
                  "LAST_ANALYZED": "2020-06-24 22:01",
                  "TABLESPACE_NAME": "USERS"
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "OWNER": "VARCHAR2",
                  "BLOCKS": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TABLE_NAME": "VARCHAR2",
                  "AVG_ROW_LEN": "NUMBER",
                  "SAMPLE_SIZE": "NUMBER",
                  "GLOBAL_STATS": "VARCHAR2",
                  "LAST_ANALYZED": "VARCHAR2",
                  "TABLESPACE_NAME": "VARCHAR2"
                },
                "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
              }
            },
            "COLUMN": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "NULLABLE": "Y",
                  "COLUMN_ID": 1,
                  "DATA_TYPE": "NUMBER(,0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "A",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 2,
                  "DATA_TYPE": "VARCHAR2(2000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "B",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 3,
                  "DATA_TYPE": "BLOB(4000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "C",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 4,
                  "DATA_TYPE": "LONG(0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": null,
                  "COLUMN_NAME": "D",
                  "NUM_BUCKETS": null,
                  "NUM_DISTINCT": null,
                  "LAST_ANALYZED": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "NULLABLE": "VARCHAR2",
                  "COLUMN_ID": "NUMBER",
                  "DATA_TYPE": "VARCHAR2",
                  "HISTOGRAM": "VARCHAR2",
                  "NUM_NULLS": "NUMBER",
                  "COLUMN_NAME": "VARCHAR2",
                  "NUM_BUCKETS": "NUMBER",
                  "NUM_DISTINCT": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2"
                },
                "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1600925807,
          "current_audit_time": 1601358368,
          "rules": ["TAB_NO_TIMESTAMP"],
          "score": 90,
          "implement_advice": "",
          "audit": [{
            "target_id": 222282,
            "id": 364490,
            "name": "表没有日期字段",
            "risky": "middle",
            "description": "表没有date或timestamp类型的字段",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 222281,
          "name": "TEST2444",
          "table_name": "TEST2444",
          "type": "TABLE",
          "schema": "TEST",
          "report_id": 6376,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE TABLE \"TEST\".\"TEST2444\" \n   (\t\"A\" NUMBER(*,0), \n\t\"B\" VARCHAR2(2000), \n\t\"C\" BLOB, \n\t\"D\" LONG\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n LOB (\"C\") STORE AS BASICFILE (\n  TABLESPACE \"USERS\" ENABLE STORAGE IN ROW CHUNK 8192 RETENTION \n  NOCACHE LOGGING \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)) "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": null,
                  "DEGREE": "0",
                  "STATUS": "VALID",
                  "NUM_ROWS": null,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "SYS_IL0000026747C00003$$",
                  "INDEX_TYPE": "LOB",
                  "UNIQUENESS": "UNIQUE",
                  "LEAF_BLOCKS": null,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": null,
                  "LAST_ANALYZED": null,
                  "CLUSTERING_FACTOR": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "TABLE": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "OWNER": "TEST",
                  "BLOCKS": 0,
                  "DEGREE": "         1",
                  "NUM_ROWS": 0,
                  "TABLE_NAME": "TEST2444",
                  "AVG_ROW_LEN": 0,
                  "SAMPLE_SIZE": 0,
                  "GLOBAL_STATS": "YES",
                  "LAST_ANALYZED": "2020-06-24 22:01",
                  "TABLESPACE_NAME": "USERS"
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "OWNER": "VARCHAR2",
                  "BLOCKS": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TABLE_NAME": "VARCHAR2",
                  "AVG_ROW_LEN": "NUMBER",
                  "SAMPLE_SIZE": "NUMBER",
                  "GLOBAL_STATS": "VARCHAR2",
                  "LAST_ANALYZED": "VARCHAR2",
                  "TABLESPACE_NAME": "VARCHAR2"
                },
                "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
              }
            },
            "COLUMN": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "NULLABLE": "Y",
                  "COLUMN_ID": 1,
                  "DATA_TYPE": "NUMBER(,0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "A",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 2,
                  "DATA_TYPE": "VARCHAR2(2000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "B",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 3,
                  "DATA_TYPE": "BLOB(4000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "C",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 4,
                  "DATA_TYPE": "LONG(0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": null,
                  "COLUMN_NAME": "D",
                  "NUM_BUCKETS": null,
                  "NUM_DISTINCT": null,
                  "LAST_ANALYZED": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "NULLABLE": "VARCHAR2",
                  "COLUMN_ID": "NUMBER",
                  "DATA_TYPE": "VARCHAR2",
                  "HISTOGRAM": "VARCHAR2",
                  "NUM_NULLS": "NUMBER",
                  "COLUMN_NAME": "VARCHAR2",
                  "NUM_BUCKETS": "NUMBER",
                  "NUM_DISTINCT": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2"
                },
                "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1600925806,
          "current_audit_time": 1601358366,
          "rules": ["TAB_NO_TIMESTAMP"],
          "score": 90,
          "implement_advice": "",
          "audit": [{
            "target_id": 222281,
            "id": 364487,
            "name": "表没有日期字段",
            "risky": "middle",
            "description": "表没有date或timestamp类型的字段",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        },
        {
          "id": 222278,
          "name": "TEST2432",
          "table_name": "TEST2432",
          "type": "TABLE",
          "schema": "TEST",
          "report_id": 6376,
          "detail": {
            "DDL": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{"DDL": "\n  CREATE TABLE \"TEST\".\"TEST2432\" \n   (\t\"A\" NUMBER(*,0), \n\t\"B\" VARCHAR2(2000), \n\t\"C\" BLOB, \n\t\"D\" LONG\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n LOB (\"C\") STORE AS BASICFILE (\n  TABLESPACE \"USERS\" ENABLE STORAGE IN ROW CHUNK 8192 RETENTION \n  NOCACHE LOGGING \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)) "}],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {"DDL": "CLOB"},
                "column_sequence": ["DDL"]
              }
            },
            "INDEX": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "BLEVEL": null,
                  "DEGREE": "0",
                  "STATUS": "VALID",
                  "NUM_ROWS": null,
                  "TEMPORARY": "N",
                  "INDEX_NAME": "SYS_IL0000026711C00003$$",
                  "INDEX_TYPE": "LOB",
                  "UNIQUENESS": "UNIQUE",
                  "LEAF_BLOCKS": null,
                  "PARTITIONED": "NO",
                  "DISTINCT_KEYS": null,
                  "LAST_ANALYZED": null,
                  "CLUSTERING_FACTOR": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "BLEVEL": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "STATUS": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TEMPORARY": "VARCHAR2",
                  "INDEX_NAME": "VARCHAR2",
                  "INDEX_TYPE": "VARCHAR2",
                  "UNIQUENESS": "VARCHAR2",
                  "LEAF_BLOCKS": "NUMBER",
                  "PARTITIONED": "VARCHAR2",
                  "DISTINCT_KEYS": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2",
                  "CLUSTERING_FACTOR": "NUMBER"
                },
                "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
              }
            },
            "TABLE": {
              "id": 0,
              "tid": "",
              "type": 0,
              "result": {
                "EOF": false,
                "data": [{
                  "OWNER": "TEST",
                  "BLOCKS": 0,
                  "DEGREE": "         1",
                  "NUM_ROWS": 0,
                  "TABLE_NAME": "TEST2432",
                  "AVG_ROW_LEN": 0,
                  "SAMPLE_SIZE": 0,
                  "GLOBAL_STATS": "YES",
                  "LAST_ANALYZED": "2020-06-24 22:01",
                  "TABLESPACE_NAME": "USERS"
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "OWNER": "VARCHAR2",
                  "BLOCKS": "NUMBER",
                  "DEGREE": "VARCHAR2",
                  "NUM_ROWS": "NUMBER",
                  "TABLE_NAME": "VARCHAR2",
                  "AVG_ROW_LEN": "NUMBER",
                  "SAMPLE_SIZE": "NUMBER",
                  "GLOBAL_STATS": "VARCHAR2",
                  "LAST_ANALYZED": "VARCHAR2",
                  "TABLESPACE_NAME": "VARCHAR2"
                },
                "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
              }
            },
            "COLUMN": {
              "id": 0, "tid": "", "type": 0, "result": {
                "EOF": false,
                "data": [{
                  "NULLABLE": "Y",
                  "COLUMN_ID": 1,
                  "DATA_TYPE": "NUMBER(,0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "A",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 2,
                  "DATA_TYPE": "VARCHAR2(2000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "B",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 3,
                  "DATA_TYPE": "BLOB(4000)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": 0,
                  "COLUMN_NAME": "C",
                  "NUM_BUCKETS": 0,
                  "NUM_DISTINCT": 0,
                  "LAST_ANALYZED": "2020-06-24 22:01"
                }, {
                  "NULLABLE": "Y",
                  "COLUMN_ID": 4,
                  "DATA_TYPE": "LONG(0)",
                  "HISTOGRAM": "NONE",
                  "NUM_NULLS": null,
                  "COLUMN_NAME": "D",
                  "NUM_BUCKETS": null,
                  "NUM_DISTINCT": null,
                  "LAST_ANALYZED": null
                }],
                "type": "data",
                "output": "",
                "duration": 0,
                "column_type": {
                  "NULLABLE": "VARCHAR2",
                  "COLUMN_ID": "NUMBER",
                  "DATA_TYPE": "VARCHAR2",
                  "HISTOGRAM": "VARCHAR2",
                  "NUM_NULLS": "NUMBER",
                  "COLUMN_NAME": "VARCHAR2",
                  "NUM_BUCKETS": "NUMBER",
                  "NUM_DISTINCT": "NUMBER",
                  "LAST_ANALYZED": "VARCHAR2"
                },
                "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
              }
            }
          },
          "db_id": 288,
          "first_audit_time": 1600925804,
          "current_audit_time": 1601358365,
          "rules": ["TAB_NO_TIMESTAMP"],
          "score": 90,
          "implement_advice": "",
          "audit": [{
            "target_id": 222278,
            "id": 364484,
            "name": "表没有日期字段",
            "risky": "middle",
            "description": "表没有date或timestamp类型的字段",
            "status": "problem"
          }],
          "db_name": "oracle_test_1"
        }],
    },
    {
      "report_id": 6376,
      "name": "单表数据量过大",
      "description": "单表或单分区记录数量过大",
      "advice": "1.建议分区； 2.历史数据归档",
      "risky": "middle",
      "audit_type": "OBJECT",
      "cn_name": "单表数据量过大",
      "target_number": 7,
      "total": 5048,
      "ratio": 0.1,
      "detail": [{
        "id": 219620,
        "name": "T_P",
        "table_name": "T_P",
        "type": "TABLE",
        "schema": "ISQLAUDIT",
        "report_id": 6376,
        "detail": {
          "DDL": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{"DDL": "\n  CREATE TABLE \"ISQLAUDIT\".\"T_P\" \n   (\t\"ID\" NUMBER, \n\t\"OWNER\" VARCHAR2(123), \n\t\"NAME\" VARCHAR2(30), \n\t\"TYPE\" VARCHAR2(23), \n\t\"STATUS\" VARCHAR2(7), \n\t\"CREATED\" DATE, \n\t CONSTRAINT \"T_P_ID_PK\" PRIMARY KEY (\"ID\")\n  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\"  ENABLE\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" "}],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {"DDL": "CLOB"},
              "column_sequence": ["DDL"]
            }
          },
          "INDEX": {
            "id": 0, "tid": "", "type": 0, "result": {
              "EOF": false,
              "data": [{
                "BLEVEL": 1,
                "DEGREE": "1",
                "STATUS": "VALID",
                "NUM_ROWS": 2,
                "TEMPORARY": "N",
                "INDEX_NAME": "IDX_STATUS",
                "INDEX_TYPE": "BITMAP",
                "UNIQUENESS": "NONUNIQUE",
                "LEAF_BLOCKS": 1,
                "PARTITIONED": "NO",
                "DISTINCT_KEYS": 2,
                "LAST_ANALYZED": "2020-06-01 19:38",
                "CLUSTERING_FACTOR": 2
              }, {
                "BLEVEL": 2,
                "DEGREE": "1",
                "STATUS": "VALID",
                "NUM_ROWS": 14558,
                "TEMPORARY": "N",
                "INDEX_NAME": "IDX_CREATED",
                "INDEX_TYPE": "FUNCTION-BASED NORMAL",
                "UNIQUENESS": "NONUNIQUE",
                "LEAF_BLOCKS": 43,
                "PARTITIONED": "NO",
                "DISTINCT_KEYS": 17,
                "LAST_ANALYZED": "2020-06-01 19:38",
                "CLUSTERING_FACTOR": 119
              }, {
                "BLEVEL": 2,
                "DEGREE": "1",
                "STATUS": "VALID",
                "NUM_ROWS": 14558,
                "TEMPORARY": "N",
                "INDEX_NAME": "IDX_NAME",
                "INDEX_TYPE": "NORMAL",
                "UNIQUENESS": "NONUNIQUE",
                "LEAF_BLOCKS": 61,
                "PARTITIONED": "NO",
                "DISTINCT_KEYS": 11009,
                "LAST_ANALYZED": "2020-06-01 19:38",
                "CLUSTERING_FACTOR": 5365
              }, {
                "BLEVEL": 2,
                "DEGREE": "2",
                "STATUS": "VALID",
                "NUM_ROWS": 14558,
                "TEMPORARY": "N",
                "INDEX_NAME": "IDX_ID_NAME",
                "INDEX_TYPE": "NORMAL",
                "UNIQUENESS": "NONUNIQUE",
                "LEAF_BLOCKS": 70,
                "PARTITIONED": "NO",
                "DISTINCT_KEYS": 14558,
                "LAST_ANALYZED": "2020-06-01 19:38",
                "CLUSTERING_FACTOR": 110
              }, {
                "BLEVEL": 2,
                "DEGREE": "1",
                "STATUS": "VALID",
                "NUM_ROWS": 14558,
                "TEMPORARY": "N",
                "INDEX_NAME": "IDX_ID_OWNER",
                "INDEX_TYPE": "NORMAL",
                "UNIQUENESS": "NONUNIQUE",
                "LEAF_BLOCKS": 42,
                "PARTITIONED": "NO",
                "DISTINCT_KEYS": 14558,
                "LAST_ANALYZED": "2020-06-01 19:38",
                "CLUSTERING_FACTOR": 110
              }, {
                "BLEVEL": 2,
                "DEGREE": "1",
                "STATUS": "VALID",
                "NUM_ROWS": 14558,
                "TEMPORARY": "N",
                "INDEX_NAME": "IDX_OWNER",
                "INDEX_TYPE": "NORMAL",
                "UNIQUENESS": "NONUNIQUE",
                "LEAF_BLOCKS": 34,
                "PARTITIONED": "NO",
                "DISTINCT_KEYS": 18,
                "LAST_ANALYZED": "2020-06-01 19:38",
                "CLUSTERING_FACTOR": 251
              }, {
                "BLEVEL": 2,
                "DEGREE": "1",
                "STATUS": "VALID",
                "NUM_ROWS": 14558,
                "TEMPORARY": "N",
                "INDEX_NAME": "T_P_ID_PK",
                "INDEX_TYPE": "NORMAL",
                "UNIQUENESS": "UNIQUE",
                "LEAF_BLOCKS": 27,
                "PARTITIONED": "NO",
                "DISTINCT_KEYS": 14558,
                "LAST_ANALYZED": "2020-06-01 19:38",
                "CLUSTERING_FACTOR": 110
              }, {
                "BLEVEL": 2,
                "DEGREE": "1",
                "STATUS": "VALID",
                "NUM_ROWS": 14558,
                "TEMPORARY": "N",
                "INDEX_NAME": "IDX_TYPE",
                "INDEX_TYPE": "NORMAL",
                "UNIQUENESS": "NONUNIQUE",
                "LEAF_BLOCKS": 37,
                "PARTITIONED": "NO",
                "DISTINCT_KEYS": 33,
                "LAST_ANALYZED": "2020-06-01 19:38",
                "CLUSTERING_FACTOR": 612
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "BLEVEL": "NUMBER",
                "DEGREE": "VARCHAR2",
                "STATUS": "VARCHAR2",
                "NUM_ROWS": "NUMBER",
                "TEMPORARY": "VARCHAR2",
                "INDEX_NAME": "VARCHAR2",
                "INDEX_TYPE": "VARCHAR2",
                "UNIQUENESS": "VARCHAR2",
                "LEAF_BLOCKS": "NUMBER",
                "PARTITIONED": "VARCHAR2",
                "DISTINCT_KEYS": "NUMBER",
                "LAST_ANALYZED": "VARCHAR2",
                "CLUSTERING_FACTOR": "NUMBER"
              },
              "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
            }
          },
          "TABLE": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "OWNER": "ISQLAUDIT",
                "BLOCKS": 110,
                "DEGREE": "         1",
                "NUM_ROWS": 14558,
                "TABLE_NAME": "T_P",
                "AVG_ROW_LEN": 59,
                "SAMPLE_SIZE": 14558,
                "GLOBAL_STATS": "YES",
                "LAST_ANALYZED": "2020-06-01 19:38",
                "TABLESPACE_NAME": "USERS"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "OWNER": "VARCHAR2",
                "BLOCKS": "NUMBER",
                "DEGREE": "VARCHAR2",
                "NUM_ROWS": "NUMBER",
                "TABLE_NAME": "VARCHAR2",
                "AVG_ROW_LEN": "NUMBER",
                "SAMPLE_SIZE": "NUMBER",
                "GLOBAL_STATS": "VARCHAR2",
                "LAST_ANALYZED": "VARCHAR2",
                "TABLESPACE_NAME": "VARCHAR2"
              },
              "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
            }
          },
          "COLUMN": {
            "id": 0, "tid": "", "type": 0, "result": {
              "EOF": false,
              "data": [{
                "NULLABLE": "N",
                "COLUMN_ID": 1,
                "DATA_TYPE": "NUMBER(,)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "ID",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 14558,
                "LAST_ANALYZED": "2020-06-01 19:38"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 2,
                "DATA_TYPE": "VARCHAR2(123)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "OWNER",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 18,
                "LAST_ANALYZED": "2020-06-01 19:38"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 3,
                "DATA_TYPE": "VARCHAR2(30)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "NAME",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 11009,
                "LAST_ANALYZED": "2020-06-01 19:38"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 4,
                "DATA_TYPE": "VARCHAR2(23)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "TYPE",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 33,
                "LAST_ANALYZED": "2020-06-01 19:38"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 5,
                "DATA_TYPE": "VARCHAR2(7)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "STATUS",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 2,
                "LAST_ANALYZED": "2020-06-01 19:38"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 6,
                "DATA_TYPE": "DATE(7)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "CREATED",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 913,
                "LAST_ANALYZED": "2020-06-01 19:38"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": null,
                "DATA_TYPE": "VARCHAR2(4000)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "SYS_NC00007$",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 17,
                "LAST_ANALYZED": "2020-06-01 19:38"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "NULLABLE": "VARCHAR2",
                "COLUMN_ID": "NUMBER",
                "DATA_TYPE": "VARCHAR2",
                "HISTOGRAM": "VARCHAR2",
                "NUM_NULLS": "NUMBER",
                "COLUMN_NAME": "VARCHAR2",
                "NUM_BUCKETS": "NUMBER",
                "NUM_DISTINCT": "NUMBER",
                "LAST_ANALYZED": "VARCHAR2"
              },
              "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
            }
          },
          "CONSTRAINT": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "STATUS": "ENABLED",
                "POSITION": 1,
                "VALIDATED": "VALIDATED",
                "COLUMN_NAME": "ID",
                "CONSTRAINT_NAME": "T_P_ID_PK",
                "CONSTRAINT_TYPE": "P",
                "R_CONSTRAINT_NAME": null
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "STATUS": "VARCHAR2",
                "POSITION": "NUMBER",
                "VALIDATED": "VARCHAR2",
                "COLUMN_NAME": "VARCHAR2",
                "CONSTRAINT_NAME": "VARCHAR2",
                "CONSTRAINT_TYPE": "VARCHAR2",
                "R_CONSTRAINT_NAME": "VARCHAR2"
              },
              "column_sequence": ["CONSTRAINT_NAME", "CONSTRAINT_TYPE", "R_CONSTRAINT_NAME", "COLUMN_NAME", "POSITION", "STATUS", "VALIDATED"]
            }
          }
        },
        "db_id": 288,
        "first_audit_time": 1596782827,
        "current_audit_time": 1601357224,
        "rules": ["TAB_COUNT_RECORD", "TAB_IDX_PARAL_NO_EQU", "TAB_NO_TIMESTAMP"],
        "score": 70,
        "implement_advice": "",
        "audit": [{
          "target_id": 219620,
          "id": 360760,
          "name": "单表数据量过大",
          "risky": "middle",
          "description": "单表或单分区记录数量过大",
          "status": "problem"
        }, {
          "target_id": 219620,
          "id": 360776,
          "name": "表索引并行度不一",
          "risky": "middle",
          "description": "表与其对应索引设置的并行度不一致",
          "status": "problem"
        }, {
          "target_id": 219620,
          "id": 362830,
          "name": "表没有日期字段",
          "risky": "middle",
          "description": "表没有date或timestamp类型的字段",
          "status": "problem"
        }],
        "db_name": "oracle_test_1"
      }, {
        "id": 219619,
        "name": "T_C",
        "table_name": "T_C",
        "type": "TABLE",
        "schema": "ISQLAUDIT",
        "report_id": 6376,
        "detail": {
          "DDL": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{"DDL": "\n  CREATE TABLE \"ISQLAUDIT\".\"T_C\" \n   (\t\"ID\" NUMBER, \n\t\"FID\" NUMBER, \n\t\"NAME\" VARCHAR2(30), \n\t CONSTRAINT \"FK_T_C\" FOREIGN KEY (\"FID\")\n\t  REFERENCES \"ISQLAUDIT\".\"T_P\" (\"ID\") ENABLE\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" "}],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {"DDL": "CLOB"},
              "column_sequence": ["DDL"]
            }
          },
          "TABLE": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "OWNER": "ISQLAUDIT",
                "BLOCKS": 65,
                "DEGREE": "         1",
                "NUM_ROWS": 14558,
                "TABLE_NAME": "T_C",
                "AVG_ROW_LEN": 27,
                "SAMPLE_SIZE": 14558,
                "GLOBAL_STATS": "YES",
                "LAST_ANALYZED": "2020-06-01 19:38",
                "TABLESPACE_NAME": "USERS"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "OWNER": "VARCHAR2",
                "BLOCKS": "NUMBER",
                "DEGREE": "VARCHAR2",
                "NUM_ROWS": "NUMBER",
                "TABLE_NAME": "VARCHAR2",
                "AVG_ROW_LEN": "NUMBER",
                "SAMPLE_SIZE": "NUMBER",
                "GLOBAL_STATS": "VARCHAR2",
                "LAST_ANALYZED": "VARCHAR2",
                "TABLESPACE_NAME": "VARCHAR2"
              },
              "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
            }
          },
          "COLUMN": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "NULLABLE": "Y",
                "COLUMN_ID": 1,
                "DATA_TYPE": "NUMBER(,)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "ID",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 14558,
                "LAST_ANALYZED": "2020-06-01 19:38"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 2,
                "DATA_TYPE": "NUMBER(,)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "FID",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 1000,
                "LAST_ANALYZED": "2020-06-01 19:38"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 3,
                "DATA_TYPE": "VARCHAR2(30)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "NAME",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 11009,
                "LAST_ANALYZED": "2020-06-01 19:38"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "NULLABLE": "VARCHAR2",
                "COLUMN_ID": "NUMBER",
                "DATA_TYPE": "VARCHAR2",
                "HISTOGRAM": "VARCHAR2",
                "NUM_NULLS": "NUMBER",
                "COLUMN_NAME": "VARCHAR2",
                "NUM_BUCKETS": "NUMBER",
                "NUM_DISTINCT": "NUMBER",
                "LAST_ANALYZED": "VARCHAR2"
              },
              "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
            }
          },
          "CONSTRAINT": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "STATUS": "ENABLED",
                "POSITION": 1,
                "VALIDATED": "VALIDATED",
                "COLUMN_NAME": "FID",
                "CONSTRAINT_NAME": "FK_T_C",
                "CONSTRAINT_TYPE": "R",
                "R_CONSTRAINT_NAME": "T_P_ID_PK"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "STATUS": "VARCHAR2",
                "POSITION": "NUMBER",
                "VALIDATED": "VARCHAR2",
                "COLUMN_NAME": "VARCHAR2",
                "CONSTRAINT_NAME": "VARCHAR2",
                "CONSTRAINT_TYPE": "VARCHAR2",
                "R_CONSTRAINT_NAME": "VARCHAR2"
              },
              "column_sequence": ["CONSTRAINT_NAME", "CONSTRAINT_TYPE", "R_CONSTRAINT_NAME", "COLUMN_NAME", "POSITION", "STATUS", "VALIDATED"]
            }
          }
        },
        "db_id": 288,
        "first_audit_time": 1596782826,
        "current_audit_time": 1601357222,
        "rules": ["TAB_COUNT_RECORD", "TAB_EXISTS_FK", "TAB_MIS_PK"],
        "score": 75,
        "implement_advice": "",
        "audit": [{
          "target_id": 219619,
          "id": 366605,
          "name": "表无主键",
          "risky": "middle",
          "description": "主键是关系型数据库中唯一确定一条记录的依据,可强制表的实体完整性。表中没有主键约束",
          "status": "problem"
        }, {
          "target_id": 219619,
          "id": 360759,
          "name": "单表数据量过大",
          "risky": "middle",
          "description": "单表或单分区记录数量过大",
          "status": "problem"
        }, {
          "target_id": 219619,
          "id": 360767,
          "name": "使用了外键",
          "risky": "low",
          "description": "存在外键约束时，当对主表的记录进行update或delete时，为了校验从表上是否存在依赖该记录的数据。",
          "status": "problem"
        }],
        "db_name": "oracle_test_1"
      }, {
        "id": 218045,
        "name": "PART_TAB",
        "table_name": "PART_TAB",
        "type": "TABLE",
        "schema": "ISQLAUDIT",
        "report_id": 6376,
        "detail": {
          "DDL": {
            "id": 0, "tid": "", "type": 0, "result": {
              "EOF": false,
              "data": [{"DDL": "\n  CREATE TABLE \"ISQLAUDIT\".\"PART_TAB\" \n   (\t\"ID\" NUMBER(*,0), \n\t\"COL2\" NUMBER(*,0), \n\t\"COL3\" VARCHAR2(10)\n   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n  STORAGE(\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" \n  PARTITION BY RANGE (\"ID\") \n (PARTITION \"P1\"  VALUES LESS THAN (10000) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING \n  STORAGE(INITIAL 8388608 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" , \n PARTITION \"P2\"  VALUES LESS THAN (20000) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING \n  STORAGE(INITIAL 8388608 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" , \n PARTITION \"P3\"  VALUES LESS THAN (30000) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING \n  STORAGE(INITIAL 8388608 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" , \n PARTITION \"P4\"  VALUES LESS THAN (40000) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING \n  STORAGE(INITIAL 8388608 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" , \n PARTITION \"P5\"  VALUES LESS THAN (50000) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING \n  STORAGE(INITIAL 8388608 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" , \n PARTITION \"P6\"  VALUES LESS THAN (60000) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING \n  STORAGE(INITIAL 8388608 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" , \n PARTITION \"P7\"  VALUES LESS THAN (70000) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING \n  STORAGE(INITIAL 8388608 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" , \n PARTITION \"P8\"  VALUES LESS THAN (80000) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING \n  STORAGE(INITIAL 8388608 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" , \n PARTITION \"P9\"  VALUES LESS THAN (90000) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING \n  STORAGE(INITIAL 8388608 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" , \n PARTITION \"P10\"  VALUES LESS THAN (100000) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING \n  STORAGE(INITIAL 8388608 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" , \n PARTITION \"P11\"  VALUES LESS THAN (MAXVALUE) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING \n  STORAGE(INITIAL 8388608 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" ) "}],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {"DDL": "CLOB"},
              "column_sequence": ["DDL"]
            }
          },
          "INDEX": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "BLEVEL": 3,
                "DEGREE": "1",
                "STATUS": "VALID",
                "NUM_ROWS": 11986361,
                "TEMPORARY": "N",
                "INDEX_NAME": "IDX_COL3",
                "INDEX_TYPE": "NORMAL",
                "UNIQUENESS": "NONUNIQUE",
                "LEAF_BLOCKS": 38580,
                "PARTITIONED": "NO",
                "DISTINCT_KEYS": 11986361,
                "LAST_ANALYZED": "2020-06-01 19:38",
                "CLUSTERING_FACTOR": 2344339
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "BLEVEL": "NUMBER",
                "DEGREE": "VARCHAR2",
                "STATUS": "VARCHAR2",
                "NUM_ROWS": "NUMBER",
                "TEMPORARY": "VARCHAR2",
                "INDEX_NAME": "VARCHAR2",
                "INDEX_TYPE": "VARCHAR2",
                "UNIQUENESS": "VARCHAR2",
                "LEAF_BLOCKS": "NUMBER",
                "PARTITIONED": "VARCHAR2",
                "DISTINCT_KEYS": "NUMBER",
                "LAST_ANALYZED": "VARCHAR2",
                "CLUSTERING_FACTOR": "NUMBER"
              },
              "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
            }
          },
          "TABLE": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "OWNER": "ISQLAUDIT",
                "BLOCKS": 41689,
                "DEGREE": "         1",
                "NUM_ROWS": 12000000,
                "TABLE_NAME": "PART_TAB",
                "AVG_ROW_LEN": 20,
                "SAMPLE_SIZE": 12000000,
                "GLOBAL_STATS": "YES",
                "LAST_ANALYZED": "2020-06-01 19:38",
                "TABLESPACE_NAME": null
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "OWNER": "VARCHAR2",
                "BLOCKS": "NUMBER",
                "DEGREE": "VARCHAR2",
                "NUM_ROWS": "NUMBER",
                "TABLE_NAME": "VARCHAR2",
                "AVG_ROW_LEN": "NUMBER",
                "SAMPLE_SIZE": "NUMBER",
                "GLOBAL_STATS": "VARCHAR2",
                "LAST_ANALYZED": "VARCHAR2",
                "TABLESPACE_NAME": "VARCHAR2"
              },
              "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
            }
          },
          "COLUMN": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "NULLABLE": "Y",
                "COLUMN_ID": 1,
                "DATA_TYPE": "NUMBER(,0)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "ID",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 11986944,
                "LAST_ANALYZED": "2020-06-01 19:38"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 2,
                "DATA_TYPE": "NUMBER(,0)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "COL2",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 11986944,
                "LAST_ANALYZED": "2020-06-01 19:38"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 3,
                "DATA_TYPE": "VARCHAR2(10)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "COL3",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 12000000,
                "LAST_ANALYZED": "2020-06-01 19:38"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "NULLABLE": "VARCHAR2",
                "COLUMN_ID": "NUMBER",
                "DATA_TYPE": "VARCHAR2",
                "HISTOGRAM": "VARCHAR2",
                "NUM_NULLS": "NUMBER",
                "COLUMN_NAME": "VARCHAR2",
                "NUM_BUCKETS": "NUMBER",
                "NUM_DISTINCT": "NUMBER",
                "LAST_ANALYZED": "VARCHAR2"
              },
              "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
            }
          },
          "PARTITION": {
            "id": 0, "tid": "", "type": 0, "result": {
              "EOF": false,
              "data": [{
                "BLOCKS": 46,
                "NUM_ROWS": 9999,
                "COMPOSITE": "NO",
                "HIGH_VALUE": "10000",
                "COMPRESSION": "DISABLED",
                "PARTITION_NAME": "P1",
                "PARTITION_POSITION": 1,
                "SUBPARTITION_COUNT": 0
              }, {
                "BLOCKS": 46,
                "NUM_ROWS": 10000,
                "COMPOSITE": "NO",
                "HIGH_VALUE": "20000",
                "COMPRESSION": "DISABLED",
                "PARTITION_NAME": "P2",
                "PARTITION_POSITION": 2,
                "SUBPARTITION_COUNT": 0
              }, {
                "BLOCKS": 52,
                "NUM_ROWS": 10000,
                "COMPOSITE": "NO",
                "HIGH_VALUE": "30000",
                "COMPRESSION": "DISABLED",
                "PARTITION_NAME": "P3",
                "PARTITION_POSITION": 3,
                "SUBPARTITION_COUNT": 0
              }, {
                "BLOCKS": 46,
                "NUM_ROWS": 10000,
                "COMPOSITE": "NO",
                "HIGH_VALUE": "40000",
                "COMPRESSION": "DISABLED",
                "PARTITION_NAME": "P4",
                "PARTITION_POSITION": 4,
                "SUBPARTITION_COUNT": 0
              }, {
                "BLOCKS": 46,
                "NUM_ROWS": 10000,
                "COMPOSITE": "NO",
                "HIGH_VALUE": "50000",
                "COMPRESSION": "DISABLED",
                "PARTITION_NAME": "P5",
                "PARTITION_POSITION": 5,
                "SUBPARTITION_COUNT": 0
              }, {
                "BLOCKS": 46,
                "NUM_ROWS": 10000,
                "COMPOSITE": "NO",
                "HIGH_VALUE": "60000",
                "COMPRESSION": "DISABLED",
                "PARTITION_NAME": "P6",
                "PARTITION_POSITION": 6,
                "SUBPARTITION_COUNT": 0
              }, {
                "BLOCKS": 52,
                "NUM_ROWS": 10000,
                "COMPOSITE": "NO",
                "HIGH_VALUE": "70000",
                "COMPRESSION": "DISABLED",
                "PARTITION_NAME": "P7",
                "PARTITION_POSITION": 7,
                "SUBPARTITION_COUNT": 0
              }, {
                "BLOCKS": 46,
                "NUM_ROWS": 10000,
                "COMPOSITE": "NO",
                "HIGH_VALUE": "80000",
                "COMPRESSION": "DISABLED",
                "PARTITION_NAME": "P8",
                "PARTITION_POSITION": 8,
                "SUBPARTITION_COUNT": 0
              }, {
                "BLOCKS": 46,
                "NUM_ROWS": 10000,
                "COMPOSITE": "NO",
                "HIGH_VALUE": "90000",
                "COMPRESSION": "DISABLED",
                "PARTITION_NAME": "P9",
                "PARTITION_POSITION": 9,
                "SUBPARTITION_COUNT": 0
              }, {
                "BLOCKS": 50,
                "NUM_ROWS": 10000,
                "COMPOSITE": "NO",
                "HIGH_VALUE": "100000",
                "COMPRESSION": "DISABLED",
                "PARTITION_NAME": "P10",
                "PARTITION_POSITION": 10,
                "SUBPARTITION_COUNT": 0
              }, {
                "BLOCKS": 41213,
                "NUM_ROWS": 11900001,
                "COMPOSITE": "NO",
                "HIGH_VALUE": "MAXVALUE",
                "COMPRESSION": "DISABLED",
                "PARTITION_NAME": "P11",
                "PARTITION_POSITION": 11,
                "SUBPARTITION_COUNT": 0
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "BLOCKS": "NUMBER",
                "NUM_ROWS": "NUMBER",
                "COMPOSITE": "VARCHAR2",
                "HIGH_VALUE": "LONG",
                "COMPRESSION": "VARCHAR2",
                "PARTITION_NAME": "VARCHAR2",
                "PARTITION_POSITION": "NUMBER",
                "SUBPARTITION_COUNT": "NUMBER"
              },
              "column_sequence": ["PARTITION_POSITION", "PARTITION_NAME", "COMPOSITE", "NUM_ROWS", "BLOCKS", "SUBPARTITION_COUNT", "HIGH_VALUE", "COMPRESSION"]
            }
          }
        },
        "db_id": 288,
        "first_audit_time": 1596782827,
        "current_audit_time": 1601356763,
        "rules": ["PART_NONE_UNIQ_GL_IDX", "TAB_COUNT_RECORD", "TAB_MIS_PK"],
        "score": 75,
        "implement_advice": "",
        "audit": [{
          "target_id": 218045,
          "id": 360762,
          "name": "单表数据量过大",
          "risky": "middle",
          "description": "单表或单分区记录数量过大",
          "status": "problem"
        }, {
          "target_id": 218045,
          "id": 366601,
          "name": "表无主键",
          "risky": "middle",
          "description": "主键是关系型数据库中唯一确定一条记录的依据,可强制表的实体完整性。表中没有主键约束",
          "status": "problem"
        }, {
          "target_id": 218045,
          "id": 358740,
          "name": "分区无全局唯一索引",
          "risky": "low",
          "description": "分区无全局唯一索引",
          "status": "problem"
        }],
        "db_name": "oracle_test_1"
      }, {
        "id": 216036,
        "name": "TEST34",
        "table_name": "TEST34",
        "type": "TABLE",
        "schema": "DBMGR",
        "report_id": 6376,
        "detail": {
          "DDL": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{"DDL": "\n  CREATE TABLE \"DBMGR\".\"TEST34\" \n   (\t\"OWNER\" VARCHAR2(30), \n\t\"OBJECT_NAME\" VARCHAR2(128), \n\t\"SUBOBJECT_NAME\" VARCHAR2(30), \n\t\"OBJECT_ID\" NUMBER, \n\t\"DATA_OBJECT_ID\" NUMBER, \n\t\"OBJECT_TYPE\" VARCHAR2(19), \n\t\"CREATED\" DATE, \n\t\"LAST_DDL_TIME\" DATE, \n\t\"TIMESTAMP\" VARCHAR2(19), \n\t\"STATUS\" VARCHAR2(7), \n\t\"TEMPORARY\" VARCHAR2(1), \n\t\"GENERATED\" VARCHAR2(1), \n\t\"SECONDARY\" VARCHAR2(1), \n\t\"NAMESPACE\" NUMBER, \n\t\"EDITION_NAME\" VARCHAR2(30)\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" "}],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {"DDL": "CLOB"},
              "column_sequence": ["DDL"]
            }
          },
          "TABLE": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "OWNER": "DBMGR",
                "BLOCKS": 1516,
                "DEGREE": "         1",
                "NUM_ROWS": 112360,
                "TABLE_NAME": "TEST34",
                "AVG_ROW_LEN": 89,
                "SAMPLE_SIZE": 112360,
                "GLOBAL_STATS": "YES",
                "LAST_ANALYZED": "2020-04-24 22:00",
                "TABLESPACE_NAME": "USERS"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "OWNER": "VARCHAR2",
                "BLOCKS": "NUMBER",
                "DEGREE": "VARCHAR2",
                "NUM_ROWS": "NUMBER",
                "TABLE_NAME": "VARCHAR2",
                "AVG_ROW_LEN": "NUMBER",
                "SAMPLE_SIZE": "NUMBER",
                "GLOBAL_STATS": "VARCHAR2",
                "LAST_ANALYZED": "VARCHAR2",
                "TABLESPACE_NAME": "VARCHAR2"
              },
              "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
            }
          },
          "COLUMN": {
            "id": 0, "tid": "", "type": 0, "result": {
              "EOF": false,
              "data": [{
                "NULLABLE": "Y",
                "COLUMN_ID": 1,
                "DATA_TYPE": "VARCHAR2(30)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "OWNER",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 13,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 2,
                "DATA_TYPE": "VARCHAR2(128)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "OBJECT_NAME",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 10862,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 3,
                "DATA_TYPE": "VARCHAR2(30)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 110360,
                "COLUMN_NAME": "SUBOBJECT_NAME",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 84,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 4,
                "DATA_TYPE": "NUMBER(,)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 8,
                "COLUMN_NAME": "OBJECT_ID",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 14044,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 5,
                "DATA_TYPE": "NUMBER(,)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 88464,
                "COLUMN_NAME": "DATA_OBJECT_ID",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 2950,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 6,
                "DATA_TYPE": "VARCHAR2(19)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "OBJECT_TYPE",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 38,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 7,
                "DATA_TYPE": "DATE(7)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "CREATED",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 789,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 8,
                "DATA_TYPE": "DATE(7)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 8,
                "COLUMN_NAME": "LAST_DDL_TIME",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 797,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 9,
                "DATA_TYPE": "VARCHAR2(19)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 8,
                "COLUMN_NAME": "TIMESTAMP",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 812,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 10,
                "DATA_TYPE": "VARCHAR2(7)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "STATUS",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 1,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 11,
                "DATA_TYPE": "VARCHAR2(1)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "TEMPORARY",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 2,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 12,
                "DATA_TYPE": "VARCHAR2(1)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "GENERATED",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 2,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 13,
                "DATA_TYPE": "VARCHAR2(1)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "SECONDARY",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 1,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 14,
                "DATA_TYPE": "NUMBER(,)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 8,
                "COLUMN_NAME": "NAMESPACE",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 15,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 15,
                "DATA_TYPE": "VARCHAR2(30)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 112360,
                "COLUMN_NAME": "EDITION_NAME",
                "NUM_BUCKETS": 0,
                "NUM_DISTINCT": 0,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "NULLABLE": "VARCHAR2",
                "COLUMN_ID": "NUMBER",
                "DATA_TYPE": "VARCHAR2",
                "HISTOGRAM": "VARCHAR2",
                "NUM_NULLS": "NUMBER",
                "COLUMN_NAME": "VARCHAR2",
                "NUM_BUCKETS": "NUMBER",
                "NUM_DISTINCT": "NUMBER",
                "LAST_ANALYZED": "VARCHAR2"
              },
              "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
            }
          }
        },
        "db_id": 288,
        "first_audit_time": 1596717903,
        "current_audit_time": 1601356277,
        "rules": ["TAB_DATECOL", "TAB_COUNT_RECORD", "TAB_NO_TIMESTAMP", "TAB_MIS_PK"],
        "score": 60,
        "implement_advice": "",
        "audit": [{
          "target_id": 216036,
          "id": 362826,
          "name": "表没有日期字段",
          "risky": "middle",
          "description": "表没有date或timestamp类型的字段",
          "status": "problem"
        }, {
          "target_id": 216036,
          "id": 366595,
          "name": "表无主键",
          "risky": "middle",
          "description": "主键是关系型数据库中唯一确定一条记录的依据,可强制表的实体完整性。表中没有主键约束",
          "status": "problem"
        }, {
          "target_id": 216036,
          "id": 360751,
          "name": "单表数据量过大",
          "risky": "middle",
          "description": "单表或单分区记录数量过大",
          "status": "problem"
        }, {
          "target_id": 216036,
          "id": 356445,
          "name": "表缺少日期字段",
          "risky": "middle",
          "description": "日期字段使用number或varchar2",
          "status": "problem"
        }],
        "db_name": "oracle_test_1"
      }, {
        "id": 216033,
        "name": "T1",
        "table_name": "T1",
        "type": "TABLE",
        "schema": "TEST",
        "report_id": 6376,
        "detail": {
          "DDL": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{"DDL": "\n  CREATE TABLE \"TEST\".\"T1\" \n   (\t\"OWNER\" VARCHAR2(30), \n\t\"OBJECT_NAME\" VARCHAR2(128), \n\t\"SUBOBJECT_NAME\" VARCHAR2(30), \n\t\"OBJECT_ID\" NUMBER, \n\t\"DATA_OBJECT_ID\" NUMBER, \n\t\"OBJECT_TYPE\" VARCHAR2(19), \n\t\"CREATED\" DATE, \n\t\"LAST_DDL_TIME\" DATE, \n\t\"TIMESTAMP\" VARCHAR2(19), \n\t\"STATUS\" VARCHAR2(7), \n\t\"TEMPORARY\" VARCHAR2(1), \n\t\"GENERATED\" VARCHAR2(1), \n\t\"SECONDARY\" VARCHAR2(1), \n\t\"NAMESPACE\" NUMBER, \n\t\"EDITION_NAME\" VARCHAR2(30)\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" "}],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {"DDL": "CLOB"},
              "column_sequence": ["DDL"]
            }
          },
          "INDEX": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "BLEVEL": 2,
                "DEGREE": "1",
                "STATUS": "VALID",
                "NUM_ROWS": 14067,
                "TEMPORARY": "N",
                "INDEX_NAME": "IDX1",
                "INDEX_TYPE": "NORMAL",
                "UNIQUENESS": "NONUNIQUE",
                "LEAF_BLOCKS": 30,
                "PARTITIONED": "NO",
                "DISTINCT_KEYS": 14067,
                "LAST_ANALYZED": "2020-05-24 18:06",
                "CLUSTERING_FACTOR": 224
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "BLEVEL": "NUMBER",
                "DEGREE": "VARCHAR2",
                "STATUS": "VARCHAR2",
                "NUM_ROWS": "NUMBER",
                "TEMPORARY": "VARCHAR2",
                "INDEX_NAME": "VARCHAR2",
                "INDEX_TYPE": "VARCHAR2",
                "UNIQUENESS": "VARCHAR2",
                "LEAF_BLOCKS": "NUMBER",
                "PARTITIONED": "VARCHAR2",
                "DISTINCT_KEYS": "NUMBER",
                "LAST_ANALYZED": "VARCHAR2",
                "CLUSTERING_FACTOR": "NUMBER"
              },
              "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
            }
          },
          "TABLE": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "OWNER": "TEST",
                "BLOCKS": 196,
                "DEGREE": "         1",
                "NUM_ROWS": 14068,
                "TABLE_NAME": "T1",
                "AVG_ROW_LEN": 89,
                "SAMPLE_SIZE": 14068,
                "GLOBAL_STATS": "YES",
                "LAST_ANALYZED": "2020-05-24 18:06",
                "TABLESPACE_NAME": "USERS"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "OWNER": "VARCHAR2",
                "BLOCKS": "NUMBER",
                "DEGREE": "VARCHAR2",
                "NUM_ROWS": "NUMBER",
                "TABLE_NAME": "VARCHAR2",
                "AVG_ROW_LEN": "NUMBER",
                "SAMPLE_SIZE": "NUMBER",
                "GLOBAL_STATS": "VARCHAR2",
                "LAST_ANALYZED": "VARCHAR2",
                "TABLESPACE_NAME": "VARCHAR2"
              },
              "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
            }
          },
          "COLUMN": {
            "id": 0, "tid": "", "type": 0, "result": {
              "EOF": false,
              "data": [{
                "NULLABLE": "Y",
                "COLUMN_ID": 1,
                "DATA_TYPE": "VARCHAR2(30)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "OWNER",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 14,
                "LAST_ANALYZED": "2020-05-24 18:06"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 2,
                "DATA_TYPE": "VARCHAR2(128)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "OBJECT_NAME",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 10870,
                "LAST_ANALYZED": "2020-05-24 18:06"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 3,
                "DATA_TYPE": "VARCHAR2(30)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 13804,
                "COLUMN_NAME": "SUBOBJECT_NAME",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 91,
                "LAST_ANALYZED": "2020-05-24 18:06"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 4,
                "DATA_TYPE": "NUMBER(,)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 1,
                "COLUMN_NAME": "OBJECT_ID",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 14067,
                "LAST_ANALYZED": "2020-05-24 18:06"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 5,
                "DATA_TYPE": "NUMBER(,)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 11063,
                "COLUMN_NAME": "DATA_OBJECT_ID",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 2968,
                "LAST_ANALYZED": "2020-05-24 18:06"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 6,
                "DATA_TYPE": "VARCHAR2(19)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "OBJECT_TYPE",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 38,
                "LAST_ANALYZED": "2020-05-24 18:06"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 7,
                "DATA_TYPE": "DATE(7)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "CREATED",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 800,
                "LAST_ANALYZED": "2020-05-24 18:06"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 8,
                "DATA_TYPE": "DATE(7)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 1,
                "COLUMN_NAME": "LAST_DDL_TIME",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 812,
                "LAST_ANALYZED": "2020-05-24 18:06"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 9,
                "DATA_TYPE": "VARCHAR2(19)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 1,
                "COLUMN_NAME": "TIMESTAMP",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 830,
                "LAST_ANALYZED": "2020-05-24 18:06"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 10,
                "DATA_TYPE": "VARCHAR2(7)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "STATUS",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 1,
                "LAST_ANALYZED": "2020-05-24 18:06"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 11,
                "DATA_TYPE": "VARCHAR2(1)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "TEMPORARY",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 2,
                "LAST_ANALYZED": "2020-05-24 18:06"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 12,
                "DATA_TYPE": "VARCHAR2(1)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "GENERATED",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 2,
                "LAST_ANALYZED": "2020-05-24 18:06"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 13,
                "DATA_TYPE": "VARCHAR2(1)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "SECONDARY",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 1,
                "LAST_ANALYZED": "2020-05-24 18:06"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 14,
                "DATA_TYPE": "NUMBER(,)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 1,
                "COLUMN_NAME": "NAMESPACE",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 15,
                "LAST_ANALYZED": "2020-05-24 18:06"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 15,
                "DATA_TYPE": "VARCHAR2(30)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 14068,
                "COLUMN_NAME": "EDITION_NAME",
                "NUM_BUCKETS": 0,
                "NUM_DISTINCT": 0,
                "LAST_ANALYZED": "2020-05-24 18:06"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "NULLABLE": "VARCHAR2",
                "COLUMN_ID": "NUMBER",
                "DATA_TYPE": "VARCHAR2",
                "HISTOGRAM": "VARCHAR2",
                "NUM_NULLS": "NUMBER",
                "COLUMN_NAME": "VARCHAR2",
                "NUM_BUCKETS": "NUMBER",
                "NUM_DISTINCT": "NUMBER",
                "LAST_ANALYZED": "VARCHAR2"
              },
              "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
            }
          }
        },
        "db_id": 288,
        "first_audit_time": 1596782992,
        "current_audit_time": 1601356277,
        "rules": ["TAB_DATECOL", "TAB_COUNT_RECORD", "TAB_NO_TIMESTAMP", "TAB_MIS_PK"],
        "score": 60,
        "implement_advice": "",
        "audit": [{
          "target_id": 216033,
          "id": 362828,
          "name": "表没有日期字段",
          "risky": "middle",
          "description": "表没有date或timestamp类型的字段",
          "status": "problem"
        }, {
          "target_id": 216033,
          "id": 356442,
          "name": "表缺少日期字段",
          "risky": "middle",
          "description": "日期字段使用number或varchar2",
          "status": "problem"
        }, {
          "target_id": 216033,
          "id": 360756,
          "name": "单表数据量过大",
          "risky": "middle",
          "description": "单表或单分区记录数量过大",
          "status": "problem"
        }, {
          "target_id": 216033,
          "id": 366607,
          "name": "表无主键",
          "risky": "middle",
          "description": "主键是关系型数据库中唯一确定一条记录的依据,可强制表的实体完整性。表中没有主键约束",
          "status": "problem"
        }],
        "db_name": "oracle_test_1"
      }, {
        "id": 216031,
        "name": "TEST24",
        "table_name": "TEST24",
        "type": "TABLE",
        "schema": "DBMGR",
        "report_id": 6376,
        "detail": {
          "DDL": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{"DDL": "\n  CREATE TABLE \"DBMGR\".\"TEST24\" \n   (\t\"OWNER\" VARCHAR2(30), \n\t\"OBJECT_NAME\" VARCHAR2(128), \n\t\"SUBOBJECT_NAME\" VARCHAR2(30), \n\t\"OBJECT_ID\" NUMBER, \n\t\"DATA_OBJECT_ID\" NUMBER, \n\t\"OBJECT_TYPE\" VARCHAR2(19), \n\t\"CREATED\" DATE, \n\t\"LAST_DDL_TIME\" DATE, \n\t\"TIMESTAMP\" VARCHAR2(19), \n\t\"STATUS\" VARCHAR2(7), \n\t\"TEMPORARY\" VARCHAR2(1), \n\t\"GENERATED\" VARCHAR2(1), \n\t\"SECONDARY\" VARCHAR2(1), \n\t\"NAMESPACE\" NUMBER, \n\t\"EDITION_NAME\" VARCHAR2(30)\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" "}],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {"DDL": "CLOB"},
              "column_sequence": ["DDL"]
            }
          },
          "TABLE": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "OWNER": "DBMGR",
                "BLOCKS": 196,
                "DEGREE": "         1",
                "NUM_ROWS": 14038,
                "TABLE_NAME": "TEST24",
                "AVG_ROW_LEN": 91,
                "SAMPLE_SIZE": 14038,
                "GLOBAL_STATS": "YES",
                "LAST_ANALYZED": "2020-04-24 22:00",
                "TABLESPACE_NAME": "USERS"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "OWNER": "VARCHAR2",
                "BLOCKS": "NUMBER",
                "DEGREE": "VARCHAR2",
                "NUM_ROWS": "NUMBER",
                "TABLE_NAME": "VARCHAR2",
                "AVG_ROW_LEN": "NUMBER",
                "SAMPLE_SIZE": "NUMBER",
                "GLOBAL_STATS": "VARCHAR2",
                "LAST_ANALYZED": "VARCHAR2",
                "TABLESPACE_NAME": "VARCHAR2"
              },
              "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
            }
          },
          "COLUMN": {
            "id": 0, "tid": "", "type": 0, "result": {
              "EOF": false,
              "data": [{
                "NULLABLE": "Y",
                "COLUMN_ID": 1,
                "DATA_TYPE": "VARCHAR2(30)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "OWNER",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 1,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 2,
                "DATA_TYPE": "VARCHAR2(128)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "OBJECT_NAME",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 10855,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 3,
                "DATA_TYPE": "VARCHAR2(30)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 13788,
                "COLUMN_NAME": "SUBOBJECT_NAME",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 84,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 4,
                "DATA_TYPE": "NUMBER(,)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 1,
                "COLUMN_NAME": "OBJECT_ID",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 14037,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 5,
                "DATA_TYPE": "NUMBER(,)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 11058,
                "COLUMN_NAME": "DATA_OBJECT_ID",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 2943,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 6,
                "DATA_TYPE": "VARCHAR2(19)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "OBJECT_TYPE",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 38,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 7,
                "DATA_TYPE": "DATE(7)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "CREATED",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 787,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 8,
                "DATA_TYPE": "DATE(7)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 1,
                "COLUMN_NAME": "LAST_DDL_TIME",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 795,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 9,
                "DATA_TYPE": "VARCHAR2(19)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 1,
                "COLUMN_NAME": "TIMESTAMP",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 810,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 10,
                "DATA_TYPE": "VARCHAR2(7)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "STATUS",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 1,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 11,
                "DATA_TYPE": "VARCHAR2(1)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "TEMPORARY",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 2,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 12,
                "DATA_TYPE": "VARCHAR2(1)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "GENERATED",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 2,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 13,
                "DATA_TYPE": "VARCHAR2(1)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "SECONDARY",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 1,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 14,
                "DATA_TYPE": "NUMBER(,)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 1,
                "COLUMN_NAME": "NAMESPACE",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 15,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 15,
                "DATA_TYPE": "VARCHAR2(30)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 14038,
                "COLUMN_NAME": "EDITION_NAME",
                "NUM_BUCKETS": 0,
                "NUM_DISTINCT": 0,
                "LAST_ANALYZED": "2020-04-24 22:00"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "NULLABLE": "VARCHAR2",
                "COLUMN_ID": "NUMBER",
                "DATA_TYPE": "VARCHAR2",
                "HISTOGRAM": "VARCHAR2",
                "NUM_NULLS": "NUMBER",
                "COLUMN_NAME": "VARCHAR2",
                "NUM_BUCKETS": "NUMBER",
                "NUM_DISTINCT": "NUMBER",
                "LAST_ANALYZED": "VARCHAR2"
              },
              "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
            }
          }
        },
        "db_id": 288,
        "first_audit_time": 1596717903,
        "current_audit_time": 1601356275,
        "rules": ["TAB_DATECOL", "TAB_COUNT_RECORD", "TAB_MIS_PK"],
        "score": 70,
        "implement_advice": "",
        "audit": [{
          "target_id": 216031,
          "id": 360753,
          "name": "单表数据量过大",
          "risky": "middle",
          "description": "单表或单分区记录数量过大",
          "status": "problem"
        }, {
          "target_id": 216031,
          "id": 356440,
          "name": "表缺少日期字段",
          "risky": "middle",
          "description": "日期字段使用number或varchar2",
          "status": "problem"
        }, {
          "target_id": 216031,
          "id": 366590,
          "name": "表无主键",
          "risky": "middle",
          "description": "主键是关系型数据库中唯一确定一条记录的依据,可强制表的实体完整性。表中没有主键约束",
          "status": "problem"
        }],
        "db_name": "oracle_test_1"
      }, {
        "id": 216027,
        "name": "TEST14",
        "table_name": "TEST14",
        "type": "TABLE",
        "schema": "DBMGR",
        "report_id": 6376,
        "detail": {
          "DDL": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{"DDL": "\n  CREATE TABLE \"DBMGR\".\"TEST14\" \n   (\t\"OWNER\" VARCHAR2(30), \n\t\"OBJECT_NAME\" VARCHAR2(128), \n\t\"SUBOBJECT_NAME\" VARCHAR2(30), \n\t\"OBJECT_ID\" NUMBER, \n\t\"DATA_OBJECT_ID\" NUMBER, \n\t\"OBJECT_TYPE\" VARCHAR2(19), \n\t\"CREATED\" DATE, \n\t\"LAST_DDL_TIME\" DATE, \n\t\"TIMESTAMP\" VARCHAR2(19), \n\t\"STATUS\" VARCHAR2(7), \n\t\"TEMPORARY\" VARCHAR2(1), \n\t\"GENERATED\" VARCHAR2(1), \n\t\"SECONDARY\" VARCHAR2(1), \n\t\"NAMESPACE\" NUMBER, \n\t\"EDITION_NAME\" VARCHAR2(30)\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" "}],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {"DDL": "CLOB"},
              "column_sequence": ["DDL"]
            }
          },
          "INDEX": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "BLEVEL": 2,
                "DEGREE": "1",
                "STATUS": "VALID",
                "NUM_ROWS": 14025,
                "TEMPORARY": "N",
                "INDEX_NAME": "INDEX17",
                "INDEX_TYPE": "NORMAL",
                "UNIQUENESS": "NONUNIQUE",
                "LEAF_BLOCKS": 44,
                "PARTITIONED": "NO",
                "DISTINCT_KEYS": 14025,
                "LAST_ANALYZED": "2020-04-22 22:00",
                "CLUSTERING_FACTOR": 214
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "BLEVEL": "NUMBER",
                "DEGREE": "VARCHAR2",
                "STATUS": "VARCHAR2",
                "NUM_ROWS": "NUMBER",
                "TEMPORARY": "VARCHAR2",
                "INDEX_NAME": "VARCHAR2",
                "INDEX_TYPE": "VARCHAR2",
                "UNIQUENESS": "VARCHAR2",
                "LEAF_BLOCKS": "NUMBER",
                "PARTITIONED": "VARCHAR2",
                "DISTINCT_KEYS": "NUMBER",
                "LAST_ANALYZED": "VARCHAR2",
                "CLUSTERING_FACTOR": "NUMBER"
              },
              "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
            }
          },
          "TABLE": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "OWNER": "DBMGR",
                "BLOCKS": 196,
                "DEGREE": "         1",
                "NUM_ROWS": 14025,
                "TABLE_NAME": "TEST14",
                "AVG_ROW_LEN": 89,
                "SAMPLE_SIZE": 14025,
                "GLOBAL_STATS": "YES",
                "LAST_ANALYZED": "2020-04-22 22:00",
                "TABLESPACE_NAME": "USERS"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "OWNER": "VARCHAR2",
                "BLOCKS": "NUMBER",
                "DEGREE": "VARCHAR2",
                "NUM_ROWS": "NUMBER",
                "TABLE_NAME": "VARCHAR2",
                "AVG_ROW_LEN": "NUMBER",
                "SAMPLE_SIZE": "NUMBER",
                "GLOBAL_STATS": "VARCHAR2",
                "LAST_ANALYZED": "VARCHAR2",
                "TABLESPACE_NAME": "VARCHAR2"
              },
              "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
            }
          },
          "COLUMN": {
            "id": 0, "tid": "", "type": 0, "result": {
              "EOF": false,
              "data": [{
                "NULLABLE": "Y",
                "COLUMN_ID": 1,
                "DATA_TYPE": "VARCHAR2(30)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "OWNER",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 13,
                "LAST_ANALYZED": "2020-04-22 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 2,
                "DATA_TYPE": "VARCHAR2(128)",
                "HISTOGRAM": "HEIGHT BALANCED",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "OBJECT_NAME",
                "NUM_BUCKETS": 254,
                "NUM_DISTINCT": 10842,
                "LAST_ANALYZED": "2020-04-22 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 3,
                "DATA_TYPE": "VARCHAR2(30)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 13775,
                "COLUMN_NAME": "SUBOBJECT_NAME",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 84,
                "LAST_ANALYZED": "2020-04-22 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 4,
                "DATA_TYPE": "NUMBER(,)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 1,
                "COLUMN_NAME": "OBJECT_ID",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 14024,
                "LAST_ANALYZED": "2020-04-22 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 5,
                "DATA_TYPE": "NUMBER(,)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 11058,
                "COLUMN_NAME": "DATA_OBJECT_ID",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 2930,
                "LAST_ANALYZED": "2020-04-22 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 6,
                "DATA_TYPE": "VARCHAR2(19)",
                "HISTOGRAM": "FREQUENCY",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "OBJECT_TYPE",
                "NUM_BUCKETS": 38,
                "NUM_DISTINCT": 38,
                "LAST_ANALYZED": "2020-04-22 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 7,
                "DATA_TYPE": "DATE(7)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "CREATED",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 786,
                "LAST_ANALYZED": "2020-04-22 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 8,
                "DATA_TYPE": "DATE(7)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 1,
                "COLUMN_NAME": "LAST_DDL_TIME",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 794,
                "LAST_ANALYZED": "2020-04-22 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 9,
                "DATA_TYPE": "VARCHAR2(19)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 1,
                "COLUMN_NAME": "TIMESTAMP",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 809,
                "LAST_ANALYZED": "2020-04-22 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 10,
                "DATA_TYPE": "VARCHAR2(7)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "STATUS",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 1,
                "LAST_ANALYZED": "2020-04-22 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 11,
                "DATA_TYPE": "VARCHAR2(1)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "TEMPORARY",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 2,
                "LAST_ANALYZED": "2020-04-22 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 12,
                "DATA_TYPE": "VARCHAR2(1)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "GENERATED",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 2,
                "LAST_ANALYZED": "2020-04-22 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 13,
                "DATA_TYPE": "VARCHAR2(1)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "SECONDARY",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 1,
                "LAST_ANALYZED": "2020-04-22 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 14,
                "DATA_TYPE": "NUMBER(,)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 1,
                "COLUMN_NAME": "NAMESPACE",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 15,
                "LAST_ANALYZED": "2020-04-22 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 15,
                "DATA_TYPE": "VARCHAR2(30)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 14025,
                "COLUMN_NAME": "EDITION_NAME",
                "NUM_BUCKETS": 0,
                "NUM_DISTINCT": 0,
                "LAST_ANALYZED": "2020-04-22 22:00"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "NULLABLE": "VARCHAR2",
                "COLUMN_ID": "NUMBER",
                "DATA_TYPE": "VARCHAR2",
                "HISTOGRAM": "VARCHAR2",
                "NUM_NULLS": "NUMBER",
                "COLUMN_NAME": "VARCHAR2",
                "NUM_BUCKETS": "NUMBER",
                "NUM_DISTINCT": "NUMBER",
                "LAST_ANALYZED": "VARCHAR2"
              },
              "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
            }
          }
        },
        "db_id": 288,
        "first_audit_time": 1596717902,
        "current_audit_time": 1601356272,
        "rules": ["TAB_DATECOL", "TAB_COUNT_RECORD", "TAB_NO_TIMESTAMP", "TAB_MIS_PK"],
        "score": 60,
        "implement_advice": "",
        "audit": [{
          "target_id": 216027,
          "id": 366571,
          "name": "表无主键",
          "risky": "middle",
          "description": "主键是关系型数据库中唯一确定一条记录的依据,可强制表的实体完整性。表中没有主键约束",
          "status": "problem"
        }, {
          "target_id": 216027,
          "id": 362813,
          "name": "表没有日期字段",
          "risky": "middle",
          "description": "表没有date或timestamp类型的字段",
          "status": "problem"
        }, {
          "target_id": 216027,
          "id": 356436,
          "name": "表缺少日期字段",
          "risky": "middle",
          "description": "日期字段使用number或varchar2",
          "status": "problem"
        }, {
          "target_id": 216027,
          "id": 360754,
          "name": "单表数据量过大",
          "risky": "middle",
          "description": "单表或单分区记录数量过大",
          "status": "problem"
        }],
        "db_name": "oracle_test_1"
      }],
    }],
  report_low: [
    {
      "report_id": 6376,
      "name": "sql 使用hint",
      "description": "sql使用hint，解析生成执行计划时会受到hint影响",
      "advice": "关注sql hint是否存在风险",
      "risky": "low",
      "audit_type": "SQL",
      "cn_name": "sql 使用hint",
      "target_number": 13,
      "total": 17,
      "ratio": 76.5,
      "detail": [{
        "id": 32769,
        "sql_id": "9c8vtzdhnmvzg",
        "sql_type": "DQL",
        "report_id": 6376,
        "db_id": 288,
        "sql_text": "SELECT /* OPT_DYN_SAMP */ /*+ ALL_ROWS IGNORE_WHERE_CLAUSE NO_PARALLEL(SAMPLESUB) opt_param('parallel_execution_enabled', 'false') NO_PARALLEL_INDEX(SAMPLESUB) NO_SQL_TUNE */ NVL(SUM(C1),:\"SYS_B_00\"), NVL(SUM(C2),:\"SYS_B_01\"), COUNT(DISTINCT C3), NVL(SUM(CASE WHEN C3 IS NULL THEN :\"SYS_B_02\" ELSE :\"SYS_B_03\" END),:\"SYS_B_04\"), COUNT(DISTINCT C4), NVL(SUM(CASE WHEN C4 IS NULL THEN :\"SYS_B_05\" ELSE :\"SYS_B_06\" END),:\"SYS_B_07\"), COUNT(DISTINCT C5), NVL(SUM(CASE WHEN C5 IS NULL THEN :\"SYS_B_08\" ELSE :\"SYS_B_09\" END),:\"SYS_B_10\"), COUNT(DISTINCT C6), NVL(SUM(CASE WHEN C6 IS NULL THEN :\"SYS_B_11\" ELSE :\"SYS_B_12\" END),:\"SYS_B_13\") FROM (SELECT /*+ NO_PARALLEL(\"S\") FULL(\"S\") NO_PARALLEL_INDEX(\"S\") */ :\"SYS_B_14\" AS C1, :\"SYS_B_15\" AS C2, \"S\".\"NEED_AWR_SAMPLE\" AS C3, \"S\".\"SAMPLE_TIME\" AS C4, \"S\".\"SAMPLE_ID\" AS C5, \"S\".\"SAMPLE_ADDR\" AS C6 FROM \"SYS\".\"X$KEWASH\" \"S\") SAMPLESUB",
        "first_audit_time": 1596776846,
        "current_audit_time": 1601355674,
        "schema": "TEST",
        "source": "dynamic",
        "parent_id": 0,
        "status": "problem",
        "score": 95,
        "hc_path": "",
        "executions": 2,
        "elapsed_time": 59.5,
        "avg_elapsed_time": 29.75,
        "origin_type": "",
        "origin_name": "",
        "file_id": 0,
        "sensitive_table": "",
        "audit": [{
          "target_id": 32769,
          "id": 353824,
          "name": "sql 使用hint",
          "risky": "low",
          "description": "sql使用hint，解析生成执行计划时会受到hint影响",
          "status": "problem"
        }],
        "db_name": "oracle_test_1",
        "file": ""
      }, {
        "id": 32767,
        "sql_id": "gs6kxyq70bpcn",
        "sql_type": "DQL",
        "report_id": 6376,
        "db_id": 288,
        "sql_text": "SELECT /* OPT_DYN_SAMP */ /*+ ALL_ROWS IGNORE_WHERE_CLAUSE NO_PARALLEL(SAMPLESUB) opt_param('parallel_execution_enabled', 'false') NO_PARALLEL_INDEX(SAMPLESUB) NO_SQL_TUNE */ NVL(SUM(C1),:\"SYS_B_0\"), NVL(SUM(C2),:\"SYS_B_1\") FROM (SELECT /*+ IGNORE_WHERE_CLAUSE NO_PARALLEL(\"P\") FULL(\"P\") NO_PARALLEL_INDEX(\"P\") */ :\"SYS_B_2\" AS C1, CASE WHEN SUBSTR(\"P\".\"KQLFXPL_OPER\",:\"SYS_B_3\",:\"SYS_B_4\")=:\"SYS_B_5\" THEN :\"SYS_B_6\" ELSE :\"SYS_B_7\" END AS C2 FROM \"SYS\".\"X$KQLFXPL\" \"P\") SAMPLESUB",
        "first_audit_time": 1596776827,
        "current_audit_time": 1601355672,
        "schema": "TEST",
        "source": "dynamic",
        "parent_id": 0,
        "status": "problem",
        "score": 95,
        "hc_path": "",
        "executions": 6,
        "elapsed_time": 369.71,
        "avg_elapsed_time": 61.62,
        "origin_type": "",
        "origin_name": "",
        "file_id": 0,
        "sensitive_table": "",
        "audit": [{
          "target_id": 32767,
          "id": 353815,
          "name": "sql 使用hint",
          "risky": "low",
          "description": "sql使用hint，解析生成执行计划时会受到hint影响",
          "status": "problem"
        }],
        "db_name": "oracle_test_1",
        "file": ""
      }, {
        "id": 32764,
        "sql_id": "0cg3yh4wv3hnr",
        "sql_type": "DQL",
        "report_id": 6376,
        "db_id": 288,
        "sql_text": "SELECT /* OPT_DYN_SAMP */ /*+ ALL_ROWS IGNORE_WHERE_CLAUSE NO_PARALLEL(SAMPLESUB) opt_param('parallel_execution_enabled', 'false') NO_PARALLEL_INDEX(SAMPLESUB) NO_SQL_TUNE */ NVL(SUM(C1),:\"SYS_B_00\"), NVL(SUM(C2),:\"SYS_B_01\") FROM (SELECT /*+ IGNORE_WHERE_CLAUSE NO_PARALLEL(\"U2\") FULL(\"U2\") NO_PARALLEL_INDEX(\"U2\") */ :\"SYS_B_02\" AS C1, CASE WHEN \"U2\".\"TYPE#\"=:\"SYS_B_03\" AND \"U2\".\"SPARE2\"=TO_NUMBER(SYS_CONTEXT(:\"SYS_B_04\",:\"SYS_B_05\")) THEN :\"SYS_B_06\" ELSE :\"SYS_B_07\" END AS C2 FROM \"SYS\".\"USER$\" SAMPLE BLOCK (:\"SYS_B_08\" , :\"SYS_B_09\") SEED (:\"SYS_B_10\") \"U2\") SAMPLESUB",
        "first_audit_time": 1600318851,
        "current_audit_time": 1601355669,
        "schema": "TEST",
        "source": "dynamic",
        "parent_id": 0,
        "status": "problem",
        "score": 95,
        "hc_path": "",
        "executions": 6,
        "elapsed_time": 5.21,
        "avg_elapsed_time": 0.87,
        "origin_type": "",
        "origin_name": "",
        "file_id": 0,
        "sensitive_table": "",
        "audit": [{
          "target_id": 32764,
          "id": 353797,
          "name": "sql 使用hint",
          "risky": "low",
          "description": "sql使用hint，解析生成执行计划时会受到hint影响",
          "status": "problem"
        }],
        "db_name": "oracle_test_1",
        "file": ""
      }, {
        "id": 32759,
        "sql_id": "d7f04ppyd38rw",
        "sql_type": "DQL",
        "report_id": 6376,
        "db_id": 288,
        "sql_text": "SELECT /* OPT_DYN_SAMP */ /*+ ALL_ROWS IGNORE_WHERE_CLAUSE NO_PARALLEL(SAMPLESUB) opt_param('parallel_execution_enabled', 'false') NO_PARALLEL_INDEX(SAMPLESUB) NO_SQL_TUNE */ NVL(SUM(C1),:\"SYS_B_00\"), NVL(SUM(C2),:\"SYS_B_01\") FROM (SELECT /*+ IGNORE_WHERE_CLAUSE NO_PARALLEL(\"O\") FULL(\"O\") NO_PARALLEL_INDEX(\"O\") */ :\"SYS_B_02\" AS C1, CASE WHEN \"O\".\"LINKNAME\" IS NULL AND BITAND(\"O\".\"FLAGS\",:\"SYS_B_03\")=:\"SYS_B_04\" AND \"O\".\"TYPE#\"\u003c\u003e:\"SYS_B_05\" AND \"O\".\"NAME\"\u003c\u003e:\"SYS_B_06\" AND \"O\".\"NAME\"\u003c\u003e:\"SYS_B_07\" THEN :\"SYS_B_08\" ELSE :\"SYS_B_09\" END AS C2 FROM \"SYS\".\"OBJ$\" SAMPLE BLOCK (:\"SYS_B_10\" , :\"SYS_B_11\") SEED (:\"SYS_B_12\") \"O\") SAMPLESUB",
        "first_audit_time": 1596776783,
        "current_audit_time": 1601355667,
        "schema": "TEST",
        "source": "dynamic",
        "parent_id": 0,
        "status": "problem",
        "score": 95,
        "hc_path": "",
        "executions": 6,
        "elapsed_time": 6.68,
        "avg_elapsed_time": 1.11,
        "origin_type": "",
        "origin_name": "",
        "file_id": 0,
        "sensitive_table": "",
        "audit": [{
          "target_id": 32759,
          "id": 353786,
          "name": "sql 使用hint",
          "risky": "low",
          "description": "sql使用hint，解析生成执行计划时会受到hint影响",
          "status": "problem"
        }],
        "db_name": "oracle_test_1",
        "file": ""
      }, {
        "id": 32756,
        "sql_id": "26nuvfbjk2n6s",
        "sql_type": "DQL",
        "report_id": 6376,
        "db_id": 288,
        "sql_text": "SELECT /* OPT_DYN_SAMP */ /*+ ALL_ROWS IGNORE_WHERE_CLAUSE NO_PARALLEL(SAMPLESUB) opt_param('parallel_execution_enabled', 'false') NO_PARALLEL_INDEX(SAMPLESUB) NO_SQL_TUNE */ NVL(SUM(C1),:\"SYS_B_0\"), NVL(SUM(C2),:\"SYS_B_1\") FROM (SELECT /*+ IGNORE_WHERE_CLAUSE NO_PARALLEL(\"A\") FULL(\"A\") NO_PARALLEL_INDEX(\"A\") */ :\"SYS_B_2\" AS C1, CASE WHEN \"A\".\"SQL_PLAN_OPERATION\"=:\"SYS_B_3\" AND \"A\".\"CURRENT_OBJ#\"\u003e:\"SYS_B_4\" THEN :\"SYS_B_5\" ELSE :\"SYS_B_6\" END AS C2 FROM \"SYS\".\"X$ASH\" \"A\") SAMPLESUB",
        "first_audit_time": 1596776715,
        "current_audit_time": 1601355665,
        "schema": "TEST",
        "source": "dynamic",
        "parent_id": 0,
        "status": "problem",
        "score": 95,
        "hc_path": "",
        "executions": 4,
        "elapsed_time": 38.45,
        "avg_elapsed_time": 9.61,
        "origin_type": "",
        "origin_name": "",
        "file_id": 0,
        "sensitive_table": "",
        "audit": [{
          "target_id": 32756,
          "id": 353776,
          "name": "sql 使用hint",
          "risky": "low",
          "description": "sql使用hint，解析生成执行计划时会受到hint影响",
          "status": "problem"
        }],
        "db_name": "oracle_test_1",
        "file": ""
      }, {
        "id": 32754,
        "sql_id": "gm485dnr7ujya",
        "sql_type": "DQL",
        "report_id": 6376,
        "db_id": 288,
        "sql_text": "SELECT /* OPT_DYN_SAMP */ /*+ ALL_ROWS IGNORE_WHERE_CLAUSE NO_PARALLEL(SAMPLESUB) opt_param('parallel_execution_enabled', 'false') NO_PARALLEL_INDEX(SAMPLESUB) NO_SQL_TUNE */ NVL(SUM(C1),:\"SYS_B_00\"), NVL(SUM(C2),:\"SYS_B_01\") FROM (SELECT /*+ IGNORE_WHERE_CLAUSE NO_PARALLEL(\"U\") FULL(\"U\") NO_PARALLEL_INDEX(\"U\") */ :\"SYS_B_02\" AS C1, CASE WHEN \"U\".\"NAME\"\u003c\u003e:\"SYS_B_03\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_04\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_05\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_06\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_07\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_08\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_09\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_10\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_11\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_12\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_13\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_14\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_15\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_16\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_17\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_18\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_19\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_20\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_21\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_22\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_23\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_24\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_25\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_26\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_27\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_28\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_29\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_30\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_31\" AND \"U\".\"NAME\"\u003c\u003e:\"SYS_B_32\" THEN :\"SYS_B_33\" ELSE :\"SYS_B_34\" END AS C2 FROM \"SYS\".\"USER$\" SAMPLE BLOCK (:\"SYS_B_35\" , :\"SYS_B_36\") SEED (:\"SYS_B_37\") \"U\") SAMPLESUB",
        "first_audit_time": 1600318849,
        "current_audit_time": 1601355663,
        "schema": "TEST",
        "source": "dynamic",
        "parent_id": 0,
        "status": "problem",
        "score": 95,
        "hc_path": "",
        "executions": 12,
        "elapsed_time": 8.7,
        "avg_elapsed_time": 0.73,
        "origin_type": "",
        "origin_name": "",
        "file_id": 0,
        "sensitive_table": "",
        "audit": [{
          "target_id": 32754,
          "id": 353765,
          "name": "sql 使用hint",
          "risky": "low",
          "description": "sql使用hint，解析生成执行计划时会受到hint影响",
          "status": "problem"
        }],
        "db_name": "oracle_test_1",
        "file": ""
      }, {
        "id": 32750,
        "sql_id": "77s161gszuamq",
        "sql_type": "DQL",
        "report_id": 6376,
        "db_id": 288,
        "sql_text": "SELECT /* OPT_DYN_SAMP */ /*+ ALL_ROWS IGNORE_WHERE_CLAUSE NO_PARALLEL(SAMPLESUB) opt_param('parallel_execution_enabled', 'false') NO_PARALLEL_INDEX(SAMPLESUB) NO_SQL_TUNE */ NVL(SUM(C1),:\"SYS_B_00\"), NVL(SUM(C2),:\"SYS_B_01\"), NVL(SUM(C3),:\"SYS_B_02\") FROM (SELECT /*+ IGNORE_WHERE_CLAUSE NO_PARALLEL(\"SN\") FULL(\"SN\") NO_PARALLEL_INDEX(\"SN\") */ :\"SYS_B_03\" AS C1, CASE WHEN \"SN\".\"DBID\"=:\"SYS_B_04\" AND \"SN\".\"SNAP_ID\"\u003e=:\"SYS_B_05\" AND \"SN\".\"SNAP_ID\"\u003c=:\"SYS_B_06\" THEN :\"SYS_B_07\" ELSE :\"SYS_B_08\" END AS C2, CASE WHEN \"SN\".\"SNAP_ID\"\u003c=:\"SYS_B_09\" AND \"SN\".\"SNAP_ID\"\u003e=:\"SYS_B_10\" AND \"SN\".\"DBID\"=:\"SYS_B_11\" THEN :\"SYS_B_12\" ELSE :\"SYS_B_13\" END AS C3 FROM \"SYS\".\"WRM$_SNAPSHOT\" \"SN\") SAMPLESUB",
        "first_audit_time": 1596776696,
        "current_audit_time": 1601355661,
        "schema": "TEST",
        "source": "dynamic",
        "parent_id": 0,
        "status": "problem",
        "score": 90,
        "hc_path": "",
        "executions": 6,
        "elapsed_time": 2.82,
        "avg_elapsed_time": 0.47,
        "origin_type": "",
        "origin_name": "",
        "file_id": 0,
        "sensitive_table": "",
        "audit": [{
          "target_id": 32750,
          "id": 353748,
          "name": "全表扫描",
          "risky": "low",
          "description": "发现全表扫描",
          "status": "problem"
        }, {
          "target_id": 32750,
          "id": 353749,
          "name": "sql 使用hint",
          "risky": "low",
          "description": "sql使用hint，解析生成执行计划时会受到hint影响",
          "status": "problem"
        }],
        "db_name": "oracle_test_1",
        "file": ""
      }, {
        "id": 32745,
        "sql_id": "658wxs0ywjwwa",
        "sql_type": "DQL",
        "report_id": 6376,
        "db_id": 288,
        "sql_text": "SELECT /* OPT_DYN_SAMP */ /*+ ALL_ROWS IGNORE_WHERE_CLAUSE NO_PARALLEL(SAMPLESUB) opt_param('parallel_execution_enabled', 'false') NO_PARALLEL_INDEX(SAMPLESUB) NO_SQL_TUNE */ NVL(SUM(C1),:\"SYS_B_00\"), NVL(SUM(C2),:\"SYS_B_01\"), COUNT(DISTINCT C3), NVL(SUM(CASE WHEN C3 IS NULL THEN :\"SYS_B_02\" ELSE :\"SYS_B_03\" END),:\"SYS_B_04\"), COUNT(DISTINCT C4), NVL(SUM(CASE WHEN C4 IS NULL THEN :\"SYS_B_05\" ELSE :\"SYS_B_06\" END),:\"SYS_B_07\"), COUNT(DISTINCT C5), NVL(SUM(CASE WHEN C5 IS NULL THEN :\"SYS_B_08\" ELSE :\"SYS_B_09\" END),:\"SYS_B_10\"), COUNT(DISTINCT C6), NVL(SUM(CASE WHEN C6 IS NULL THEN :\"SYS_B_11\" ELSE :\"SYS_B_12\" END),:\"SYS_B_13\") FROM (SELECT /*+ IGNORE_WHERE_CLAUSE NO_PARALLEL(\"A\") FULL(\"A\") NO_PARALLEL_INDEX(\"A\") */ :\"SYS_B_14\" AS C1, CASE WHEN \"A\".\"SQL_PLAN_OPERATION\"=:\"SYS_B_15\" AND \"A\".\"CURRENT_OBJ#\"\u003e:\"SYS_B_16\" THEN :\"SYS_B_17\" ELSE :\"SYS_B_18\" END AS C2, \"A\".\"NEED_AWR_SAMPLE\" AS C3, \"A\".\"SAMPLE_TIME\" AS C4, \"A\".\"SAMPLE_ID\" AS C5, \"A\".\"SAMPLE_ADDR\" AS C6 FROM \"SYS\".\"X$ASH\" \"A\") SAMPLESUB",
        "first_audit_time": 1596776643,
        "current_audit_time": 1601355658,
        "schema": "TEST",
        "source": "dynamic",
        "parent_id": 0,
        "status": "problem",
        "score": 95,
        "hc_path": "",
        "executions": 2,
        "elapsed_time": 82.55,
        "avg_elapsed_time": 41.27,
        "origin_type": "",
        "origin_name": "",
        "file_id": 0,
        "sensitive_table": "",
        "audit": [{
          "target_id": 32745,
          "id": 353728,
          "name": "sql 使用hint",
          "risky": "low",
          "description": "sql使用hint，解析生成执行计划时会受到hint影响",
          "status": "problem"
        }],
        "db_name": "oracle_test_1",
        "file": ""
      }, {
        "id": 32741,
        "sql_id": "c55my4p3xxwmq",
        "sql_type": "DQL",
        "report_id": 6376,
        "db_id": 288,
        "sql_text": "SELECT /* OPT_DYN_SAMP */ /*+ ALL_ROWS IGNORE_WHERE_CLAUSE NO_PARALLEL(SAMPLESUB) opt_param('parallel_execution_enabled', 'false') NO_PARALLEL_INDEX(SAMPLESUB) NO_SQL_TUNE */ NVL(SUM(C1),:\"SYS_B_00\"), NVL(SUM(C2),:\"SYS_B_01\") FROM (SELECT /*+ IGNORE_WHERE_CLAUSE NO_PARALLEL(\"IU\") FULL(\"IU\") NO_PARALLEL_INDEX(\"IU\") */ :\"SYS_B_02\" AS C1, CASE WHEN \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_03\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_04\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_05\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_06\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_07\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_08\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_09\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_10\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_11\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_12\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_13\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_14\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_15\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_16\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_17\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_18\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_19\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_20\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_21\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_22\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_23\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_24\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_25\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_26\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_27\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_28\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_29\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_30\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_31\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_32\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_33\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_34\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_35\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_36\" AND \"IU\".\"NAME\"\u003c\u003e:\"SYS_B_37\" THEN :\"SYS_B_38\" ELSE :\"SYS_B_39\" END AS C2 FROM \"SYS\".\"USER$\" SAMPLE BLOCK (:\"SYS_B_40\" , :\"SYS_B_41\") SEED (:\"SYS_B_42\") \"IU\") SAMPLESUB",
        "first_audit_time": 1600318847,
        "current_audit_time": 1601355656,
        "schema": "TEST",
        "source": "dynamic",
        "parent_id": 0,
        "status": "problem",
        "score": 95,
        "hc_path": "",
        "executions": 4,
        "elapsed_time": 5.48,
        "avg_elapsed_time": 1.37,
        "origin_type": "",
        "origin_name": "",
        "file_id": 0,
        "sensitive_table": "",
        "audit": [{
          "target_id": 32741,
          "id": 353712,
          "name": "sql 使用hint",
          "risky": "low",
          "description": "sql使用hint，解析生成执行计划时会受到hint影响",
          "status": "problem"
        }],
        "db_name": "oracle_test_1",
        "file": ""
      }, {
        "id": 32738,
        "sql_id": "0s0drz3wz1bac",
        "sql_type": "DQL",
        "report_id": 6376,
        "db_id": 288,
        "sql_text": "SELECT /* OPT_DYN_SAMP */ /*+ ALL_ROWS IGNORE_WHERE_CLAUSE NO_PARALLEL(SAMPLESUB) opt_param('parallel_execution_enabled', 'false') NO_PARALLEL_INDEX(SAMPLESUB) NO_SQL_TUNE */ NVL(SUM(C1),:\"SYS_B_0\"), NVL(SUM(C2),:\"SYS_B_1\") FROM (SELECT /*+ IGNORE_WHERE_CLAUSE NO_PARALLEL(\"O2\") FULL(\"O2\") NO_PARALLEL_INDEX(\"O2\") */ :\"SYS_B_2\" AS C1, CASE WHEN \"O2\".\"TYPE#\"=:\"SYS_B_3\" THEN :\"SYS_B_4\" ELSE :\"SYS_B_5\" END AS C2 FROM \"SYS\".\"OBJ$\" SAMPLE BLOCK (:\"SYS_B_6\" , :\"SYS_B_7\") SEED (:\"SYS_B_8\") \"O2\") SAMPLESUB",
        "first_audit_time": 1596776567,
        "current_audit_time": 1601355654,
        "schema": "TEST",
        "source": "dynamic",
        "parent_id": 0,
        "status": "problem",
        "score": 95,
        "hc_path": "",
        "executions": 6,
        "elapsed_time": 8.07,
        "avg_elapsed_time": 1.35,
        "origin_type": "",
        "origin_name": "",
        "file_id": 0,
        "sensitive_table": "",
        "audit": [{
          "target_id": 32738,
          "id": 353696,
          "name": "sql 使用hint",
          "risky": "low",
          "description": "sql使用hint，解析生成执行计划时会受到hint影响",
          "status": "problem"
        }],
        "db_name": "oracle_test_1",
        "file": ""
      }, {
        "id": 32734,
        "sql_id": "gvu241u9314vt",
        "sql_type": "DQL",
        "report_id": 6376,
        "db_id": 288,
        "sql_text": "SELECT /* OPT_DYN_SAMP */ /*+ ALL_ROWS IGNORE_WHERE_CLAUSE NO_PARALLEL(SAMPLESUB) opt_param('parallel_execution_enabled', 'false') NO_PARALLEL_INDEX(SAMPLESUB) NO_SQL_TUNE */ NVL(SUM(C1),:\"SYS_B_00\"), NVL(SUM(C2),:\"SYS_B_01\") FROM (SELECT /*+ IGNORE_WHERE_CLAUSE NO_PARALLEL(\"I\") FULL(\"I\") NO_PARALLEL_INDEX(\"I\") */ :\"SYS_B_02\" AS C1, CASE WHEN (DECODE(BITAND(\"I\".\"PROPERTY\",:\"SYS_B_03\"),:\"SYS_B_04\",:\"SYS_B_05\",:\"SYS_B_06\")||DECODE(\"I\".\"TYPE#\",:\"SYS_B_07\",:\"SYS_B_08\"||DECODE(BITAND(\"I\".\"PROPERTY\",:\"SYS_B_09\"),:\"SYS_B_10\",:\"SYS_B_11\",:\"SYS_B_12\",:\"SYS_B_13\"),:\"SYS_B_14\",:\"SYS_B_15\",:\"SYS_B_16\",:\"SYS_B_17\",:\"SYS_B_18\",:\"SYS_B_19\",:\"SYS_B_20\",:\"SYS_B_21\",:\"SYS_B_22\",:\"SYS_B_23\",:\"SYS_B_24\",:\"SYS_B_25\",:\"SYS_B_26\",:\"SYS_B_27\",:\"SYS_B_28\",:\"SYS_B_29\") LIKE :\"SYS_B_30\" OR DECODE(BITAND(\"I\".\"PROPERTY\",:\"SYS_B_31\"),:\"SYS_B_32\",:\"SYS_B_33\",:\"SYS_B_34\")||DECODE(\"I\".\"TYPE#\",:\"SYS_B_35\",:\"SYS_B_36\"||DECODE(BITAND(\"I\".\"PROPERTY\",:\"SYS_B_37\"),:\"SYS_B_38\",:\"SYS_B_39\",:\"SYS_B_40\",:\"SYS_B_41\"),:\"SYS_B_42\",:\"SYS_B_43\",:\"SYS_B_44\",:\"SYS_B_45\",:\"SYS_B_46\",:\"SYS_B_47\",:\"SYS_B_48\",:\"SYS_B_49\",:\"SYS_B_50\",:\"SYS_B_51\",:\"SYS_B_52\",:\"SYS_B_53\",:\"SYS_B_54\",:\"SYS_B_55\",:\"SYS_B_56\",:\"SYS_B_57\")=:\"SYS_B_58\" OR DECODE(BITAND(\"I\".\"PROPERTY\",:\"SYS_B_59\"),:\"SYS_B_60\",:\"SYS_B_61\",:\"SYS_B_62\")||DECODE(\"I\".\"TYPE#\",:\"SYS_B_63\",:\"SYS_B_64\"||DECODE(BITAND(\"I\".\"PROPERTY\",:\"SYS_B_65\"),:\"SYS_B_66\",:\"SYS_B_67\",:\"SYS_B_68\",:\"SYS_B_69\"),:\"SYS_B_70\",:\"SYS_B_71\",:\"SYS_B_72\",:\"SYS_B_73\",:\"SYS_B_74\",:\"SYS_B_75\",:\"SYS_B_76\",:\"SYS_B_77\",:\"SYS_B_78\",:\"SYS_B_79\",:\"SYS_B_80\",:\"SYS_B_81\",:\"SYS_B_82\",:\"SYS_B_83\",:\"SYS_B_84\",:\"SYS_B_85\") LIKE :\"SYS_B_86\") AND BITAND(\"I\".\"FLAGS\",:\"SYS_B_87\")=:\"SYS_B_88\" THEN :\"SYS_B_89\" ELSE :\"SYS_B_90\" END AS C2 FROM \"SYS\".\"IND$\" SAMPLE BLOCK (:\"SYS_B_91\" , :\"SYS_B_92\") SEED (:\"SYS_B_93\") \"I\") SAMPLESUB",
        "first_audit_time": 1596776533,
        "current_audit_time": 1601355652,
        "schema": "TEST",
        "source": "dynamic",
        "parent_id": 0,
        "status": "problem",
        "score": 95,
        "hc_path": "",
        "executions": 4,
        "elapsed_time": 7.39,
        "avg_elapsed_time": 1.85,
        "origin_type": "",
        "origin_name": "",
        "file_id": 0,
        "sensitive_table": "",
        "audit": [{
          "target_id": 32734,
          "id": 353685,
          "name": "sql 使用hint",
          "risky": "low",
          "description": "sql使用hint，解析生成执行计划时会受到hint影响",
          "status": "problem"
        }],
        "db_name": "oracle_test_1",
        "file": ""
      }, {
        "id": 32730,
        "sql_id": "a164p2tj38z0g",
        "sql_type": "DQL",
        "report_id": 6376,
        "db_id": 288,
        "sql_text": "SELECT /* OPT_DYN_SAMP */ /*+ ALL_ROWS IGNORE_WHERE_CLAUSE NO_PARALLEL(SAMPLESUB) opt_param('parallel_execution_enabled', 'false') NO_PARALLEL_INDEX(SAMPLESUB) NO_SQL_TUNE */ NVL(SUM(C1),:\"SYS_B_0\"), NVL(SUM(C2),:\"SYS_B_1\") FROM (SELECT /*+ IGNORE_WHERE_CLAUSE NO_PARALLEL(\"WRH$_SQL_PLAN\") FULL(\"WRH$_SQL_PLAN\") NO_PARALLEL_INDEX(\"WRH$_SQL_PLAN\") */ :\"SYS_B_2\" AS C1, CASE WHEN \"WRH$_SQL_PLAN\".\"OPERATION\"=:\"SYS_B_3\" AND \"WRH$_SQL_PLAN\".\"DBID\"=:\"SYS_B_4\" THEN :\"SYS_B_5\" ELSE :\"SYS_B_6\" END AS C2 FROM \"SYS\".\"WRH$_SQL_PLAN\" SAMPLE BLOCK (:\"SYS_B_7\" , :\"SYS_B_8\") SEED (:\"SYS_B_9\") \"WRH$_SQL_PLAN\") SAMPLESUB",
        "first_audit_time": 1596776514,
        "current_audit_time": 1601355650,
        "schema": "TEST",
        "source": "dynamic",
        "parent_id": 0,
        "status": "problem",
        "score": 95,
        "hc_path": "",
        "executions": 6,
        "elapsed_time": 8.41,
        "avg_elapsed_time": 1.4,
        "origin_type": "",
        "origin_name": "",
        "file_id": 0,
        "sensitive_table": "",
        "audit": [{
          "target_id": 32730,
          "id": 353667,
          "name": "sql 使用hint",
          "risky": "low",
          "description": "sql使用hint，解析生成执行计划时会受到hint影响",
          "status": "problem"
        }],
        "db_name": "oracle_test_1",
        "file": ""
      }, {
        "id": 32721,
        "sql_id": "b7v0uzcs081z7",
        "sql_type": "DQL",
        "report_id": 6376,
        "db_id": 288,
        "sql_text": "SELECT /* OPT_DYN_SAMP */ /*+ ALL_ROWS IGNORE_WHERE_CLAUSE NO_PARALLEL(SAMPLESUB) opt_param('parallel_execution_enabled', 'false') NO_PARALLEL_INDEX(SAMPLESUB) NO_SQL_TUNE */ NVL(SUM(C1),:\"SYS_B_0\"), NVL(SUM(C2),:\"SYS_B_1\") FROM (SELECT /*+ NO_PARALLEL(\"S\") FULL(\"S\") NO_PARALLEL_INDEX(\"S\") */ :\"SYS_B_2\" AS C1, :\"SYS_B_3\" AS C2 FROM \"SYS\".\"X$KEWASH\" \"S\") SAMPLESUB",
        "first_audit_time": 1596776409,
        "current_audit_time": 1601355646,
        "schema": "TEST",
        "source": "dynamic",
        "parent_id": 0,
        "status": "problem",
        "score": 95,
        "hc_path": "",
        "executions": 4,
        "elapsed_time": 8.61,
        "avg_elapsed_time": 2.15,
        "origin_type": "",
        "origin_name": "",
        "file_id": 0,
        "sensitive_table": "",
        "audit": [{
          "target_id": 32721,
          "id": 353632,
          "name": "sql 使用hint",
          "risky": "low",
          "description": "sql使用hint，解析生成执行计划时会受到hint影响",
          "status": "problem"
        }],
        "db_name": "oracle_test_1",
        "file": ""
      }],
    }, {
      "report_id": 6376,
      "name": "主键未命名",
      "description": "主键没有命名(使用SYS_C开头系统命名)",
      "advice": "建议遵循规范，人工命名",
      "risky": "low",
      "audit_type": "OBJECT",
      "cn_name": "主键未命名",
      "target_number": 4,
      "total": 5048,
      "ratio": 0.1,
      "detail": [{
        "id": 221578,
        "name": "ORDERS2",
        "table_name": "ORDERS2",
        "type": "TABLE",
        "schema": "USER2",
        "report_id": 6376,
        "detail": {
          "DDL": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{"DDL": "\n  CREATE TABLE \"USER2\".\"ORDERS2\" \n   (\t\"ID\" NUMBER(6,0), \n\t\"ODATE\" DATE, \n\t\"CCODE\" NUMBER(6,0), \n\t\"OAMT\" NUMBER(10,2), \n\t PRIMARY KEY (\"ID\")\n  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"TEST\"  ENABLE\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"TEST\" "}],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {"DDL": "CLOB"},
              "column_sequence": ["DDL"]
            }
          },
          "INDEX": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "BLEVEL": 1,
                "DEGREE": "1",
                "STATUS": "VALID",
                "NUM_ROWS": 4,
                "TEMPORARY": "N",
                "INDEX_NAME": "SYS_C003979",
                "INDEX_TYPE": "NORMAL",
                "UNIQUENESS": "UNIQUE",
                "LEAF_BLOCKS": 1,
                "PARTITIONED": "NO",
                "DISTINCT_KEYS": 4,
                "LAST_ANALYZED": "2019-10-18 22:00",
                "CLUSTERING_FACTOR": 1
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "BLEVEL": "NUMBER",
                "DEGREE": "VARCHAR2",
                "STATUS": "VARCHAR2",
                "NUM_ROWS": "NUMBER",
                "TEMPORARY": "VARCHAR2",
                "INDEX_NAME": "VARCHAR2",
                "INDEX_TYPE": "VARCHAR2",
                "UNIQUENESS": "VARCHAR2",
                "LEAF_BLOCKS": "NUMBER",
                "PARTITIONED": "VARCHAR2",
                "DISTINCT_KEYS": "NUMBER",
                "LAST_ANALYZED": "VARCHAR2",
                "CLUSTERING_FACTOR": "NUMBER"
              },
              "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
            }
          },
          "TABLE": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "OWNER": "USER2",
                "BLOCKS": 5,
                "DEGREE": "         1",
                "NUM_ROWS": 4,
                "TABLE_NAME": "ORDERS2",
                "AVG_ROW_LEN": 13,
                "SAMPLE_SIZE": 4,
                "GLOBAL_STATS": "YES",
                "LAST_ANALYZED": "2019-10-18 22:00",
                "TABLESPACE_NAME": "TEST"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "OWNER": "VARCHAR2",
                "BLOCKS": "NUMBER",
                "DEGREE": "VARCHAR2",
                "NUM_ROWS": "NUMBER",
                "TABLE_NAME": "VARCHAR2",
                "AVG_ROW_LEN": "NUMBER",
                "SAMPLE_SIZE": "NUMBER",
                "GLOBAL_STATS": "VARCHAR2",
                "LAST_ANALYZED": "VARCHAR2",
                "TABLESPACE_NAME": "VARCHAR2"
              },
              "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
            }
          },
          "COLUMN": {
            "id": 0, "tid": "", "type": 0, "result": {
              "EOF": false,
              "data": [{
                "NULLABLE": "N",
                "COLUMN_ID": 1,
                "DATA_TYPE": "NUMBER(6,0)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "ID",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 4,
                "LAST_ANALYZED": "2019-10-18 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 2,
                "DATA_TYPE": "DATE(7)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 2,
                "COLUMN_NAME": "ODATE",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 2,
                "LAST_ANALYZED": "2019-10-18 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 3,
                "DATA_TYPE": "NUMBER(6,0)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 2,
                "COLUMN_NAME": "CCODE",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 1,
                "LAST_ANALYZED": "2019-10-18 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 4,
                "DATA_TYPE": "NUMBER(10,2)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 1,
                "COLUMN_NAME": "OAMT",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 1,
                "LAST_ANALYZED": "2019-10-18 22:00"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "NULLABLE": "VARCHAR2",
                "COLUMN_ID": "NUMBER",
                "DATA_TYPE": "VARCHAR2",
                "HISTOGRAM": "VARCHAR2",
                "NUM_NULLS": "NUMBER",
                "COLUMN_NAME": "VARCHAR2",
                "NUM_BUCKETS": "NUMBER",
                "NUM_DISTINCT": "NUMBER",
                "LAST_ANALYZED": "VARCHAR2"
              },
              "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
            }
          },
          "CONSTRAINT": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "STATUS": "ENABLED",
                "POSITION": 1,
                "VALIDATED": "VALIDATED",
                "COLUMN_NAME": "ID",
                "CONSTRAINT_NAME": "SYS_C003979",
                "CONSTRAINT_TYPE": "P",
                "R_CONSTRAINT_NAME": null
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "STATUS": "VARCHAR2",
                "POSITION": "NUMBER",
                "VALIDATED": "VARCHAR2",
                "COLUMN_NAME": "VARCHAR2",
                "CONSTRAINT_NAME": "VARCHAR2",
                "CONSTRAINT_TYPE": "VARCHAR2",
                "R_CONSTRAINT_NAME": "VARCHAR2"
              },
              "column_sequence": ["CONSTRAINT_NAME", "CONSTRAINT_TYPE", "R_CONSTRAINT_NAME", "COLUMN_NAME", "POSITION", "STATUS", "VALIDATED"]
            }
          }
        },
        "db_id": 288,
        "first_audit_time": 1599117712,
        "current_audit_time": 1601357751,
        "rules": ["TAB_NO_TIMESTAMP", "TAB_PK_SYSNAME"],
        "score": 85,
        "implement_advice": "",
        "audit": [{
          "target_id": 221578,
          "id": 362802,
          "name": "表没有日期字段",
          "risky": "middle",
          "description": "表没有date或timestamp类型的字段",
          "status": "problem"
        }, {
          "target_id": 221578,
          "id": 364537,
          "name": "主键未命名",
          "risky": "low",
          "description": "主键没有命名(使用SYS_C开头系统命名)",
          "status": "problem"
        }],
        "db_name": "oracle_test_1"
      }, {
        "id": 221577,
        "name": "ORDERS1",
        "table_name": "ORDERS1",
        "type": "TABLE",
        "schema": "USER2",
        "report_id": 6376,
        "detail": {
          "DDL": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{"DDL": "\n  CREATE TABLE \"USER2\".\"ORDERS1\" \n   (\t\"OID\" NUMBER(6,0), \n\t\"ODATE\" DATE, \n\t\"CCODE\" NUMBER(6,0), \n\t\"OAMT\" NUMBER(10,2), \n\t PRIMARY KEY (\"OID\")\n  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"TEST\"  ENABLE\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"TEST\" "}],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {"DDL": "CLOB"},
              "column_sequence": ["DDL"]
            }
          },
          "INDEX": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "BLEVEL": 1,
                "DEGREE": "1",
                "STATUS": "VALID",
                "NUM_ROWS": 4,
                "TEMPORARY": "N",
                "INDEX_NAME": "SYS_C003978",
                "INDEX_TYPE": "NORMAL",
                "UNIQUENESS": "UNIQUE",
                "LEAF_BLOCKS": 1,
                "PARTITIONED": "NO",
                "DISTINCT_KEYS": 4,
                "LAST_ANALYZED": "2019-10-18 22:00",
                "CLUSTERING_FACTOR": 1
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "BLEVEL": "NUMBER",
                "DEGREE": "VARCHAR2",
                "STATUS": "VARCHAR2",
                "NUM_ROWS": "NUMBER",
                "TEMPORARY": "VARCHAR2",
                "INDEX_NAME": "VARCHAR2",
                "INDEX_TYPE": "VARCHAR2",
                "UNIQUENESS": "VARCHAR2",
                "LEAF_BLOCKS": "NUMBER",
                "PARTITIONED": "VARCHAR2",
                "DISTINCT_KEYS": "NUMBER",
                "LAST_ANALYZED": "VARCHAR2",
                "CLUSTERING_FACTOR": "NUMBER"
              },
              "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
            }
          },
          "TABLE": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "OWNER": "USER2",
                "BLOCKS": 5,
                "DEGREE": "         1",
                "NUM_ROWS": 4,
                "TABLE_NAME": "ORDERS1",
                "AVG_ROW_LEN": 11,
                "SAMPLE_SIZE": 4,
                "GLOBAL_STATS": "YES",
                "LAST_ANALYZED": "2019-10-18 22:00",
                "TABLESPACE_NAME": "TEST"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "OWNER": "VARCHAR2",
                "BLOCKS": "NUMBER",
                "DEGREE": "VARCHAR2",
                "NUM_ROWS": "NUMBER",
                "TABLE_NAME": "VARCHAR2",
                "AVG_ROW_LEN": "NUMBER",
                "SAMPLE_SIZE": "NUMBER",
                "GLOBAL_STATS": "VARCHAR2",
                "LAST_ANALYZED": "VARCHAR2",
                "TABLESPACE_NAME": "VARCHAR2"
              },
              "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
            }
          },
          "COLUMN": {
            "id": 0, "tid": "", "type": 0, "result": {
              "EOF": false,
              "data": [{
                "NULLABLE": "N",
                "COLUMN_ID": 1,
                "DATA_TYPE": "NUMBER(6,0)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "OID",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 4,
                "LAST_ANALYZED": "2019-10-18 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 2,
                "DATA_TYPE": "DATE(7)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 3,
                "COLUMN_NAME": "ODATE",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 1,
                "LAST_ANALYZED": "2019-10-18 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 3,
                "DATA_TYPE": "NUMBER(6,0)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 2,
                "COLUMN_NAME": "CCODE",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 1,
                "LAST_ANALYZED": "2019-10-18 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 4,
                "DATA_TYPE": "NUMBER(10,2)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "OAMT",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 1,
                "LAST_ANALYZED": "2019-10-18 22:00"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "NULLABLE": "VARCHAR2",
                "COLUMN_ID": "NUMBER",
                "DATA_TYPE": "VARCHAR2",
                "HISTOGRAM": "VARCHAR2",
                "NUM_NULLS": "NUMBER",
                "COLUMN_NAME": "VARCHAR2",
                "NUM_BUCKETS": "NUMBER",
                "NUM_DISTINCT": "NUMBER",
                "LAST_ANALYZED": "VARCHAR2"
              },
              "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
            }
          },
          "CONSTRAINT": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "STATUS": "ENABLED",
                "POSITION": 1,
                "VALIDATED": "VALIDATED",
                "COLUMN_NAME": "OID",
                "CONSTRAINT_NAME": "SYS_C003978",
                "CONSTRAINT_TYPE": "P",
                "R_CONSTRAINT_NAME": null
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "STATUS": "VARCHAR2",
                "POSITION": "NUMBER",
                "VALIDATED": "VARCHAR2",
                "COLUMN_NAME": "VARCHAR2",
                "CONSTRAINT_NAME": "VARCHAR2",
                "CONSTRAINT_TYPE": "VARCHAR2",
                "R_CONSTRAINT_NAME": "VARCHAR2"
              },
              "column_sequence": ["CONSTRAINT_NAME", "CONSTRAINT_TYPE", "R_CONSTRAINT_NAME", "COLUMN_NAME", "POSITION", "STATUS", "VALIDATED"]
            }
          }
        },
        "db_id": 288,
        "first_audit_time": 1599117710,
        "current_audit_time": 1601357748,
        "rules": ["TAB_NO_TIMESTAMP", "TAB_PK_SYSNAME"],
        "score": 85,
        "implement_advice": "",
        "audit": [{
          "target_id": 221577,
          "id": 362801,
          "name": "表没有日期字段",
          "risky": "middle",
          "description": "表没有date或timestamp类型的字段",
          "status": "problem"
        }, {
          "target_id": 221577,
          "id": 364535,
          "name": "主键未命名",
          "risky": "low",
          "description": "主键没有命名(使用SYS_C开头系统命名)",
          "status": "problem"
        }],
        "db_name": "oracle_test_1"
      }, {
        "id": 221575,
        "name": "ORDERS",
        "table_name": "ORDERS",
        "type": "TABLE",
        "schema": "USER2",
        "report_id": 6376,
        "detail": {
          "DDL": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{"DDL": "\n  CREATE TABLE \"USER2\".\"ORDERS\" \n   (\t\"OID\" NUMBER(6,0), \n\t\"ODATE\" DATE, \n\t\"CCODE\" NUMBER(6,0), \n\t\"OAMT\" NUMBER(10,2), \n\t PRIMARY KEY (\"OID\")\n  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\"  ENABLE\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" "}],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {"DDL": "CLOB"},
              "column_sequence": ["DDL"]
            }
          },
          "INDEX": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "BLEVEL": 1,
                "DEGREE": "1",
                "STATUS": "VALID",
                "NUM_ROWS": 4,
                "TEMPORARY": "N",
                "INDEX_NAME": "SYS_C003977",
                "INDEX_TYPE": "NORMAL",
                "UNIQUENESS": "UNIQUE",
                "LEAF_BLOCKS": 1,
                "PARTITIONED": "NO",
                "DISTINCT_KEYS": 4,
                "LAST_ANALYZED": "2019-10-18 22:00",
                "CLUSTERING_FACTOR": 1
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "BLEVEL": "NUMBER",
                "DEGREE": "VARCHAR2",
                "STATUS": "VARCHAR2",
                "NUM_ROWS": "NUMBER",
                "TEMPORARY": "VARCHAR2",
                "INDEX_NAME": "VARCHAR2",
                "INDEX_TYPE": "VARCHAR2",
                "UNIQUENESS": "VARCHAR2",
                "LEAF_BLOCKS": "NUMBER",
                "PARTITIONED": "VARCHAR2",
                "DISTINCT_KEYS": "NUMBER",
                "LAST_ANALYZED": "VARCHAR2",
                "CLUSTERING_FACTOR": "NUMBER"
              },
              "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
            }
          },
          "TABLE": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "OWNER": "USER2",
                "BLOCKS": 5,
                "DEGREE": "         1",
                "NUM_ROWS": 4,
                "TABLE_NAME": "ORDERS",
                "AVG_ROW_LEN": 13,
                "SAMPLE_SIZE": 4,
                "GLOBAL_STATS": "YES",
                "LAST_ANALYZED": "2019-10-18 22:00",
                "TABLESPACE_NAME": "USERS"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "OWNER": "VARCHAR2",
                "BLOCKS": "NUMBER",
                "DEGREE": "VARCHAR2",
                "NUM_ROWS": "NUMBER",
                "TABLE_NAME": "VARCHAR2",
                "AVG_ROW_LEN": "NUMBER",
                "SAMPLE_SIZE": "NUMBER",
                "GLOBAL_STATS": "VARCHAR2",
                "LAST_ANALYZED": "VARCHAR2",
                "TABLESPACE_NAME": "VARCHAR2"
              },
              "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
            }
          },
          "COLUMN": {
            "id": 0, "tid": "", "type": 0, "result": {
              "EOF": false,
              "data": [{
                "NULLABLE": "N",
                "COLUMN_ID": 1,
                "DATA_TYPE": "NUMBER(6,0)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "OID",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 4,
                "LAST_ANALYZED": "2019-10-18 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 2,
                "DATA_TYPE": "DATE(7)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 2,
                "COLUMN_NAME": "ODATE",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 2,
                "LAST_ANALYZED": "2019-10-18 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 3,
                "DATA_TYPE": "NUMBER(6,0)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 2,
                "COLUMN_NAME": "CCODE",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 1,
                "LAST_ANALYZED": "2019-10-18 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 4,
                "DATA_TYPE": "NUMBER(10,2)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 1,
                "COLUMN_NAME": "OAMT",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 1,
                "LAST_ANALYZED": "2019-10-18 22:00"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "NULLABLE": "VARCHAR2",
                "COLUMN_ID": "NUMBER",
                "DATA_TYPE": "VARCHAR2",
                "HISTOGRAM": "VARCHAR2",
                "NUM_NULLS": "NUMBER",
                "COLUMN_NAME": "VARCHAR2",
                "NUM_BUCKETS": "NUMBER",
                "NUM_DISTINCT": "NUMBER",
                "LAST_ANALYZED": "VARCHAR2"
              },
              "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
            }
          },
          "CONSTRAINT": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "STATUS": "ENABLED",
                "POSITION": 1,
                "VALIDATED": "VALIDATED",
                "COLUMN_NAME": "OID",
                "CONSTRAINT_NAME": "SYS_C003977",
                "CONSTRAINT_TYPE": "P",
                "R_CONSTRAINT_NAME": null
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "STATUS": "VARCHAR2",
                "POSITION": "NUMBER",
                "VALIDATED": "VARCHAR2",
                "COLUMN_NAME": "VARCHAR2",
                "CONSTRAINT_NAME": "VARCHAR2",
                "CONSTRAINT_TYPE": "VARCHAR2",
                "R_CONSTRAINT_NAME": "VARCHAR2"
              },
              "column_sequence": ["CONSTRAINT_NAME", "CONSTRAINT_TYPE", "R_CONSTRAINT_NAME", "COLUMN_NAME", "POSITION", "STATUS", "VALIDATED"]
            }
          }
        },
        "db_id": 288,
        "first_audit_time": 1599117713,
        "current_audit_time": 1601357745,
        "rules": ["TAB_NO_TIMESTAMP", "TAB_PK_SYSNAME"],
        "score": 85,
        "implement_advice": "",
        "audit": [{
          "target_id": 221575,
          "id": 362799,
          "name": "表没有日期字段",
          "risky": "middle",
          "description": "表没有date或timestamp类型的字段",
          "status": "problem"
        }, {
          "target_id": 221575,
          "id": 364541,
          "name": "主键未命名",
          "risky": "low",
          "description": "主键没有命名(使用SYS_C开头系统命名)",
          "status": "problem"
        }],
        "db_name": "oracle_test_1"
      }, {
        "id": 219678,
        "name": "TEST7_1",
        "table_name": "TEST7_1",
        "type": "TABLE",
        "schema": "DBMGR",
        "report_id": 6376,
        "detail": {
          "DDL": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{"DDL": "\n  CREATE TABLE \"DBMGR\".\"TEST7_1\" \n   (\t\"ID\" NUMBER, \n\t\"NAME\" VARCHAR2(20), \n\t PRIMARY KEY (\"NAME\")\n  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS \n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\"  ENABLE\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" "}],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {"DDL": "CLOB"},
              "column_sequence": ["DDL"]
            }
          },
          "INDEX": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "BLEVEL": 1,
                "DEGREE": "1",
                "STATUS": "VALID",
                "NUM_ROWS": 0,
                "TEMPORARY": "N",
                "INDEX_NAME": "SYS_C003984",
                "INDEX_TYPE": "NORMAL",
                "UNIQUENESS": "UNIQUE",
                "LEAF_BLOCKS": 0,
                "PARTITIONED": "NO",
                "DISTINCT_KEYS": 0,
                "LAST_ANALYZED": "2020-04-22 22:00",
                "CLUSTERING_FACTOR": 0
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "BLEVEL": "NUMBER",
                "DEGREE": "VARCHAR2",
                "STATUS": "VARCHAR2",
                "NUM_ROWS": "NUMBER",
                "TEMPORARY": "VARCHAR2",
                "INDEX_NAME": "VARCHAR2",
                "INDEX_TYPE": "VARCHAR2",
                "UNIQUENESS": "VARCHAR2",
                "LEAF_BLOCKS": "NUMBER",
                "PARTITIONED": "VARCHAR2",
                "DISTINCT_KEYS": "NUMBER",
                "LAST_ANALYZED": "VARCHAR2",
                "CLUSTERING_FACTOR": "NUMBER"
              },
              "column_sequence": ["INDEX_NAME", "INDEX_TYPE", "UNIQUENESS", "STATUS", "PARTITIONED", "TEMPORARY", "BLEVEL", "LEAF_BLOCKS", "DISTINCT_KEYS", "NUM_ROWS", "CLUSTERING_FACTOR", "DEGREE", "LAST_ANALYZED"]
            }
          },
          "TABLE": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "OWNER": "DBMGR",
                "BLOCKS": 0,
                "DEGREE": "         1",
                "NUM_ROWS": 0,
                "TABLE_NAME": "TEST7_1",
                "AVG_ROW_LEN": 0,
                "SAMPLE_SIZE": 0,
                "GLOBAL_STATS": "YES",
                "LAST_ANALYZED": "2020-04-22 22:00",
                "TABLESPACE_NAME": "USERS"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "OWNER": "VARCHAR2",
                "BLOCKS": "NUMBER",
                "DEGREE": "VARCHAR2",
                "NUM_ROWS": "NUMBER",
                "TABLE_NAME": "VARCHAR2",
                "AVG_ROW_LEN": "NUMBER",
                "SAMPLE_SIZE": "NUMBER",
                "GLOBAL_STATS": "VARCHAR2",
                "LAST_ANALYZED": "VARCHAR2",
                "TABLESPACE_NAME": "VARCHAR2"
              },
              "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
            }
          },
          "COLUMN": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "NULLABLE": "Y",
                "COLUMN_ID": 1,
                "DATA_TYPE": "NUMBER(,)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "ID",
                "NUM_BUCKETS": 0,
                "NUM_DISTINCT": 0,
                "LAST_ANALYZED": "2020-04-22 22:00"
              }, {
                "NULLABLE": "N",
                "COLUMN_ID": 2,
                "DATA_TYPE": "VARCHAR2(20)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "NAME",
                "NUM_BUCKETS": 0,
                "NUM_DISTINCT": 0,
                "LAST_ANALYZED": "2020-04-22 22:00"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "NULLABLE": "VARCHAR2",
                "COLUMN_ID": "NUMBER",
                "DATA_TYPE": "VARCHAR2",
                "HISTOGRAM": "VARCHAR2",
                "NUM_NULLS": "NUMBER",
                "COLUMN_NAME": "VARCHAR2",
                "NUM_BUCKETS": "NUMBER",
                "NUM_DISTINCT": "NUMBER",
                "LAST_ANALYZED": "VARCHAR2"
              },
              "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
            }
          },
          "CONSTRAINT": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "STATUS": "ENABLED",
                "POSITION": 1,
                "VALIDATED": "VALIDATED",
                "COLUMN_NAME": "NAME",
                "CONSTRAINT_NAME": "SYS_C003984",
                "CONSTRAINT_TYPE": "P",
                "R_CONSTRAINT_NAME": null
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "STATUS": "VARCHAR2",
                "POSITION": "NUMBER",
                "VALIDATED": "VARCHAR2",
                "COLUMN_NAME": "VARCHAR2",
                "CONSTRAINT_NAME": "VARCHAR2",
                "CONSTRAINT_TYPE": "VARCHAR2",
                "R_CONSTRAINT_NAME": "VARCHAR2"
              },
              "column_sequence": ["CONSTRAINT_NAME", "CONSTRAINT_TYPE", "R_CONSTRAINT_NAME", "COLUMN_NAME", "POSITION", "STATUS", "VALIDATED"]
            }
          }
        },
        "db_id": 288,
        "first_audit_time": 1596717874,
        "current_audit_time": 1601357257,
        "rules": ["TAB_EMPTY", "TAB_NO_TIMESTAMP", "TAB_PK_SYSNAME"],
        "score": 80,
        "implement_advice": "",
        "audit": [{
          "target_id": 219678,
          "id": 362810,
          "name": "表没有日期字段",
          "risky": "middle",
          "description": "表没有date或timestamp类型的字段",
          "status": "problem"
        }, {
          "target_id": 219678,
          "id": 364539,
          "name": "主键未命名",
          "risky": "low",
          "description": "主键没有命名(使用SYS_C开头系统命名)",
          "status": "problem"
        }, {
          "target_id": 219678,
          "id": 360830,
          "name": "存在空表",
          "risky": "low",
          "description": "表统计信息(blocks = 0, num_rows = 0)",
          "status": "problem"
        }],
        "db_name": "oracle_test_1"
      }],
    }, {
      "report_id": 6376,
      "name": "使用了外键",
      "description": "存在外键约束时，当对主表的记录进行update或delete时，为了校验从表上是否存在依赖该记录的数据。",
      "advice": "1.在应用端实现外键约束；2.无法去除外键,必须添加外键索引",
      "risky": "low",
      "audit_type": "OBJECT",
      "cn_name": "使用了外键",
      "target_number": 2,
      "total": 5048,
      "ratio": 0,
      "detail": [{
        "id": 219623,
        "name": "TEST7_2",
        "table_name": "TEST7_2",
        "type": "TABLE",
        "schema": "DBMGR",
        "report_id": 6376,
        "detail": {
          "DDL": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{"DDL": "\n  CREATE TABLE \"DBMGR\".\"TEST7_2\" \n   (\t\"ID\" NUMBER, \n\t\"NAME\" VARCHAR2(20), \n\t FOREIGN KEY (\"NAME\")\n\t  REFERENCES \"DBMGR\".\"TEST7_1\" (\"NAME\") ENABLE\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" "}],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {"DDL": "CLOB"},
              "column_sequence": ["DDL"]
            }
          },
          "TABLE": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "OWNER": "DBMGR",
                "BLOCKS": 0,
                "DEGREE": "         1",
                "NUM_ROWS": 0,
                "TABLE_NAME": "TEST7_2",
                "AVG_ROW_LEN": 0,
                "SAMPLE_SIZE": 0,
                "GLOBAL_STATS": "YES",
                "LAST_ANALYZED": "2020-04-22 22:00",
                "TABLESPACE_NAME": "USERS"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "OWNER": "VARCHAR2",
                "BLOCKS": "NUMBER",
                "DEGREE": "VARCHAR2",
                "NUM_ROWS": "NUMBER",
                "TABLE_NAME": "VARCHAR2",
                "AVG_ROW_LEN": "NUMBER",
                "SAMPLE_SIZE": "NUMBER",
                "GLOBAL_STATS": "VARCHAR2",
                "LAST_ANALYZED": "VARCHAR2",
                "TABLESPACE_NAME": "VARCHAR2"
              },
              "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
            }
          },
          "COLUMN": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "NULLABLE": "Y",
                "COLUMN_ID": 1,
                "DATA_TYPE": "NUMBER(,)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "ID",
                "NUM_BUCKETS": 0,
                "NUM_DISTINCT": 0,
                "LAST_ANALYZED": "2020-04-22 22:00"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 2,
                "DATA_TYPE": "VARCHAR2(20)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "NAME",
                "NUM_BUCKETS": 0,
                "NUM_DISTINCT": 0,
                "LAST_ANALYZED": "2020-04-22 22:00"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "NULLABLE": "VARCHAR2",
                "COLUMN_ID": "NUMBER",
                "DATA_TYPE": "VARCHAR2",
                "HISTOGRAM": "VARCHAR2",
                "NUM_NULLS": "NUMBER",
                "COLUMN_NAME": "VARCHAR2",
                "NUM_BUCKETS": "NUMBER",
                "NUM_DISTINCT": "NUMBER",
                "LAST_ANALYZED": "VARCHAR2"
              },
              "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
            }
          },
          "CONSTRAINT": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "STATUS": "ENABLED",
                "POSITION": 1,
                "VALIDATED": "VALIDATED",
                "COLUMN_NAME": "NAME",
                "CONSTRAINT_NAME": "SYS_C003985",
                "CONSTRAINT_TYPE": "R",
                "R_CONSTRAINT_NAME": "SYS_C003984"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "STATUS": "VARCHAR2",
                "POSITION": "NUMBER",
                "VALIDATED": "VARCHAR2",
                "COLUMN_NAME": "VARCHAR2",
                "CONSTRAINT_NAME": "VARCHAR2",
                "CONSTRAINT_TYPE": "VARCHAR2",
                "R_CONSTRAINT_NAME": "VARCHAR2"
              },
              "column_sequence": ["CONSTRAINT_NAME", "CONSTRAINT_TYPE", "R_CONSTRAINT_NAME", "COLUMN_NAME", "POSITION", "STATUS", "VALIDATED"]
            }
          }
        },
        "db_id": 288,
        "first_audit_time": 1596717940,
        "current_audit_time": 1601357226,
        "rules": ["TAB_EXISTS_FK", "TAB_EMPTY", "TAB_MIS_PK"],
        "score": 80,
        "implement_advice": "",
        "audit": [{
          "target_id": 219623,
          "id": 366599,
          "name": "表无主键",
          "risky": "middle",
          "description": "主键是关系型数据库中唯一确定一条记录的依据,可强制表的实体完整性。表中没有主键约束",
          "status": "problem"
        }, {
          "target_id": 219623,
          "id": 360831,
          "name": "存在空表",
          "risky": "low",
          "description": "表统计信息(blocks = 0, num_rows = 0)",
          "status": "problem"
        }, {
          "target_id": 219623,
          "id": 360765,
          "name": "使用了外键",
          "risky": "low",
          "description": "存在外键约束时，当对主表的记录进行update或delete时，为了校验从表上是否存在依赖该记录的数据。",
          "status": "problem"
        }],
        "db_name": "oracle_test_1"
      }, {
        "id": 219619,
        "name": "T_C",
        "table_name": "T_C",
        "type": "TABLE",
        "schema": "ISQLAUDIT",
        "report_id": 6376,
        "detail": {
          "DDL": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{"DDL": "\n  CREATE TABLE \"ISQLAUDIT\".\"T_C\" \n   (\t\"ID\" NUMBER, \n\t\"FID\" NUMBER, \n\t\"NAME\" VARCHAR2(30), \n\t CONSTRAINT \"FK_T_C\" FOREIGN KEY (\"FID\")\n\t  REFERENCES \"ISQLAUDIT\".\"T_P\" (\"ID\") ENABLE\n   ) SEGMENT CREATION IMMEDIATE \n  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 \n NOCOMPRESS LOGGING\n  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645\n  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1\n  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)\n  TABLESPACE \"USERS\" "}],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {"DDL": "CLOB"},
              "column_sequence": ["DDL"]
            }
          },
          "TABLE": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "OWNER": "ISQLAUDIT",
                "BLOCKS": 65,
                "DEGREE": "         1",
                "NUM_ROWS": 14558,
                "TABLE_NAME": "T_C",
                "AVG_ROW_LEN": 27,
                "SAMPLE_SIZE": 14558,
                "GLOBAL_STATS": "YES",
                "LAST_ANALYZED": "2020-06-01 19:38",
                "TABLESPACE_NAME": "USERS"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "OWNER": "VARCHAR2",
                "BLOCKS": "NUMBER",
                "DEGREE": "VARCHAR2",
                "NUM_ROWS": "NUMBER",
                "TABLE_NAME": "VARCHAR2",
                "AVG_ROW_LEN": "NUMBER",
                "SAMPLE_SIZE": "NUMBER",
                "GLOBAL_STATS": "VARCHAR2",
                "LAST_ANALYZED": "VARCHAR2",
                "TABLESPACE_NAME": "VARCHAR2"
              },
              "column_sequence": ["OWNER", "TABLE_NAME", "NUM_ROWS", "BLOCKS", "AVG_ROW_LEN", "GLOBAL_STATS", "SAMPLE_SIZE", "DEGREE", "LAST_ANALYZED", "TABLESPACE_NAME"]
            }
          },
          "COLUMN": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "NULLABLE": "Y",
                "COLUMN_ID": 1,
                "DATA_TYPE": "NUMBER(,)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "ID",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 14558,
                "LAST_ANALYZED": "2020-06-01 19:38"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 2,
                "DATA_TYPE": "NUMBER(,)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "FID",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 1000,
                "LAST_ANALYZED": "2020-06-01 19:38"
              }, {
                "NULLABLE": "Y",
                "COLUMN_ID": 3,
                "DATA_TYPE": "VARCHAR2(30)",
                "HISTOGRAM": "NONE",
                "NUM_NULLS": 0,
                "COLUMN_NAME": "NAME",
                "NUM_BUCKETS": 1,
                "NUM_DISTINCT": 11009,
                "LAST_ANALYZED": "2020-06-01 19:38"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "NULLABLE": "VARCHAR2",
                "COLUMN_ID": "NUMBER",
                "DATA_TYPE": "VARCHAR2",
                "HISTOGRAM": "VARCHAR2",
                "NUM_NULLS": "NUMBER",
                "COLUMN_NAME": "VARCHAR2",
                "NUM_BUCKETS": "NUMBER",
                "NUM_DISTINCT": "NUMBER",
                "LAST_ANALYZED": "VARCHAR2"
              },
              "column_sequence": ["COLUMN_ID", "COLUMN_NAME", "DATA_TYPE", "LAST_ANALYZED", "NULLABLE", "NUM_DISTINCT", "NUM_NULLS", "HISTOGRAM", "NUM_BUCKETS"]
            }
          },
          "CONSTRAINT": {
            "id": 0,
            "tid": "",
            "type": 0,
            "result": {
              "EOF": false,
              "data": [{
                "STATUS": "ENABLED",
                "POSITION": 1,
                "VALIDATED": "VALIDATED",
                "COLUMN_NAME": "FID",
                "CONSTRAINT_NAME": "FK_T_C",
                "CONSTRAINT_TYPE": "R",
                "R_CONSTRAINT_NAME": "T_P_ID_PK"
              }],
              "type": "data",
              "output": "",
              "duration": 0,
              "column_type": {
                "STATUS": "VARCHAR2",
                "POSITION": "NUMBER",
                "VALIDATED": "VARCHAR2",
                "COLUMN_NAME": "VARCHAR2",
                "CONSTRAINT_NAME": "VARCHAR2",
                "CONSTRAINT_TYPE": "VARCHAR2",
                "R_CONSTRAINT_NAME": "VARCHAR2"
              },
              "column_sequence": ["CONSTRAINT_NAME", "CONSTRAINT_TYPE", "R_CONSTRAINT_NAME", "COLUMN_NAME", "POSITION", "STATUS", "VALIDATED"]
            }
          }
        },
        "db_id": 288,
        "first_audit_time": 1596782826,
        "current_audit_time": 1601357222,
        "rules": ["TAB_COUNT_RECORD", "TAB_EXISTS_FK", "TAB_MIS_PK"],
        "score": 75,
        "implement_advice": "",
        "audit": [{
          "target_id": 219619,
          "id": 366605,
          "name": "表无主键",
          "risky": "middle",
          "description": "主键是关系型数据库中唯一确定一条记录的依据,可强制表的实体完整性。表中没有主键约束",
          "status": "problem"
        }, {
          "target_id": 219619,
          "id": 360759,
          "name": "单表数据量过大",
          "risky": "middle",
          "description": "单表或单分区记录数量过大",
          "status": "problem"
        }, {
          "target_id": 219619,
          "id": 360767,
          "name": "使用了外键",
          "risky": "low",
          "description": "存在外键约束时，当对主表的记录进行update或delete时，为了校验从表上是否存在依赖该记录的数据。",
          "status": "problem"
        }],
        "db_name": "oracle_test_1"
      }],
    }],
  low: {
    "info": {
      "id": 8758,
      "name": "oracle_test_1-2020101614-1",
      "task_id": 295,
      "task_name": "oracle_test_1-2020101614",
      "db_id": 288,
      "db_name": "oracle_test_1(192.168.3.70:1521/nbse)",
      "db_type": "oracle",
      "schemas": "DBMGR,WYL,U1,U2,USER1,USER2,JINHAI,TEST,TEST15,ISQLAUDIT",
      "error": "",
      "task_type": "dynamic",
      "start_time": 1602832726,
      "end_time": 1602833320,
      "score": 88.68,
      "object_score": 89.31,
      "sql_score": 30,
      "status": "done",
      "sql_problem_count": 1,
      "sql_total": 1,
      "object_problem_count": 34,
      "object_total": 0
    },
    "sql_count": [{"status": "problem", "count": 1}, {"status": "total", "count": 1}],
    "object_count": [{"status": "total", "count": 34}],
    "risk_count": [{"name": "high", "count": 4, "description": ""}, {
      "name": "middle",
      "count": 78,
      "description": ""
    }, {"name": "low", "count": 43, "description": ""}],
    "risk_top": [{
      "name": "IDX_DUPLICATE_COL",
      "count": 1,
      "description": "一个字段被多个索引引用的次数大于1，造成索引冗余，不仅占用空间，而且容易产生多个执行计划。",
      "risky": "low"
    }, {
      "name": "IDX_FUNC",
      "count": 1,
      "description": "索引类型为\"FUNCTION-BASED NORMAL\"或\"FUNCTION-BASED NORMAL\"",
      "risky": "low"
    }, {"name": "SEQ_ORDER", "count": 1, "description": "数据库中存在ORDERED的序列", "risky": "low"}, {
      "name": "SQL_BUFFER_GETS",
      "count": 1,
      "description": "SQL单次执行逻辑读大于1000",
      "risky": "low"
    }, {
      "name": "SQL_DISK_READS",
      "count": 1,
      "description": "SQL单次执行物理读大于1000",
      "risky": "low"
    }, {
      "name": "SQL_SUBQUERY_FROM",
      "count": 1,
      "description": "from段出现子查询",
      "risky": "low"
    }, {"name": "SQL_SUBQUERY_WHERE", "count": 1, "description": "where段出现子查询", "risky": "low"}, {
      "name": "SQL_UNION",
      "count": 1,
      "description": "SQL中出现union,minus,intersect",
      "risky": "low"
    }, {"name": "PART_NONE_UNIQ_GL_IDX", "count": 1, "description": "分区无全局唯一索引", "risky": "low"}, {
      "name": "PLN_FILTER",
      "count": 1,
      "description": "执行计划存在filter操作",
      "risky": "low"
    }, {
      "name": "PLN_IDX_FFS",
      "count": 1,
      "description": "执行计划出现index fast full scan",
      "risky": "low"
    }, {"name": "PLN_TAB_FULL", "count": 1, "description": "发现全表扫描", "risky": "low"}, {
      "name": "IDX_PARALLEL_ON",
      "count": 2,
      "description": "索引对象开启并行度,当索引被并发访问时，会引起资源竞争。",
      "risky": "low"
    }, {
      "name": "TAB_EXISTS_FK",
      "count": 2,
      "description": "存在外键约束时，当对主表的记录进行update或delete时，为了校验从表上是否存在依赖该记录的数据。",
      "risky": "low"
    }, {
      "name": "SEQ_NO_RECOM_NAMING",
      "count": 3,
      "description": "序列命名需遵循设定规范",
      "risky": "low"
    }, {
      "name": "TAB_PK_SYSNAME",
      "count": 4,
      "description": "主键没有命名(使用SYS_C开头系统命名)",
      "risky": "low"
    }, {"name": "IDX_NO_RECM_NAMING", "count": 10, "description": "索引命名不符合既定规范", "risky": "low"}, {
      "name": "TAB_EMPTY",
      "count": 10,
      "description": "表统计信息(blocks = 0, num_rows = 0)",
      "risky": "low"
    }],
    "sql_top": [{"name": "78n0nrw1jhxh9", "count": 30, "description": ""}],
    "object_top": [{"name": "SEQ36_1", "count": 80, "description": ""}, {
      "name": "ORDERS1",
      "count": 85,
      "description": ""
    }, {"name": "SEQ_1", "count": 85, "description": ""}, {
      "name": "TEST18",
      "count": 85,
      "description": ""
    }, {"name": "ORDERS", "count": 85, "description": ""}],
    "file_type_count": {"dql": 0, "dml": 0, "ddl": 0}
  },
  middle: {
    "info": {
      "id": 8758,
      "name": "oracle_test_1-2020101614-1",
      "task_id": 295,
      "task_name": "oracle_test_1-2020101614",
      "db_id": 288,
      "db_name": "oracle_test_1(192.168.3.70:1521/nbse)",
      "db_type": "oracle",
      "schemas": "DBMGR,WYL,U1,U2,USER1,USER2,JINHAI,TEST,TEST15,ISQLAUDIT",
      "error": "",
      "task_type": "dynamic",
      "start_time": 1602832726,
      "end_time": 1602833320,
      "score": 88.68,
      "object_score": 89.31,
      "sql_score": 30,
      "status": "done",
      "sql_problem_count": 1,
      "sql_total": 1,
      "object_problem_count": 70,
      "object_total": 0
    },
    "sql_count": [{"status": "problem", "count": 1}, {"status": "total", "count": 1}],
    "object_count": [{"status": "total", "count": 70}],
    "risk_count": [{"name": "high", "count": 4, "description": ""}, {
      "name": "middle",
      "count": 78,
      "description": ""
    }, {"name": "low", "count": 43, "description": ""}],
    "risk_top": [{
      "name": "TAB_DEL_TOO_MUCH",
      "count": 1,
      "description": "表上无数据，但是数据块儿不唯一",
      "risky": "middle"
    }, {
      "name": "IDX_COL_LOTS",
      "count": 1,
      "description": "索引列过多，索引占用空间增长特别快，性能低",
      "risky": "middle"
    }, {
      "name": "IDX_COL_NOT_NULL",
      "count": 1,
      "description": "索引列缺少非空约束",
      "risky": "middle"
    }, {
      "name": "TAB_INDEX_NUM",
      "count": 1,
      "description": "索引可以提高访问速度,但数量过多将导致空间消耗过大,且索引维护成本较高,影响DML效率等问题。应控制索引数量。",
      "risky": "middle"
    }, {
      "name": "PLN_MERGE_JOIN_CARTESIAN",
      "count": 1,
      "description": "执行计划中出现关键字\"MERGE JOIN CARTESIAN\"",
      "risky": "middle"
    }, {
      "name": "TAB_IDX_PARAL_NO_EQU",
      "count": 2,
      "description": "表与其对应索引设置的并行度不一致",
      "risky": "middle"
    }, {
      "name": "IDX_BITMAP",
      "count": 2,
      "description": "索引类型为\"BITMAP\"，在OLTP在线交易系统中，如果有位图索引，则在DML操作时会产生大量的行锁。",
      "risky": "middle"
    }, {
      "name": "SEQ_CACHESIZE",
      "count": 3,
      "description": "序列CACHESIZE过小，cache值较小，内存中预先缓存的cache值很快被耗尽，再次取值时需要修改数据字典信息，在此期间，会持有SQ锁。",
      "risky": "middle"
    }, {
      "name": "TAB_DATECOL",
      "count": 5,
      "description": "日期字段使用number或varchar2",
      "risky": "middle"
    }, {
      "name": "COL_NULL_CHECK",
      "count": 7,
      "description": "join列没有非空约束",
      "risky": "middle"
    }, {
      "name": "TAB_COUNT_RECORD",
      "count": 7,
      "description": "单表或单分区记录数量过大",
      "risky": "middle"
    }, {
      "name": "TAB_NO_TIMESTAMP",
      "count": 7,
      "description": "表没有date或timestamp类型的字段",
      "risky": "middle"
    }, {"name": "TAB_LOB", "count": 10, "description": "包含有大字段类型的表", "risky": "middle"}, {
      "name": "TAB_MIS_PK",
      "count": 10,
      "description": "主键是关系型数据库中唯一确定一条记录的依据,可强制表的实体完整性。表中没有主键约束",
      "risky": "middle"
    }, {
      "name": "TAB_USE_LONG_RAW",
      "count": 10,
      "description": "表使用废弃的数据类型, 包含LONG, RAW, LONG RAW",
      "risky": "middle"
    }, {"name": "LOB_USE_BASICFILE", "count": 10, "description": "lob使用basicfile类型", "risky": "middle"}],
    "sql_top": [{"name": "78n0nrw1jhxh9", "count": 30, "description": ""}],
    "object_top": [{"name": "INDEX8", "count": 70, "description": ""}, {
      "name": "TEST14",
      "count": 70,
      "description": ""
    }, {"name": "T_P", "count": 80, "description": ""}, {
      "name": "SEQ36_1",
      "count": 80,
      "description": ""
    }, {"name": "TEST34", "count": 80, "description": ""}],
    "file_type_count": {"dql": 0, "dml": 0, "ddl": 0}
  },
  high: {
    "info": {
      "id": 8758,
      "name": "oracle_test_1-2020101614-1",
      "task_id": 295,
      "task_name": "oracle_test_1-2020101614",
      "db_id": 288,
      "db_name": "oracle_test_1(192.168.3.70:1521/nbse)",
      "db_type": "oracle",
      "schemas": "DBMGR,WYL,U1,U2,USER1,USER2,JINHAI,TEST,TEST15,ISQLAUDIT",
      "error": "",
      "task_type": "dynamic",
      "start_time": 1602832726,
      "end_time": 1602833320,
      "score": 88.68,
      "object_score": 89.31,
      "sql_score": 30,
      "status": "done",
      "sql_problem_count": 1,
      "sql_total": 1,
      "object_problem_count": 3,
      "object_total": 0
    },
    "sql_count": [{"status": "problem", "count": 1}, {"status": "total", "count": 1}],
    "object_count": [{"status": "total", "count": 3}],
    "risk_count": [{"name": "high", "count": 4, "description": ""}, {
      "name": "middle",
      "count": 78,
      "description": ""
    }, {"name": "low", "count": 43, "description": ""}],
    "risk_top": [{
      "name": "IDX_INVALID",
      "count": 1,
      "description": "索引状态为INVALID",
      "risky": "high"
    }, {
      "name": "PLN_TO_CHANGE_TYPE",
      "count": 1,
      "description": "抓取执行过的SQL执行计划，谓词过滤中出现关键字\"INTERNAL_FUNCTION\"，\"SYS_OP\"，以及部分情况下的TO_NUMBER",
      "risky": "high"
    }, {"name": "IDX_INVISIBLE", "count": 2, "description": "索引为invisible或unusable", "risky": "high"}],
    "sql_top": [{"name": "78n0nrw1jhxh9", "count": 30, "description": ""}],
    "object_top": [{"name": "INDEX8", "count": 70, "description": ""}, {
      "name": "IDX11_UN",
      "count": 80,
      "description": ""
    }, {"name": "INDEX8", "count": 80, "description": ""}],
    "file_type_count": {"dql": 0, "dml": 0, "ddl": 0}
  },
  clickAreaData: {"health": 129, "high": 4, "low": 43, "middle": 78},
  topData: {
    "info": {
      "id": 8727,
      "name": "SYSAUD-oracle_test_1-20",
      "task_id": 273,
      "task_name": "SYSAUD-oracle_test_1",
      "db_id": 288,
      "db_name": "oracle_test_1(192.168.3.70:1521/nbse)",
      "db_type": "oracle",
      "schemas": "JINHAI,DBMGR,WYL,U1,U2,ISQLAUDIT,TEST,USER2,USER1",
      "error": "",
      "task_type": "dynamic",
      "start_time": 1602820586,
      "end_time": 1602826540,
      "score": 88.08,
      "object_score": 88.08,
      "sql_score": 88.12,
      "status": "done",
      "sql_problem_count": 16,
      "sql_total": 20,
      "object_problem_count": 4796,
      "object_total": 0
    },
    "sql_count": [{"status": "problem", "count": 16}, {"status": "total", "count": 20}],
    "object_count": [{"status": "total", "count": 4796}],
    "risk_count": [
      {"name": "high", "count": 6, "description": ""},
      {"name": "middle", "count": 4704, "description": ""},
      {"name": "low", "count": 2039, "description": ""}
    ],

    // 全部风险规则命中
    "risk_top": [{
      "name": "TAB_DEL_TOO_MUCH",
      "count": 1,
      "description": "表上无数据，但是数据块儿不唯一",
      "risky": "middle"
    }, {"name": "IDX_INVALID", "count": 1, "description": "索引状态为INVALID", "risky": "high"}, {
      "name": "TAB_INDEX_NUM",
      "count": 1,
      "description": "索引可以提高访问速度,但数量过多将导致空间消耗过大,且索引维护成本较高,影响DML效率等问题。应控制索引数量。",
      "risky": "middle"
    }, {
      "name": "PART_NONE_UNIQ_GL_IDX",
      "count": 1,
      "description": "分区无全局唯一索引",
      "risky": "low"
    }, {
      "name": "PLN_IDX_FFS",
      "count": 1,
      "description": "执行计划出现index fast full scan",
      "risky": "low"
    }, {
      "name": "PLN_IDX_SKIP_SCAN",
      "count": 1,
      "description": "执行计划中出现关键字\"INDEX SKIP SCAN\"",
      "risky": "low"
    }, {
      "name": "PLN_MERGE_JOIN_CARTESIAN",
      "count": 1,
      "description": "执行计划中出现关键字\"MERGE JOIN CARTESIAN\"",
      "risky": "middle"
    }, {"name": "SEQ_ORDER", "count": 1, "description": "数据库中存在ORDERED的序列", "risky": "low"}, {
      "name": "SQL_SELECT_ANY",
      "count": 1,
      "description": "sql 使用select *",
      "risky": "low"
    }, {
      "name": "SQL_SELECT_ANY_ADV2",
      "count": 1,
      "description": "全字段查询且解析后超过20列",
      "risky": "high"
    }, {
      "name": "SQL_SUBQUERY_FROM",
      "count": 1,
      "description": "from段出现子查询",
      "risky": "low"
    }, {"name": "SQL_SUBQUERY_WHERE", "count": 1, "description": "where段出现子查询", "risky": "low"}, {
      "name": "SQL_UNION",
      "count": 1,
      "description": "SQL中出现union,minus,intersect",
      "risky": "low"
    }, {
      "name": "IDX_COL_LOTS",
      "count": 1,
      "description": "索引列过多，索引占用空间增长特别快，性能低",
      "risky": "middle"
    }, {
      "name": "IDX_COL_NOT_NULL",
      "count": 1,
      "description": "索引列缺少非空约束",
      "risky": "middle"
    }, {
      "name": "IDX_DUPLICATE_COL",
      "count": 1,
      "description": "一个字段被多个索引引用的次数大于1，造成索引冗余，不仅占用空间，而且容易产生多个执行计划。",
      "risky": "low"
    }, {
      "name": "IDX_FUNC",
      "count": 1,
      "description": "索引类型为\"FUNCTION-BASED NORMAL\"或\"FUNCTION-BASED NORMAL\"",
      "risky": "low"
    }, {
      "name": "TAB_EXISTS_FK",
      "count": 2,
      "description": "存在外键约束时，当对主表的记录进行update或delete时，为了校验从表上是否存在依赖该记录的数据。",
      "risky": "low"
    }, {
      "name": "TAB_IDX_PARAL_NO_EQU",
      "count": 2,
      "description": "表与其对应索引设置的并行度不一致",
      "risky": "middle"
    }, {
      "name": "IDX_BITMAP",
      "count": 2,
      "description": "索引类型为\"BITMAP\"，在OLTP在线交易系统中，如果有位图索引，则在DML操作时会产生大量的行锁。",
      "risky": "middle"
    }, {"name": "PLN_TAB_FULL", "count": 2, "description": "发现全表扫描", "risky": "low"}, {
      "name": "PLN_TO_CHANGE_TYPE",
      "count": 2,
      "description": "抓取执行过的SQL执行计划，谓词过滤中出现关键字\"INTERNAL_FUNCTION\"，\"SYS_OP\"，以及部分情况下的TO_NUMBER",
      "risky": "high"
    }, {
      "name": "IDX_INVISIBLE",
      "count": 2,
      "description": "索引为invisible或unusable",
      "risky": "high"
    }, {
      "name": "IDX_PARALLEL_ON",
      "count": 2,
      "description": "索引对象开启并行度,当索引被并发访问时，会引起资源竞争。",
      "risky": "low"
    }, {"name": "PLN_FILTER", "count": 3, "description": "执行计划存在filter操作", "risky": "low"}, {
      "name": "SEQ_CACHESIZE",
      "count": 3,
      "description": "序列CACHESIZE过小，cache值较小，内存中预先缓存的cache值很快被耗尽，再次取值时需要修改数据字典信息，在此期间，会持有SQ锁。",
      "risky": "middle"
    }, {
      "name": "SEQ_NO_RECOM_NAMING",
      "count": 3,
      "description": "序列命名需遵循设定规范",
      "risky": "low"
    }, {
      "name": "TAB_PK_SYSNAME",
      "count": 4,
      "description": "主键没有命名(使用SYS_C开头系统命名)",
      "risky": "low"
    }, {
      "name": "TAB_DATECOL",
      "count": 5,
      "description": "日期字段使用number或varchar2",
      "risky": "middle"
    }, {
      "name": "COL_NULL_CHECK",
      "count": 7,
      "description": "join列没有非空约束",
      "risky": "middle"
    }, {
      "name": "TAB_COUNT_RECORD",
      "count": 7,
      "description": "单表或单分区记录数量过大",
      "risky": "middle"
    }, {
      "name": "SQL_USING_HINT",
      "count": 13,
      "description": "sql使用hint，解析生成执行计划时会受到hint影响",
      "risky": "low"
    }, {
      "name": "TAB_NO_TIMESTAMP",
      "count": 673,
      "description": "表没有date或timestamp类型的字段",
      "risky": "middle"
    }, {"name": "TAB_LOB", "count": 1000, "description": "包含有大字段类型的表", "risky": "middle"}, {
      "name": "TAB_MIS_PK",
      "count": 1000,
      "description": "主键是关系型数据库中唯一确定一条记录的依据,可强制表的实体完整性。表中没有主键约束",
      "risky": "middle"
    }, {
      "name": "IDX_NO_RECM_NAMING",
      "count": 1000,
      "description": "索引命名不符合既定规范",
      "risky": "low"
    }, {
      "name": "TAB_EMPTY",
      "count": 1000,
      "description": "表统计信息(blocks = 0, num_rows = 0)",
      "risky": "low"
    }, {
      "name": "TAB_USE_LONG_RAW",
      "count": 1000,
      "description": "表使用废弃的数据类型, 包含LONG, RAW, LONG RAW",
      "risky": "middle"
    }, {"name": "LOB_USE_BASICFILE", "count": 1000, "description": "lob使用basicfile类型", "risky": "middle"}],
    "sql_top": [{"name": "78n0nrw1jhxh9", "count": 40, "description": ""}, {
      "name": "76c5c6m16z83u",
      "count": 50,
      "description": ""
    }, {"name": "cpdghfyyvsp0d", "count": 90, "description": ""}, {
      "name": "77s161gszuamq",
      "count": 90,
      "description": ""
    }, {"name": "gs6kxyq70bpcn", "count": 95, "description": ""}],
    "object_top": [{"name": "TEST105", "count": 55, "description": ""}, {
      "name": "TEST103",
      "count": 55,
      "description": ""
    }, {"name": "TEST102", "count": 55, "description": ""}, {
      "name": "TEST1",
      "count": 55,
      "description": ""
    }, {"name": "TEST104", "count": 55, "description": ""}],
    "file_type_count": {"dql": 0, "dml": 0, "ddl": 0}
  },
}

