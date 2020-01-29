# Rust

## rustup

```sh
rustup default beta
rustup component add rls
```

## 命名惯例

| 项目                    | 命名惯例                                                  |
|-------------------------|-----------------------------------------------------------|
| Crates                  | `snake_case` (but prefer single word)                     |
| Modules                 | `snake_case`                                              |
| Types                   | `CamelCase`                                               |
| Traits                  | `CamelCase`                                               |
| Enum variants           | `CamelCase`                                               |
| Functions               | `snake_case`                                              |
| Methods                 | `snake_case`                                              |
| General constructors    | `new` or `with_more_details`                              |
| Conversion constructors | `from_some_other_type`                                    |
| Local variables         | `snake_case`                                              |
| Static variables        | `SCREAMING_SNAKE_CASE`                                    |
| Constant variables      | `SCREAMING_SNAKE_CASE`                                    |
| Type parameters         | concise `CamelCase`, usually single uppercase letter: `T` |
| Lifetimes               | short, lowercase: `'a`                                    |

- `CamelCase` 里，首字母缩写词作为一个单词，比如使用 `Uuid` 而不是 `UUID`
- `snake_case` 里，首字母缩写词要小写，比如 `is_xid_start`
- `snake_case` 或者 `SCREAMING_SNAKE_CASE` 里，单词除非在末尾，否则不应该为单个字母，比如：
  - 使用 `btree_map` 而不是 `b_tree_map`
  - 使用 `PI_2` 而不是 `PI2`

> 参考于 <https://doc.rust-lang.org/1.0.0/style/style/naming/README.html>。

## Cargo

```sh
cargo new hello_cargo  # 新建项目
```

## 字符串拼接

```rust
format!("x={}", x)
```

## slice

可以省略第 1 个索引，默认为 0：

```rust
let s = String::from("hello");

let slice = &s[0..2];
let slice = &s[..2]; // 等价于上句
```

也可以省略第 2 个索引，默认为 `slice.len()`：

```rust
let s = String::from("hello");

let len = s.len();

let slice = &s[3..len];
let slice = &s[3..]; // 等价于上句
```

也可以 2 个都省略，表示索引全部：

```rust
let s = String::from("hello");

let len = s.len();

let slice = &s[0..len];
let slice = &s[..]; // 等价于上句
```

> 参考于 <https://doc.rust-lang.org/book/ch04-03-slices.html>。

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

## iter

有 3 种创建迭代器的方式：

- `iter()`，迭代 `&T`
- `iter_mut()`，迭代 `&mut T`
- `into_iter()`，迭代 `T`

> 参考于
> <https://doc.rust-lang.org/std/iter/index.html#the-three-forms-of-iteration>。
