# Rust

## rustup

```sh
rustup default beta
rustup component add rls
```

## Cargo

```sh
cargo new hello_cargo  # 新建项目
```

## 字符串拼接

```rust
format!("x={}", x)
```

## Enums 和 Pattern Matching

```rust
enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter,
}

fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter => 25,
    }
}
```

> 参考于 <https://doc.rust-lang.org/book/ch06-02-match.html>。
