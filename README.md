#  grunt-task-symlink v0.1.0

> Create symbolic links files and directory using node fs.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-task-symlink --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-task-symlink');
```

## Why??
_I build this grunt task cause i need some simple grunt task that can generate symlink_

## How to use?
  - Run the grunt task
  - set Object in the links array
  - when linking directory set type: `dir`
  - when linking files set type: `file`
  - src is your directory/file
  - dst is your symlink directory/file
  - IMPORTANT:: symlink will always will overwrite your symlink!


## Symlink task
_Run this task with the `grunt symlink` command._

### Usage Examples

```js
symlink: {
    symlink_options: {
      links: [
        {
          src: 'test/src_dir/app',
          dst: 'test/src_dir/node_modules/app',
          type: 'dir'
        },
        {
          src: 'test/src_dir/app/index.js',
          dst: 'test/src_dir/node_modules/app.js',
          type: 'file'}
      ]
    }
  },
```


## Release History

 * 2014-03-17   v0.1.0   Unofficial release.

---

Task submitted by ["doron2402" Doron Segal](http://segaldoron.com/)