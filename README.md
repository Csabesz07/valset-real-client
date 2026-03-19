```md
# Az origin jelenleg a template originje, nevezzük template-nek inkább

git remote rename origin template

# Hozzuk létre a saját origin-jét a repo-nak

git remote add origin git@github.com:your-org/my-app.git

> Ha véletlenül elírtad a remote url-t ezzel tudod megváltoztatni
> git remote set-url origin https://github.com/Csabesz07/valset-real-client.git

# Az új remote-nak (origin) hozzunk létre egy branch-et

git checkout -b <branch-name>

# Ezt pusholjuk is fel, a remote name legyen az origin, innentől közös a history-ja a két cuccmáknak

git push <remote-name> <branch-name>

# Amennyiben volt változás a template remote-on, akkor fetch-eljük

git fetch template

# Majd rebase-eljük egy clean history-val a projektet

git rebase template/master

# Fontos, hogy rebase után ne pulloljunk, hanem egyből push. A force-with-lease nem fogja felül írni mások commitjait.

git push --force-with-lease
```

# ValsetFeTemplate

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
