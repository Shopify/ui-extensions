interface Console {
    /**
     * Writes a message to the console
     * @param msg 
     */
    log(msg: string): void;

    /**
     * Writes an error message to the console
     * @param msg 
     */
    error(msg: string): void;
}
