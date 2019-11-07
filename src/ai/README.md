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

$$\bm{A} = \bm{U}\bm{D}\bm{V}^{\T}$$

其中，

- $\bm{A}$
  - 是 $m\times n$ 矩阵
  - 所有实矩阵均有奇异值分解
- $\bm{U}$
  - 是 $m\times m$ 矩阵
  - 正交矩阵
  - $\bm{A}\bm{A}^{\T}$ 的特征向量组成
- $\bm{D}$
  - 是 $m\times n$ 矩阵
  - 对角矩阵
  - $\bm{A}^{\T}\bm{A}$ 或者 $\bm{A}\bm{A}^{\T}$ 的特征值的平方根
- $\bm{V}$
  - 是 $n\times n$ 矩阵
  - 正交矩阵
  - $\bm{A}^{\T}\bm{A}$ 的特征向量组成

### 例子：主成分分析

样本点 $\bm{x}^{(i)} \in \R^n$，我们想找到编码点 $\bm{c}^{(i)} \in \R^l$，
其中 $l < n$。设编码函数为 $f$，解码函数为 $g$，即，

$$f(\bm{x}) = \bm{c}$$
$$\bm{x} \approx g(f(\bm{x}))$$

假设 $g(\bm{c}) = \bm{D}\bm{c}$，其中 $\bm{D} \in \R^{n\times l}$

那么，

$$f(\bm{x}) = \bm{D}^{\T}\bm{x}$$
$$r(\bm{x}) = g(f(\bm{x})) = \bm{D}\bm{D}^{\T}\bm{x}$$

$\bm{D}$ 由 $\bm{X}^{\T}\bm{X}$ 的特征向量组成（按特征值大小排序）。

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

#### Point Estimation

Point estimator，或者 statistic:

$$\hat{\bm{\theta}}_m = g(\bm{x}^{(1)},\dots,\bm{x}^{(m)})$$

#### Bias

The bias of an estimator:

$$\bias(\hat{\bm{\theta}}_m) = \E(\hat{\bm{\theta}}_m)- \bm{\theta}$$

### 极大似然估计

假设 $\X = {\bm{x}^{(1)}, \dots, \bm{x}^{(m)}}$ 从 $p_{\data}(\bm{x})$
中独立采样，$p_{\model}(\bm{\x};\bm{\theta})$ 是 $p_{\data}(\bm{x})$ 的估计，
那么 $\bm{\theta}$ 的极大似然估计为：

$$\bm{\theta}_{\ML} = \arg\max_{\bm{\theta}} p_{\model}(\X;\bm{\theta})$$

等价于：

$$\bm{\theta}_{\ML} = \arg\max_{\bm{\theta}} \sum_{i=1}^m \log p_{\model}(\bm{x}^{(i)};\bm{\theta})$$

等价于：

$$\bm{\theta}_{\ML} = \arg\max_{\bm{\theta}} {\E}_{\bm{\x}\sim\hat{p}_{\data}} \log p_{\model}(\bm{x}^{(i)};\bm{\theta})$$

等价于：

$$\bm{\theta}_{\ML} = \arg\min_{\bm{\theta}} H(\hat{p}_{\data}, p_{\model})$$

等价于：

$$\bm{\theta}_{\ML} = \arg\min_{\bm{\theta}} D_{\KL}(\hat{p}_{\data}\Vert p_{\model})$$

#### Conditional Log-Likelihood and Mean Squared Error

用极大似然进行线性回归时，我们定义：

$$p_{\model}(y \mid \bm{x}) = \N(y; \hat{y}\left(\bm{x}; \bm{w}), \sigma^2\right)$$

### Bayesian Statistics

- 频率学派认为参数 $\bm{\theta}$ 是确定的，但未知；$\hat{\bm{\theta}}$ 是随机变量
  （因为 $\hat{\bm{\theta}}$ 是数据集的函数，而数据集是随机变量）
- Bayesian 学派用概率来反映知识的确定度：数据集由观测得到，因此不是随机的；$\bm{\theta}$
  是未知的，因此是随机变量

Bayesian 线性回归：

先验分布：

$$p(\bm{w}) = \N(\bm{w}\,; \bm{\mu}_0, \bm{\Lambda}_0)$$

后验分布：

$$p(\bm{w}\mid\bm{X},\bm{y}) = \N(\bm{w}\,; \bm{\mu}_m, \bm{\Lambda}_m)$$

其中，$\bm{\Lambda}_m = (\bm{X}^{\T}\bm{X} + \bm{\Lambda_0^{-1}})^{-1}$，
$\bm{\mu}_m = \bm{\Lambda}_m(\bm{X}^{\T}\bm{y} + \bm{\Lambda}_0^{-1}\bm{\mu}_0)$。

