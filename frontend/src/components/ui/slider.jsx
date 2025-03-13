import * as React from 'react'

function _nullishCoalesce(lhs, rhsFn) {
  if (lhs != null) {
    return lhs
  } else {
    return rhsFn()
  }
}

function _optionalChain(ops) {
  let lastAccessLHS = undefined
  let value = ops[0]
  let i = 1
  while (i < ops.length) {
    const op = ops[i]
    const fn = ops[i + 1]
    i += 2
    if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
      return undefined
    }
    if (op === 'access' || op === 'optionalAccess') {
      lastAccessLHS = value
      value = fn(value)
    } else if (op === 'call' || op === 'optionalCall') {
      value = fn((...args) => value.call(lastAccessLHS, ...args))
      lastAccessLHS = undefined
    }
  }
  return value
}

export const Slider = React.forwardRef(function Slider(props, ref) {
  const { marks: marksProp, label, showValue, ...rest } = props
  const value = _nullishCoalesce(props.defaultValue, () => props.value)

  const marks = _optionalChain([
    marksProp,
    'optionalAccess',
    (_2) => _2.map,
    'call',
    (_3) =>
      _3((mark) => {
        if (typeof mark === 'number') return { value: mark, label: undefined }
        return mark
      }),
  ])

  const hasMarkLabel = !!_optionalChain([
    marks,
    'optionalAccess',
    (_4) => _4.some,
    'call',
    (_5) => _5((mark) => mark.label),
  ])

  return (
    <div className="slider-container" ref={ref} {...rest}>
      {label && !showValue && <label className="slider-label">{label}</label>}
      {label && showValue && (
        <div className="d-flex justify-content-between">
          <label className="slider-label">{label}</label>
          <span>{value}</span>
        </div>
      )}

      <div className="slider-track">
        <input
          type="range"
          className="form-range"
          value={value}
          {...rest}
        />
        {hasMarkLabel && (
          <div className="slider-marks">
            {marks.map((mark, index) => {
              const markValue = typeof mark === 'number' ? mark : mark.value
              const label = typeof mark === 'number' ? undefined : mark.label
              return (
                <div key={index} className="slider-mark" style={{ left: `${markValue}%` }}>
                  {label && <span className="slider-mark-label">{label}</span>}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
})

const SliderMarks = React.forwardRef(function SliderMarks(props, ref) {
  const { marks } = props
  if (!_optionalChain([marks, 'optionalAccess', (_6) => _6.length])) return null

  return (
    <div ref={ref} className="slider-marker-group">
      {marks.map((mark, index) => {
        const value = typeof mark === 'number' ? mark : mark.value
        const label = typeof mark === 'number' ? undefined : mark.label
        return (
          <div key={index} className="slider-marker" style={{ left: `${value}%` }}>
            <div className="slider-marker-indicator" />
            {label && <span className="slider-marker-label">{label}</span>}
          </div>
        )
      })}
    </div>
  )
})
