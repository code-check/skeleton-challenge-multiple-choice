# チャレンジ点検表

## 全チャレンジ共通項目
#### READMEの設定
- [ ] [Skeleton-challenge-multiple-choice](https://github.com/code-check/skeleton-challenge-multiple-choice/blob/master/README.md)もしくはクライアント指定のひな形に準じた形式になっているか？
- [ ] 課題となるプログラムの意図は明確か？
- [ ] 遊び心のある表記になっているか？
- [ ] 行数は100行以内か？目標値は70行。(長い説明文は受験者にとって負担が高い)
- [ ] 誤字脱字はないか？
- [ ] 文末、文体は統一されているか？

#### Questions.md等の内容
- [ ] 各設問の選択肢に\`\`が利用されていないか？（表示障害が発生する）
- [ ] 各設問に答え`- [x]`が表記してあるか？

#### challenge.jsonの設定
- [ ] challenge.json は設置されているか？
- [ ] `markdownTest`セクションにファイル名が配列形式で列挙されているか？
- [ ] 列挙されているファイルは存在するか？
- [ ] `allowRunTest`セクションはfalseか？(ファイル実行する必要がないため)
- [ ] `allowNewTest`セクションはfalseか？(新規ファイルを作成する必要がないため)
- [ ] excludes の設定は適切か？
  - [ ] challenge.json はexcludeされているか？
  - [ ] その他受験者から秘匿すべきファイルはexcludeされているか？
- [ ] ignores の設定は適切か？
  - [ ] 解答・解説ファイル等は除外されているか？
  - [ ] `INSPECTION.md` 及び `.github/`は除外されているか？
   - [ ] その他codecheck上で一切無視すべきファイルはignoreされているか？

#### codecheck.ymlの設定
- [ ] codecheck.yml は不在か？(ローカル受験は実施しないため)

#### package.jsonの設定
- [ ] package.json は不在か？(実行型チャレンジではないため)

#### テストの設定
- [ ] テストファイルは不在か？(実行型チャレンジではないため)
- [ ] 解答未記入時に、全てのテストケースは`fail`するか？
- [ ] 満点回答で全てのテストケースは`pass`するか？

#### Githubの設定
- [ ] `master`をprotected branchとして設定できているか？

#### 機能点検
- [ ] code-developでチャレンジとしてインポートできるか？
- [ ] excludes・ignoreと設定した(はずの)ファイルは表示されていない状況か？
- [ ] 満点回答をした場合、webeditorで全てのユニットテストはパスするか？
- [ ] 満点回答をした場合、local受験で全てのユニットテストはパスするか？

#### ユーザー受け入れ点検
- [ ] 第三者に作成した問題を解いてもらったか？
- [ ] 回答時間は1時間以内だったか？
