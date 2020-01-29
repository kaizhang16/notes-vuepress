# Java

## List

### 初始化

```java{4}
import java.util.Arrays;
import java.util.List;

List<String> xs = Arrays.asList("foo", "bar");
```

## Javadoc

- [guava](https://www.javadoc.io/doc/com.google.guava/guava/28.1-jre)

## Guava

### 大小写转换

```java
CaseFormat.LOWER_UNDERSCORE.to(CaseFormat.LOWER_CAMEL, "my_name")
```

## Spring

### sprint-boot

#### actuator

禁用 Mail health check。

```yaml
management.health.mail.enabled: false
```
