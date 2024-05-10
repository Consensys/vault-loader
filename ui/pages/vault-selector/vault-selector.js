import React from 'react';
import Button from '../../components/ui/button';

class VaultSelector extends React.Component {
  handleFileSelect = async () => {
    try {
      const [fileHandle] = await window.showOpenFilePicker();
      const file = await fileHandle.getFile();
      const contents = await file.text();

      // Pass both the file contents and the file name to the parent component
      this.props.onFileSelected(contents, file.name);
    } catch (error) {
      console.error('Error selecting file:', error);
      // Handle error (e.g., user cancels the file picker)
    }
  };

  render() {
    return (
      <Button onClick={this.handleFileSelect}>
        {this.props.buttonText}
      </Button>
    );
  }
}

export default VaultSelector;