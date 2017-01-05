<img align="right" width="75" src="/dsui.mark.png"/>Dermstore UI Environment
===

> build process config files, datas, etc.

Where the Grunt magic gets made. Or, in less sexy, more intelligible terms: where we keep all of the Javascript and JSON files that are used to configure our build process.

- [**`core/`**](./core)

  > _main UI [style](./core/import.styles) and [script](./core/import.scripts) contexts_

- **`lib/`**

  > _install location for Bower packages. (**note**: dependencies are downloaded to your local repo on running `bower install`, but are_ not _checked in to Git)_

- [**`conf/`**](./conf)

  > _Grunt task objects + JS conf partials_

- [**`data/`**](./data)

  > _assorted data used in the Grunt conf_