import React from 'react'
/**
 *
 * @param {html} string
 */
export default function CreateMarkup({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
