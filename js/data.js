var data = {
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
      "ratio": 1.1, "detail": [{
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
      }]
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
      "detail": [{
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
      }, {
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
      }, {
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
      }]
    },
  ],
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
    "risk_count": [{"name": "high", "count": 6, "description": ""}, {
      "name": "middle",
      "count": 4704,
      "description": ""
    }, {"name": "low", "count": 2039, "description": ""}],
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


// [,{"report_id":9184,"name":"TAB_USE_LONG_RAW","description":"表使用废弃的数据类型, 包含LONG, RAW, LONG RAW","advice":"不建议使用这些类型","risky":"middle","audit_type":"OBJECT","cn_name":"使用废弃数据类型","target_number":10,"total":93,"ratio":10.8},{"report_id":9184,"name":"IDX_BITMAP","description":"索引类型为\"BITMAP\"，在OLTP在线交易系统中，如果有位图索引，则在DML操作时会产生大量的行锁。","advice":"OLTP在线交易系统禁用位图索引","risky":"middle","audit_type":"OBJECT","cn_name":"存在位图索引","target_number":2,"total":93,"ratio":2.2},{"report_id":9184,"name":"IDX_COL_LOTS","description":"索引列过多，索引占用空间增长特别快，性能低","advice":"设计上尽量回避","risky":"middle","audit_type":"OBJECT","cn_name":"索引列过多","target_number":1,"total":93,"ratio":1.1},{"report_id":9184,"name":"LOB_USE_BASICFILE","description":"lob使用basicfile类型","advice":"建议调整LOB类型","risky":"middle","audit_type":"OBJECT","cn_name":"使用了BASICFILE类型的LOB","target_number":10,"total":93,"ratio":10.8},{"report_id":9184,"name":"PLN_MERGE_JOIN_CARTESIAN","description":"执行计划中出现关键字\"MERGE JOIN CARTESIAN\"","advice":"1)检查两表是否有关联条件； 2）检查两表的统计信息是否准确。","risky":"middle","audit_type":"SQL","cn_name":"存在笛卡尔集","target_number":1,"total":3,"ratio":33.3},{"report_id":9184,"name":"SEQ_CACHESIZE","description":"序列CACHESIZE过小，cache值较小，内存中预先缓存的cache值很快被耗尽，再次取值时需要修改数据字典信息，在此期间，会持有SQ锁。","advice":"调整序列的cache值为2000以上","risky":"middle","audit_type":"OBJECT","cn_name":"序列缓存过小","target_number":3,"total":93,"ratio":3.2},{"report_id":9184,"name":"TAB_COUNT_RECORD","description":"单表或单分区记录数量过大","advice":"1.建议分区； 2.历史数据归档","risky":"middle","audit_type":"OBJECT","cn_name":"单表数据量过大","target_number":7,"total":93,"ratio":7.5},{"report_id":9184,"name":"TAB_DATECOL","description":"日期字段使用number或varchar2","advice":"时间字段建议使用推荐的date/timestamp类型","risky":"middle","audit_type":"OBJECT","cn_name":"表缺少日期字段","target_number":5,"total":93,"ratio":5.4},{"report_id":9184,"name":"TAB_DEL_TOO_MUCH","description":"表上无数据，但是数据块儿不唯一","advice":"表做shrink操作，回收空间","risky":"middle","audit_type":"OBJECT","cn_name":"空表占空间","target_number":1,"total":93,"ratio":1.1},{"report_id":9184,"name":"TAB_IDX_PARAL_NO_EQU","description":"表与其对应索引设置的并行度不一致","advice":"调整表或索引并行度，使其一致","risky":"middle","audit_type":"OBJECT","cn_name":"表索引并行度不一","target_number":2,"total":93,"ratio":2.2},{"report_id":9184,"name":"TAB_INDEX_NUM","description":"索引可以提高访问速度,但数量过多将导致空间消耗过大,且索引维护成本较高,影响DML效率等问题。应控制索引数量。","advice":"构建战略性索引结构,不要针对每个需求都通过创建索引解决","risky":"middle","audit_type":"OBJECT","cn_name":"单表索引数过多","target_number":1,"total":93,"ratio":1.1},{"report_id":9184,"name":"TAB_LOB","description":"包含有大字段类型的表","advice":"建议在数据库外部进行存储大字段","risky":"middle","audit_type":"OBJECT","cn_name":"使用大字段类型","target_number":10,"total":93,"ratio":10.8},{"report_id":9184,"name":"TAB_MIS_PK","description":"主键是关系型数据库中唯一确定一条记录的依据,可强制表的实体完整性。表中没有主键约束","advice":"创建表时应定义至少一个字段为主键","risky":"middle","audit_type":"OBJECT","cn_name":"表无主键","target_number":10,"total":93,"ratio":10.8},{"report_id":9184,"name":"TAB_NO_TIMESTAMP","description":"表没有date或timestamp类型的字段","advice":"添加时间字段(比如插入、更新的时间戳)","risky":"middle","audit_type":"OBJECT","cn_name":"表没有日期字段","target_number":6,"total":93,"ratio":6.5},{"report_id":9184,"name":"COL_NULL_CHECK","description":"join列没有非空约束","advice":"连接列上尽量确保非空","risky":"middle","audit_type":"OBJECT","cn_name":"连接列无非空约束","target_number":7,"total":93,"ratio":7.5},
// ,{"report_id":9184,"name":"SEQ_ORDER","description":"数据库中存在ORDERED的序列","advice":"建议去掉ORDER属性","risky":"low","audit_type":"OBJECT","cn_name":"序列有ORDER属性","target_number":1,"total":93,"ratio":1.1},{"report_id":9184,"name":"SQL_BUFFER_GETS","description":"SQL单次执行逻辑读大于1000","advice":"生成sqlhc报告，进行人工审核","risky":"low","audit_type":"SQL","cn_name":"逻辑读过高","target_number":1,"total":3,"ratio":33.3},{"report_id":9184,"name":"SQL_SUBQUERY_FROM","description":"from段出现子查询","advice":"改写SQL","risky":"low","audit_type":"SQL","cn_name":"from段存在子查询","target_number":1,"total":3,"ratio":33.3},{"report_id":9184,"name":"SQL_SUBQUERY_WHERE","description":"where段出现子查询","advice":"改写SQL","risky":"low","audit_type":"SQL","cn_name":"where条件子查询","target_number":1,"total":3,"ratio":33.3},{"report_id":9184,"name":"SQL_UNION","description":"SQL中出现union,minus,intersect","advice":"避免出现union，minus,intersect,防止出现不必要的排序动作","risky":"low","audit_type":"SQL","cn_name":"使用UNION","target_number":1,"total":3,"ratio":33.3},{"report_id":9184,"name":"IDX_FUNC","description":"索引类型为\"FUNCTION-BASED NORMAL\"或\"FUNCTION-BASED NORMAL\"","advice":"1.函数在表达式右侧实现；2.应用程序替换数据库函数","risky":"low","audit_type":"OBJECT","cn_name":"存在函数索引","target_number":1,"total":93,"ratio":1.1},{"report_id":9184,"name":"IDX_NO_RECM_NAMING","description":"索引命名不符合既定规范","advice":"建议统一规范命名","risky":"low","audit_type":"OBJECT","cn_name":"索引命名不规范","target_number":10,"total":93,"ratio":10.8},{"report_id":9184,"name":"IDX_PARALLEL_ON","description":"索引对象开启并行度,当索引被并发访问时，会引起资源竞争。","advice":"关闭索引的并行度，默认为1","risky":"low","audit_type":"OBJECT","cn_name":"索引开启并行","target_number":2,"total":93,"ratio":2.2},{"report_id":9184,"name":"TAB_EMPTY","description":"表统计信息(blocks = 0, num_rows = 0)","advice":"观察并考虑删除无用空表","risky":"low","audit_type":"OBJECT","cn_name":"存在空表","target_number":10,"total":93,"ratio":10.8},{"report_id":9184,"name":"PART_NONE_UNIQ_GL_IDX","description":"分区无全局唯一索引","advice":"排查设计是否合理","risky":"low","audit_type":"OBJECT","cn_name":"分区无全局唯一索引","target_number":1,"total":93,"ratio":1.1},{"report_id":9184,"name":"PLN_FILTER","description":"执行计划存在filter操作","advice":"排查SQL语句性能","risky":"low","audit_type":"SQL","cn_name":"存在filter操作","target_number":3,"total":3,"ratio":100},{"report_id":9184,"name":"PLN_IDX_FFS","description":"执行计划出现index fast full scan","advice":"排查sql性能","risky":"low","audit_type":"SQL","cn_name":"索引快速全扫描","target_number":1,"total":3,"ratio":33.3},{"report_id":9184,"name":"PLN_IDX_SKIP_SCAN","description":"执行计划中出现关键字\"INDEX SKIP SCAN\"","advice":"排查SQL性能","risky":"low","audit_type":"SQL","cn_name":"索引跳扫","target_number":2,"total":3,"ratio":66.7},{"report_id":9184,"name":"TAB_EXISTS_FK","description":"存在外键约束时，当对主表的记录进行update或delete时，为了校验从表上是否存在依赖该记录的数据。","advice":"1.在应用端实现外键约束；2.无法去除外键,必须添加外键索引","risky":"low","audit_type":"OBJECT","cn_name":"使用了外键","target_number":2,"total":93,"ratio":2.2},{"report_id":9184,"name":"PLN_TAB_FULL","description":"发现全表扫描","advice":"关注是否存在潜在性能风险","risky":"low","audit_type":"SQL","cn_name":"全表扫描","target_number":1,"total":3,"ratio":33.3},{"report_id":9184,"name":"IDX_DUPLICATE_COL","description":"一个字段被多个索引引用的次数大于1，造成索引冗余，不仅占用空间，而且容易产生多个执行计划。","advice":"监控索引，删除不必要的索引","risky":"low","audit_type":"OBJECT","cn_name":"冗余索引","target_number":1,"total":93,"ratio":1.1},{"report_id":9184,"name":"TAB_PK_SYSNAME","description":"主键没有命名(使用SYS_C开头系统命名)","advice":"建议遵循规范，人工命名","risky":"low","audit_type":"OBJECT","cn_name":"主键未命名","target_number":4,"total":93,"ratio":4.3}]