#### Maximum A Posteriori (MAP) Estimation

Maximum a posteriori (MAP):

$$\bm{\theta}_{\MAP} = \arg\max_{\bm{\theta}} p(\bm{\theta}\mid\X)
                     = \arg\max_{\bm{\theta}} [\log p(\X\mid\bm{\theta}) + \log p(\bm{\theta})]$$

先验分布为 $\N(\bm{w}\,;\bm{0},\frac{1}{\lambda}\bm{I}^2)$ 的 Bayesian 推断对应于 weight decay。

### 监督学习算法

#### Probabilistic Supervised Learning

线性回归:

$$p(y\mid\bm{x};\bm{\theta}) = \N(y;\bm{\theta}^{\T}\bm{x}, \bm{I})$$

Logistic 回归（二分类）：

$$p(y=1\mid\bm{x};\bm{\theta}) = \sigma(\bm{\theta}^{\T}\bm{x})$$

#### 支持向量机

$$\bm{w}^{\T}\bm{x} + b = b + \sum_{i=1}^m\alpha_i\bm{x}^{\T}\bm{x}^{(i)}$$

kernel:

$$k(\bm{x}, \bm{x}^{(i)}) = \phi(\bm{x})\cdot\phi(\bm{x}^{(i)})$$

那么，

$$f(\bm{x}) = b + \sum_i\alpha_i k(\bm{x}, \bm{x}^{(i)})$$

Gaussian kernel:

$$k(\bm{u}, \bm{v}) = \N(\bm{u} - \bm{v}; 0, \sigma^2\bm{I})$$

#### 其他简单监督学习算法

K-nearest neighbors algorithm: 由输入 $\bm{x}$ 预测 $y$ 时，
先在训练集 $\bm{X}$ 找 $\bm{x}$ $k$ 个最近的邻居；然后返回
对应 $y$ 值的均值。

### 非监督学习算法

#### 主成分分析

