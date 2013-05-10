clojure-concurrency-rich-hickey
===============================

Перевод на русский язык выступления Ричарда Хикки.

#Этапы перевода
1. Создать английские субтитры в формате WebVTT. [1%]
2. Перевести субтитры на русский язык. [0%]
3. Восстановить исходный код программы, продемонстрированной Ричердом. [0%]
4. Озвучить видео на русском языке. [0%]

##Процесс перевода
Проект доступен [онлайн](http://clojureby-webtools.rhcloud.com/).

Но рекомендую не качать каждый раз видео и вообще отвязаться от онлайна. Для этого разверните все локально:

`git clone git@github.com:dimhold/clojure-concurrency-rich-hickey.git`

`cd clojure-concurrency-rich-hickey`

`wget http://clojureby-webtools.rhcloud.com/concurrency.webm`


Правда, локально поломается track тэг. 
Chrome напишет в консоль: Cross-origin text track load denied by Cross-Origin Resource Sharing policy. И откажется показывать субтитры.
Зато шустро будет работать :)


На сегодняшний день [webVTT и track тэг](http://dev.w3.org/html5/webvtt) поддерживают: Chrome, Safari. Частично: IE, Opera. Совсем плохо: Firefox.


##Хочу помочь
Здорово! Работы много и я буду очень рад если вы поможете.

Действуте как вам удобнее:

1. Сделайте fork проекта. Внесите правки и дополнения (скорее всего это будут *.vtt файлы). Отправте Pull Request.
2. Или просто свяжитесь со мной. Мой email (такой же xmpp) указан здесь: [https://github.com/dimhold](https://github.com/dimhold)
