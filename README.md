# GPIO Faye

A Faye client that can access Raspberry Pi's GPIO pins.

Turn pins on and off by sending Sockets to the Raspberry Pi.

## Installation
First, make sure you have node.js and npm installed.

If you don't, open a terminal and type:

    sudo apt-get install nodejs npm node-semver

Now we need to allow your user to access the GPIO pins (can only be done from root by default). We are going to use GPIO Admin for that:

    git clone git://github.com/juangesino/quick2wire-gpio-admin.git
    cd quick2wire-gpio-admin
    make
    sudo make install
    sudo adduser $USER gpio

Logout and login again ([more info](https://github.com/juangesino/quick2wire-gpio-admin)).

Now we are ready to clone the server.

    git clone https://github.com/juangesino/faye-gpio.git
    cd faye-gpio
    npm install

To run the script:

    node app.js

## Usage

TODO

## Examples

TODO

## Contributing

1. Fork it ( https://github.com/juangesino/faye-gpio/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## License

See [MIT-LICENSE](https://github.com/juangesino/faye-gpio/blob/master/LICENSE)