假设 $\bm{z} = \bm{x}^{\T}\bm{W}$，则由
[例子：主成分分析](#例子：主成分分析) 可知：

$$\bm{X}^{\T}\bm{X} = \bm{W}\bm{\Lambda}\bm{W}^{\T}$$

假设

$$\bm{X} = \bm{U}\bm{\Sigma}\bm{W}_1^{\T}$$

那么

$$\bm{X}^{\T}\bm{X} = \left(\bm{U}\bm{\Sigma}\bm{W}_1^{\T}\right)^{\T} \bm{U}\bm{\Sigma}\bm{W}_1^{\T}
                    = \bm{W}_1\bm{\Sigma}^2\bm{W}_1^{\T}$$

而特征分解是唯一的（特征值从大到小排列），所以

$$\bm{X} = \bm{U}\bm{\Sigma}\bm{W}^{\T}$$

而

$$\Var[\bm{x}] = \frac{1}{m-1}\bm{X}^{\T}\bm{X}$$
$$\Var[\bm{z}] = \frac{1}{m-1}\bm{Z}^{\T}\bm{Z}
               = \frac{1}{m-1}\bm{\Sigma}^2$$

即 PCA 使得 $\Var[\bm{x}]$ 变成了对角阵 $\Var[\bm{z}]$，
表明 $\bm{z}$ 的各个特征互不相关。

### 随机梯度下降

SGD：Stochastic Gradient Descent。

$$\bm{g} = \frac{1}{m'}\nabla_{\bm{\theta}}\sum_{i=1}^m' L(\bm{x}^{(i)}, y^{(i)}, \bm{\theta})$$

### 构建一个机器学习算法

线性回归的损失函数为：

$$J(\bm{w}, b) = -{\E}_{\x, y\sim \hat{p}_{\data}}\log p_{\model}(y\mid\bm{x})$$

其中 $p_{\model}(y\mid\bm{x}) = \N(y;\bm{x}^{\T}\bm{w}+b,1)$。

### Challenges Motivating Deep Learning

#### Local Constancy and Smoothness Regularization

平滑性：

$$f^*(\bm{x}) \approx f^*(\bm{x} + \epsilon)$$

#### Manifold Learning

A manifold is a connected region.

- 关键假设是 probability mass 高度集中

## Deep Feedforward Networks

Deep feedforward networks，又叫 feedforward neural networks，也叫
multilayer perceptrons (MLP)。

### 例子：学习 XOR

ReLU (Rectified Linear Unit):

$$g(z) = \max\{0, z\}$$

### 基于梯度的学习

对 feedforward neural networks 来说，把所有权重初始化为小的随机值很重要。

#### Cost Functions

##### 用极大似然学习条件分布

Cost function:

$$J(\bm{\theta}) = -{\E}_{\bm{\x},\bm{\y}\sim\hat{p}_{\data}}\log p_{\model}(\bm{y}\mid\bm{x})$$

如果 $p_{\model}(\bm{y}\mid\bm{x}) = \N(\bm{y}; f(\bm{x};\bm{\theta}),\bm{I})$，那么

$$J(\bm{\theta}) = \frac{1}{2}{\E}_{\bm{\x},\bm{\y}\sim\hat{p}_{\data}}\lVert\bm{y} - f(\bm{x};\bm{\theta})\rVert^2 + \const$$

##### Learning Conditional Statistics

$$f^* = \arg \min_f {\E}_{\bm{\x},\bm{\y}\sim p_{\data}} \lVert\bm{y} - f(\bm{x})\rVert^2$$

推导出

$$f^*(\bm{x}) = {\E}_{\bm{\y}\sim p_{\data}(\bm{y}\mid\bm{x})} [\bm{y}]$$

$$f^* = \arg \min_f {\E}_{\bm{\x},\bm{\y}\sim p_{\data}} \lVert\bm{y} - f(\bm{x})\rVert_1$$

推导出 $f^*(\bm{x})$ 是 $\bm{y}$ 在 $p_{\data}(\bm{y}\mid\bm{x})$ 上的中位数。

#### Output Units

##### Linear Units for Gaussian Output Distributions

Linear output units:

$$\hat{\bm{y}} = \bm{W}^{\T}\bm{h} + \bm{b}$$

##### Sigmoid Units for Bernoulli Output Distributions

Sigmoid output unit:

$$\hat{y} = \sigma(\bm{w}^{\T}\bm{h} + b)$$

假设

$$z  = \bm{w}^{\T}\bm{h} + b$$
$$P(y) = \sigma((2y - 1)z)$$

##### Softmax Units for Multinoulli Output Distributions

记：

$$\bm{z}  = \bm{W}^{\T}\bm{h} + \bm{b}$$
$$P(y=i\mid\bm{z}) = \softmax(\bm{z})_i
                = \frac{\exp(z_i)}{\sum_j\exp(z_j)}$$

数值计算稳定版 softmax:

$$\softmax(\bm{z}) = \softmax(\bm{z} - \max_i z_i)$$

##### Other Output Types

神经网络的输出为函数 $f(\bm{x};\bm{\theta})$，表示的条件概率为
$p(\bm{y};f(\bm{x};\bm{\theta}))$，即神经网络的输出不直接预测 $\bm{y}$，
而是控制条件概率分布的参数。

### Hidden Units

Hidden units 先计算仿射变换 $\bm{z} = \bm{W}^{\T}\bm{h} + \bm{b}$，然后
按元素应用非线性函数 ${g(\bm{z})}$。

#### Rectified Linear Units and Their Generalizations

$$g(z) = \max\{0, z\}$$

推广：

$$h+i = g(\bm{z}, \bm{\alpha})_i
      = \max(0, z_i) + \alpha_i\min(0, z_i)$$

- Absolute value rectification: $\alpha_i = -1$，即 $g(z) = \lvert z\rvert$
- Leaky ReLU: $\alpha_i$ 为较小值，比如 $0.01$
- Parametric RelU（PReLU）：$\alpha_i$ 是可以学习的参数

Maxout units:

$$g(\bm{z})_i = \max_{j\in\G^{(i)}}z_j$$

其中，$\G^{(i)}$ 是输入组 $i$ 的索引集合，$\{(i-1)k+1,\dots,ik\}$。

#### Logistic Sigmoid and Hyperbolic Tangent

Logistic sigmoid Activation function:

$$g(z) = \sigma(z)$

Hyperbolic tangent activation function:

$$g(z) = \tanh(z)
       = \frac{\exp(z)-\exp(-z)}{\exp(z)+\exp(-z)}$$

#### Other Hidden Units

- Radial basis function (RBF unit): $h_i = \exp\left(-\frac{1}{\sigma_i^2}\lVert\bm{W}_{:,i} - \bm{x}\rVert^2\right)$
- Softplus: $g(a) = \zeta(a) = \log(1 + e^a)$
- Hard tanh: $g(a) = \max(-1, \min(1, a))$

### Architecture Design

#### Universal Approximation Properties and Depth

### Back-Propagation and Other Differentiation Algorithms

#### Chain Rule of Calculus

假设 $\bm{x} \in \R^m$，$\bm{y} \in \R^n$，$g: \;\R^m \to \R^n$，$f: \;\R^n \to \R$，
$\bm{y} = g(\bm{x})$，$z = f(\bm{y})$，那么，

$$\frac{\partial z}{\partial x_i} = \sum_j \frac{\partial z}{\partial y_j}\frac{\partial y_j}{\partial x_i}$$

或者：

$$\nabla_{\bm{x}} z = \left(\frac{\partial\bm{y}}{\partial\bm{x}}\right)^{\T}\nabla_{\bm{y}} z$$

其中，$\frac{\bm{y}}{\bm{x}}$ 是 $n\times m$ 的 Jacobian 矩阵。

对张量而言，

$$\nabla_{\tX} z = \sum_j(\nabla_{\tX}Y_j)\frac{\partial z}{\partial Y_j}$$

## Regularization for Deep Learning

### Parameter Norm Penalties

Regularized objective function:

$$\tilde{J}(\vtheta\,;\mX, \vy) = J(\vtheta\,;\mX, \vy) + \alpha\Omega(\vtheta)$$

其中，$\alpha \in [0, \infty]$ 是超参数。

#### $L^2$ Parameter Regularization

$L^2$ parameter norm penalty 又叫 weight decay。

假设没有 bias parameter，那么，

$$\tilde{J}(\vw\,;\mX, \vy) = \frac{\alpha}{2}\vw^{\T}\vw + J(\vw\,;\mX, \vy)$$

对应的参数梯度为

$$\nabla_{\vw}\tilde{J}(\vw\,;\mX, \vy) = \alpha\vw + \nabla_{\vw}J(\vw\,;\mX, \vy)$$

更新权重步骤：

$$\vw \leftarrow \vw - \epsilon(\alpha\vw + \nabla_{\vw}J(\vw\,;\mX, \vy))$$

即

$$\vw \leftarrow (1 - \epsilon\alpha)\vw - \epsilon\nabla_{\vw}J(\vw\,;\mX, \vy)$$

假设损失函数是二次函数，

$$\hat{J}(\vtheta) = J(\vw^*) + \frac{1}{2}(\vw-\vw^*)^{\T}\mH(\vw-\vw^*)$$

其中，$\mH$ 是 $J$ 关于 $\vw$ 在 $\vw^*$ 的 Hessian 矩阵。

假设 $\tilde{\vw}$ 是 regularized 版的损失函数的最小值的位置，那么

$$\alpha\tilde{\vw} + \mH(\tilde{\vw} - \vw^*) = 0$$
$$\tilde{\vw} = (\mH + \alpha\mI)^{-1}\mH\vw^*$$

因为 $\mH$ 是实对称矩阵，可以特征分解，假设为 $\mH = \mQ\mLambda\mQ^{\T}$，那么

$$\tilde{\vw} = \mQ(\mLambda + \alpha\mI)^{-1}\mLambda\mQ^{\T}\vw^*$$

可以看到，$\vw^*$ 在 $\mH$ 第 $i$ 个特征向量的方向被缩放了 $\frac{\lambda_i}{\lambda_i + \alpha}$。

#### $L^1$ Regularization

$L^1$ regularization:

$$\Omega(\vtheta) = \lVert\vw\rVert_1 = \sum_i\lvert w_i\rvert$$

损失函数为

$$\tilde{J}(\vw\,;\mX, \vy) = \alpha\lVert\vw\rVert_1 + J(\vw\,;\mX, \vy)$$

梯度为

$$\nabla_{\vw}\tilde{J}(\vw\,;\mX, \vy) = \alpha\sign(\vw) + \nabla_{\vw}J(\vw\,;\mX, \vy)$$

$L^1$ 正则化等价于先验概率为 Laplace 分布的 MAP Bayesian 推断：

$$\log p(\vw) = \sum_i\log\Laplace(w_i;0,\frac{1}{\alpha}) = -\alpha\lVert\vw\rVert_1 + n\log\alpha - n\log 2$$

### Regularization and Under-Constrained Problems

Moore-Penrose 伪逆：

$$\mX^{+} = \lim_{\alpha\searrow 0}(\mX^{\T}\mX + \alpha\mI)^{-1}\mX^{\T}$$

### Sparse Representations

Norm penalty regularization:

$$\tilde{J}(\vtheta\,;\mX, \vy) = J(\vtheta\,;\mX, \vy) + \alpha\Omega(\vh)$$

其中，$\alpha\in [0, \infty]$。

### Bagging and Other Ensemble Methods

Bagging (short for bootstrap aggregating) 是组合多个模型以减小泛化误差的技术。

### Dropout

Dropout:

- 每次加载样本到 minibatch 后，随机采样不同的二值 mask，
  然后分别应用于网络中所有的输入单元和隐藏单元
- 每个单元的 mask 独立采样
- 典型地，输入单元包含进网络的概率为 $0.8$，隐藏单元包含进网络的概率为 $0.5$

## Optimization for Training Deep Models
