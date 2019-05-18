import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './FilePicker.css'

class FilePicker extends Component {
  handleChange = e => {
    const [file] = e.target.files
    if (!file) return
    if (file.size < 8192) {
      alert('file size is lower than 1kB')
    } else if (file.size >= 838860800) {
      alert('file size is higher than 100 MB')
    } else {
      this.props.onFileChange(file)
      const fileParts = file.name.split('.')
      const ext = fileParts.pop()
      this.props.onFileNameChange(fileParts.join('.'))
      this.props.onFileExtSet(ext)
    }
    // this.file.readAsText(file)
  }

  render () {
    const { onFileNameChange, fileName } = this.props
    return (
      <div>
        <input
          type='file'
          id='siofu_input'
          onChange={this.handleChange}
        />
        <br />
        Name: <input type='text' value={fileName} onChange={e => onFileNameChange(e.target.value)} />
        <br />
      </div>
    )
  }
}

FilePicker.propTypes = {
  onFileChange: PropTypes.func.isRequired,
  onFileNameChange: PropTypes.func.isRequired,
  fileName: PropTypes.string.isRequired
}

export default FilePicker
