import { getExternalLinkProps } from '../utils/navigation'

function LinkPill({ href, iconHref, label, imageSrc, imageAlt = '' }) {
  return (
    <a href={href} {...getExternalLinkProps(href)}>
      {imageSrc ? (
        <img className="button-icon" src={imageSrc} alt={imageAlt} />
      ) : (
        <svg className="button-icon" role="presentation" aria-hidden="true">
          <use href={iconHref}></use>
        </svg>
      )}
      {label}
    </a>
  )
}

export default LinkPill
