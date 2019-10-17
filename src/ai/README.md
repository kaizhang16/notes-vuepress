# Deep Learning

Ian Goodfellow、Yoshua Bengio 和 Aaron Courville 编写。

## Introduction

- `MLP`: `Multilayer Perceptron`，多层感知器

## 线性代数

### Singular Value Decomposition

- `SVD`: `Singular Value Decomposition`，奇异值分解

## Probability and Information Theory

### Continuous Variables and Probability Density Functions

- `PDF`: `Probability Density Function`，概率密度函数

### 期望、方差和协方差

$${\E}_{\x \sim P}[f(x)] = \sum_x P(x)f(x)$$
$${\E}_{\x \sim p}[f(x)] = \int p(x)f(x)dx$$
$$\Var(f(x)) = \E[(f(x) - \E[f(x)])^2]$$

### 常见概率分布

#### Bernoulli 分布

$$P(\textrm{x} = 1) = \phi$$
$$P(\textrm{x} = 0) = 1 - \phi$$
$$P(\textrm{x} = x) = \phi^x(1 - \phi)^{1-x}$$
$$E_{\x}[x] = \phi$$
$${\Var}_{\x}(x) = \phi(1 - \phi)$$

其中，$\phi \in [0, 1]$。

#### 高斯分布

$$\N(x;\mu,\sigma^2) = \sqrt{\frac{1}{2\pi\sigma^2}}\exp\left(-\frac{1}{2\sigma^2}(x-\mu)^2\right)$$
$$\E[x] = \mu$$
$${\Var}_{\x}(x) = \sigma^2$$
$$\N(x;\mu,\beta^{-1}) = \sqrt{\frac{\beta}{2\pi}}\exp\left(-\frac{1}{2}\beta(x-\mu)^2\right)$$

其中，$\mu \in \R$，$\sigma \in (0, \infty)$，$\beta \in (0, \infty)$。

多变量高斯分布：

$$\N(\bm{x};\bm{\mu},\bm{\Sigma}) = \sqrt{\frac{1}{(2\pi)^n\det(\bm{\Sigma})}}\exp\left(-\frac{1}{2}(\bm{x}-\bm{\mu})^{\T}\bm{\Sigma}^{-1}(\bm{x}-\bm{\mu})\right)$$
$$\N(\bm{x};\bm{\mu},\bm{\beta}^{-1}) = \sqrt{\frac{\det(\bm{\beta})}{(2\pi)^n}}\exp\left(-\frac{1}{2}(\bm{x}-\bm{\mu})^{\T}\bm{\beta}(\bm{x}-\bm{\mu})\right)$$

其中，$\bm{\Sigma}$ 为正定对称矩阵，为分布的协方差矩阵；$\bm{\beta}$ 为精度矩阵。

#### 指数分布和 Laplace 分布

指数分布：

$$p(x;\lambda) = \lambda \bm{1}_{x \ge 0}\exp(-\lambda x)$$

Laplace 分布：

$$\Laplace(x;\mu, \gamma) = \frac{1}{2\gamma}\exp(-\frac{|x-\mu|}{\gamma})$$

#### Dirac 分布和 Empirical 分布

Dirac 分布：

$$p(x) = \delta(x- \mu)$$

Empirical 分布（只针对于连续变量）：

$$\hat{p}(\bm{x}) = \frac{1}{m}\sum_{i=1}^m \delta(\bm{x} - \bm{x}^{(i)})$$

#### 混合分布

$$P(\x) = \sum_i P(c=i)P(x \mid c=i)$$

### 常用函数的有用性质

logistic sigmoid:

$$\sigma(x) = \frac{1}{1 + \exp(-x)}$$

常用来产生 Bernoulli 分布的 $\phi$ 参数，因为其范围为 $(0, 1)$。

softplus 函数：

$$\zeta(x) = \log(1 + {\exp}(x))$$

可以用来产生正态分布的 $\beta$ 或者 $\sigma$ 参数，因为其范围为 $(0, \infty)$。

有用性质：

$$\sigma(x) = \frac{\exp(x)}{\exp(x) + \exp(0)}$$
$$\frac{d}{dx}\sigma(x) = \sigma(x)(1 - \sigma(x))$$
$$1 - \sigma(x) = \sigma(-x)$$
$$\log \sigma(x) = -\zeta(-x)$$
$$\frac{d}{dx}\zeta(x) = \sigma(x)$$
$$\forall x \in (0, 1), \sigma^{-1}(x) = \log(\frac{x}{1-x})$$
$$\forall x > 0, \zeta^{-1}(x) = \log({\exp}(x) - 1)$$
$$\zeta(x) = \int_{-\infty}^x \sigma(y)dy$$
$$\zeta(x) - \zeta(-x) = x$$

### Bayes' Rule

$$P(x \mid y) = \frac{P(x)P(y \mid x)}{P(y)}$$

其中，$P(y) = \sum_x P(y \mid x)P(x)$。

### 信息论
