export default function Statistics(props) {
    const {label, percentage} = props
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        <li class="item">
          <span class="label">{label}</span>
          <span class="percentage">{percentage}%</span>
        </li>
        <li class="item">
          <span class="label">{label}</span>
          <span class="percentage">{percentage}%</span>
        </li>
        <li class="item">
          <span class="label">{label}</span>
          <span class="percentage">{percentage}%</span>
        </li>
        <li class="item">
          <span class="label">{label}</span>
          <span class="percentage">{percentage}%</span>
        </li>
      </ul>
    </section>);
}