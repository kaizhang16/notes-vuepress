# Deep Learning

Ian Goodfellow、Yoshua Bengio 和 Aaron Courville 编写。

## Introduction

- `MLP`: `Multilayer Perceptron`，多层感知器

## 线性代数

### 特殊矩阵和向量

正交矩阵：

$$ \bm{A}^{\T}\bm{A} = \bm{A}\bm{A}^{\T} = \bm{I}$$

其中，$\bm{A}$ 为方阵。

### 特征分解

矩阵 $\bm{A}$ 的特征分解为：

$$\bm{A} = \bm{V}\diag(\bm{\lambda})\bm{V}^{-1}$$

其中，$\bm{V} = [\bm{v}^{(1)}, \dots, \bm{v}^{(n)}]^{\T}$，$\bm{\lambda} = [\lambda_1, \dots, \lambda_n]^{\T}$。

不是每个矩阵都有特征分解。实对称矩阵有实值特征向量和特征值，
有特征分解：

$$\bm{A} = \bm{Q}\bm{\Lambda}\bm{Q}^{\T}$$

其中，$\bm{Q}$ 是 $\bm{A}$ 的特征向量组成的正交矩阵。

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

Self-information：

$$I(x) = -\log P(x)$$

Shannon 熵：

$$H(\x) = {\E}_{\x \sim P}[I(x)] = -{\E}_{x \sim P}[\log P(x)]$$

可以表示为 $H(P)$。

Kullback-Leibler (KL) divergence:

$$D_{KL}(P \Vert Q) = {\E}_{\x \sim P}\left[\log\frac{P(x)}{Q(x)}\right] = {\E}_{\x \sim P}[\log P(x) - \log Q(x)]$$

- KL 散度非负
- 当且仅当 $P$、$Q$ 几乎处处相等时，KL 散度为 $0$

交叉熵：

$$H(P, Q) = -{\E}_{\x \sim P}\log Q(x)$$

信息论语境里，按照惯例 $\lim_{x \to 0}x\log x = 0$。

## 数值计算

### Overflow and Underflow

- `underflow`: $0$ 附近的数被近似为 $0$
- `overflow`: 很大的数被近似为 $\infty$ 或者 $-\infty$

softmax:

$$\softmax(\bm{x})_i = \frac{\exp(x_i)}{\sum_{j=1}^n \exp(x_j)}$$

为了让 $\softmax$ 计算稳定，我们计算 $\softmax(\bm{z})$，其中，
$\bm{z} = \bm{x} - \max_i x_i$。

### Poor Conditioning

对于 $f(\bm{x}) = \bm{A}^{-1}\bm{x}$ 来说，$\bm{A}$ 的 condition number 为：

$$\max_{i, j}\left\lvert\frac{\lambda_i}{\lambda_j}\right\rvert$$

其中，$\bm{A} \in \R^{n\times n}$ 有特征值分解，$\lambda$ 表示特征值。
当条件数较大时，矩阵求逆对输入错误很敏感。

### 基于梯度的优化

#### 梯度之外：Jacobian 和 Hessian 矩阵

Jacobian 矩阵:

$$J_{i, j} = \frac{\partial}{\partial x_j}f(\bm{x})_i$$

其中，$\bm{f}: \R^m \to \R^n$，$\bm{J} \in \R^{n\times m}$。

Hessian 矩阵:

$$\bm{H}(f)(\bm{x})_{i, j} = \frac{\partial^2}{\partial x\partial y}f(\bm{x})$$

其中，$f: \R^n \to \R$。

Hessian 矩阵几乎处处（如果二阶导数连续，则二阶导数满足交换律，
则 Hessian 矩阵对称）是实对称矩阵，所以 Hessian 矩阵几乎处处有本征值分解。

二阶 Taylor 展开：

$$f(\bm{x}) \approx f(\bm{x}^{(0)}) + (\bm{x} - \bm{x}^{(0)})^{\T}\bm{g} +
  \frac{1}{2}(\bm{x} - \bm{x}^{(0)})^{\T}\bm{H}(\bm{x} - \bm{x}^{(0)})$$

其中，$\bm{g}$ 是 $\bm{x}^{(0)}$ 处的梯度，$\bm{H}$ 是 $\bm{x}^{(0)}$ 处的 Hessian 矩阵。
设 $\bm{x} = \bm{x}^{(0)} - \epsilon\bm{g}$，则为：

$$f(\bm{x}^{(0)} - \epsilon\bm{g}) \approx
  f(\bm{x}^{(0)}) - \epsilon\bm{g}^{\T}\bm{g} +
  \frac{1}{2}\epsilon^2\bm{g}^{\T}\bm{H}\bm{g}$$

### Constrained Optimization

约束为：

$$\bm{x} \in \S$$

Karush-Kuhn-Tucker 假设：

$$\S = \{\bm{x} \mid \forall i, g^{(i)}(\bm{x}) = 0 且 \forall j, h^{(j)}(\bm{x}) \le 0\}$$

Generalized Lagrangian:

$$L(\bm{x}, \bm{\lambda}, \bm{\alpha}) =
  f(\bm{x}) +
  \sum_i \lambda_i g^{(i)}(\bm{x}) +
  \sum_j \alpha_j h^{(j)}(\bm{x})$$

则 $\min_{\bm{x} \in \S}f(\bm{x})$ 等价于：

$$\min_{\bm{x}}\max_{\bm{\lambda}}\max_{\bm{\alpha}, \bm{\alpha} \ge 0}L(\bm{x}, \bm{\lambda}, \bm{\alpha})$$

KKT 条件：

- generalized Lagrangian 的梯度为 $0$
- $\bm{x}$ 和 KKT 乘子满足约束
- $\bm{\alpha} \odot \bm{h}(\bm{x}) = \bm{0}$

## 机器学习基础

### 学习算法

#### The Task，T

- 样本：$\bm{x} \in \R^n$，其中 $x_i$ 表示特征

#### 例子：线性回归

回归的目标是根据 $\bm{x} \in \R^{n}$ 预测 $y \in \R$。线性的意思是：

$$\hat{y} = \bm{w}^{\T}\bm{x}$$

其中，$\bm{w} \in \R^n$ 为参数。

均方误差：

$${\MSE}_{\test} = \frac{1}{m}\sum_i\left(\hat{\bm{y}}^{(\test)} - \bm{y}^{(\test)}\right)_i^2$$

或者：

$${\MSE}_{\test} = \frac{1}{m}\lVert\hat{\bm{y}}^{(\test)} - \bm{y}^{(\test)}\rVert^2$$

### Capacity, Overfitting and Underfitting

- i.i.d: 独立（independent）同分布（identically distributed）
- 欠拟合：训练误差过高
- 过拟合：训练误差与泛化误差相差太大

#### 正则化

Weight decay:

$$J(\bm{w}) = {\MSE}_{\train} + \lambda\bm{w}^{\T}\bm{w}$$

Regularizer:

$$\Omega(\bm{w}) = \bm{w}^{\T}\bm{w}$$

### Estimators, Bias and Variance

#### Bias

The bias of an estimator:

$$\bias(\hat{\bm{\theta}}_m) = \E(\hat{\bm{\theta}}_m)- \bm{\theta}$$
