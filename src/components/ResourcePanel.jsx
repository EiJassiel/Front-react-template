import LinkPill from './LinkPill'

function ResourcePanel({ group }) {
  return (
    <div id={group.id}>
      <svg className="icon" role="presentation" aria-hidden="true">
        <use href={group.iconHref}></use>
      </svg>
      <h2>{group.title}</h2>
      <p>{group.description}</p>
      <ul>
        {group.links.map((link) => (
          <li key={link.label}>
            <LinkPill {...link} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ResourcePanel
