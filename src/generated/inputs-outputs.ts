
///// This file was auto-generated by action-io-generator. Do not edit by hand!

export enum Inputs {
    /**
     * Helm
     * Required: false
     * Default: None.
     */
    HELM = "helm",
    /**
     * Knative
     * Required: false
     * Default: None.
     */
    KN = "kn",
    /**
     * oc
     * Required: false
     * Default: None.
     */
    OC = "oc",
    /**
     * odo
     * Required: false
     * Default: None.
     */
    ODO = "odo",
    /**
     * Tekton
     * Required: false
     * Default: None.
     */
    TKN = "tkn",
}

export enum Outputs {
    /**
     * JSON object describing the versions that were installed. eg. { kn: "0.17.3", odo: "2.0.3" }
     * Required: false
     * Default: None.
     */
    INSTALLED = "installed",
}
