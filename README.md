<!-- TODO: WARNING! There are many sections marked `TODO` and `{{}}` in this repo. -->
<!--       - Do all the TODO tasks. -->
<!--       - Fill out all the `{{}}`s. -->
<!--       - Remove all `TODO`s and `{{}}`s when complete. -->
<!--       - For more information, see [codecheck-contents CONTRIBUTING.md](https://github.com/givery-technology/codecheck-contents/blob/master/CONTRIBUTING.md) -->

# {{Challenge名}}

*これは[codecheck](https://code-check.io/)のチャレンジです。  
初めての方はまず[チュートリアル](https://app.code-check.io/orgs/codecheck/challenges/77)をご覧ください。*

{{Challenge内容に関する背景情報。楽しく且つ明瞭に記載されたい。}}

## ザ・ミッション
{{１文章で要求されている目標・出力結果を表現する。}}

## 実装の詳細
{{実装方法に関する詳細説明。CLIテンプレートアプリの詳細およびAPIの仕様等を含む。}}

#### CLI
入力値を引数に取り、結果を標準出力に出力するCLIアプリケーションとして解答を実装してください。
CLIの実装方法については[指定言語].mdを参照ください。

#### 入力ルール
- {{入力の詳細}}
- ...

#### 出力ルール
- {{期待出力の詳細}}
- ...

#### 入出力例
```shell
$ {{CLIアプリ名}} {{引数}}
{{出力例}}
```

なお、期待する入出力は [test/](./test/) ディレクトリにいくつか定義されています。  
実装する際の参考にしてください。

## Answer.md
[answer.md](./answer.md)を用意してあるので、その中に

- どのように実装したか、工夫した点は何か
- 発生した問題、難しかった箇所
- それをどのようにして対処したのか

等を書いてください。
