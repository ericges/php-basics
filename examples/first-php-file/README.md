# Your First PHP File

This example contains a single `hello.php` script that prints "Hello, world!" to the terminal or browser.

## Installing PHP 8.2 on Ubuntu

```bash
sudo apt update
sudo apt install -y software-properties-common ca-certificates

sudo add-apt-repository -y ppa:ondrej/php
sudo apt update

sudo apt install -y \
  php8.2 \
  php8.2-cli \
  php8.2-common \
  php8.2-fpm \
  php8.2-mysql \
  php8.2-pgsql \
  php8.2-sqlite3 \
  php8.2-curl \
  php8.2-gd \
  php8.2-mbstring \
  php8.2-xml \
  php8.2-zip \
  php8.2-bcmath \
  php8.2-intl \
  php8.2-soap \
  php8.2-readline \
  php8.2-opcache \
  php8.2-imagick \
  php8.2-redis
```

Verify the installation:

```bash
php -v   # prints the PHP version
php -m   # lists installed modules
```

## Running the example

From this directory, run `hello.php` on the command line:

```bash
php hello.php
```

Or start the built-in development server and open it in your browser:

```bash
php -S localhost:8000
# visit http://localhost:8000/hello.php
```
