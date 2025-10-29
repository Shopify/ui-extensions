function Methods() {
  const modalRef = useRef(null);

  return (
    <>
      <s-button
        command="--show"
        commandFor="modal-1"
      >
        Open modal
      </s-button>
      <s-modal
        id="modal-1"
        ref={modalRef}
        heading="Test Modal"
      >
        <s-text>Modal content</s-text>
        <s-button
          onClick={() => {
            modalRef.current.hideOverlay();
          }}
        >
          Close modal
        </s-button>
      </s-modal>
    </>
  );
}
