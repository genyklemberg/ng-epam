# NgEpam

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Main rules

    1. Сначала импортируем Ангуляр пакеты, затем сторонние пакеты, например, Rxjs, затем свои. Разделяем блоки пустой строкой
    2. Поля класса описываем в следующей последовательности, блоки полей и методы отделяем пустой строкой:
        - Инпуты,
        - Аутпуты
        - Другие декорируемые свойства
        - публичные поля
        - приватные поля
        - конструктор
        - методы жизненного цикла с префиксом ng
        - обработчики событий с префиксом on
        - публичные методы
        - приватные методы
    3. Модификатор public для полей и методов не используем. Они public по-умолчанию. Для параметров конструктора используем.
    4. То, к чему нужен доступ в темплейте - public, а не private.
    5. В корневой папке приложения app должны быть только корневой компонент и корневой модуль. Остальные файлы должны быть разложены по папкам.
    6. Модели именовать ProductModel, CartModel, и т. д.
    7. Проект организовать по функционалу, а не по типам сущностей. 
       Например
        cart 
            components
            services
        products
            components
            models
            services

