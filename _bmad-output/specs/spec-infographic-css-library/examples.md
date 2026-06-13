# Examples

## Process Example

```html
<section class="ig-process-pattern ig-process-variant-pipeline">
  <header class="ig-process-header">
    <p class="ig-process-kicker">Pipeline</p>
    <h2 class="ig-process-title">From source artifact to visual explanation</h2>
    <p class="ig-process-summary">The LLM reads content, chooses a pattern, and emits HTML.</p>
  </header>
  <div class="ig-process-pipeline">
    <article class="ig-process-pipeline-stage">
      <p class="ig-process-pipeline-label">Input</p>
      <h3 class="ig-process-pipeline-title">Source content</h3>
      <p class="ig-process-pipeline-body">PRD, spec, note, or transcript.</p>
    </article>
  </div>
</section>
```

## Comparison Example

```html
<section class="ig-comparison-pattern ig-comparison-variant-before-after">
  <header class="ig-comparison-header">
    <h2 class="ig-comparison-title">Markdown versus infographic HTML</h2>
  </header>
  <div class="ig-comparison-panels">
    <article class="ig-comparison-panel ig-comparison-panel-before">
      <h3 class="ig-comparison-panel-title">Before</h3>
      <p class="ig-comparison-panel-body">Flat, dense, and hard to scan.</p>
    </article>
    <article class="ig-comparison-panel ig-comparison-panel-after">
      <h3 class="ig-comparison-panel-title">After</h3>
      <p class="ig-comparison-panel-body">Structured, visual, and reviewable.</p>
    </article>
  </div>
</section>
```

## Structure Example

```html
<section class="ig-structure-pattern ig-structure-variant-pillars">
  <header class="ig-structure-header">
    <h2 class="ig-structure-title">Library pillars</h2>
  </header>
  <div class="ig-structure-pillars">
    <article class="ig-structure-pillar">
      <span class="ig-structure-pillar-index">01</span>
      <h3 class="ig-structure-pillar-title">Patterns</h3>
      <p class="ig-structure-pillar-body">Named visual structures.</p>
    </article>
  </div>
</section>
```

## Analysis Example

```html
<section class="ig-analysis-pattern ig-analysis-variant-2x2">
  <header class="ig-analysis-header">
    <h2 class="ig-analysis-title">Value versus implementation effort</h2>
  </header>
  <div class="ig-analysis-matrix">
    <article class="ig-analysis-quadrant">
      <h3 class="ig-analysis-quadrant-title">High value / easy</h3>
    </article>
  </div>
</section>
```

## Data Example

```html
<section class="ig-data-pattern ig-data-variant-metrics">
  <header class="ig-data-header">
    <h2 class="ig-data-title">Artifact summary</h2>
  </header>
  <div class="ig-data-metrics">
    <article class="ig-data-metric">
      <p class="ig-data-metric-label">Patterns</p>
      <strong class="ig-data-metric-value">6</strong>
    </article>
  </div>
</section>
```

## Code Example

```html
<section class="ig-code-pattern ig-code-variant-diff">
  <header class="ig-code-header">
    <h2 class="ig-code-title">Schema change</h2>
  </header>
  <div class="ig-code-diff">
    <pre class="ig-code-block ig-code-block-before"><code>- scan orders by user_id</code></pre>
    <pre class="ig-code-block ig-code-block-after"><code>+ add index on orders.user_id</code></pre>
  </div>
</section>
```

## Risk Callout Example

```html
<aside class="ig-callout ig-callout-risk">
  <p class="ig-callout-label">Risk</p>
  <h3 class="ig-callout-title">Write performance may change</h3>
  <p class="ig-callout-body">Read speed improves, but inserts and updates may slow slightly.</p>
</aside>
```
