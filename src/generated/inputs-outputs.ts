// This file was auto-generated by action-io-generator. Do not edit by hand!
export enum Inputs {
    /**
     * chart-verifier - Certifies a Helm chart by checking some of its characteristics.
     * Required: false
     * Default: None.
     */
    CHART_VERIFIER = "chart-verifier",
    /**
     * crc - CodeReady Containers.
     * Required: false
     * Default: None.
     */
    CRC = "crc",
    /**
     * CRDA - Performs dependency stack scanning.
     * Required: false
     * Default: None.
     */
    CRDA = "crda",
    /**
     * GitHub personal access token.
     * This is required if the "source" input is "github".
     * Required: false
     * Default: "${{ github.token }}"
     */
    GITHUB_PAT = "github_pat",
    /**
     * Helm - The Kubernetes package manager.
     * Required: false
     * Default: None.
     */
    HELM = "helm",
    /**
     * kam - GitOps Application Manager.
     * Required: false
     * Default: None.
     */
    KAM = "kam",
    /**
     * Camel K - Kubernetes serverless integration framework.
     * Required: false
     * Default: None.
     */
    KAMEL = "kamel",
    /**
     * Knative - Deploy and manage serverless workloads.
     * Required: false
     * Default: None.
     */
    KN = "kn",
    /**
     * ko - Build and deploy Go applications on Kubernetes.
     * Required: false
     * Default: None.
     */
    KO = "ko",
    /**
     * kustomize - Customize raw, template-free YAML files for multiple purposes.
     * Required: false
     * Default: None.
     */
    KUSTOMIZE = "kustomize",
    /**
     * oc - The OpenShift Client.
     * Required: false
     * Default: None.
     */
    OC = "oc",
    /**
     * odo - OpenShift Do is for developers writing and deploying applications.
     * Required: false
     * Default: None.
     */
    ODO = "odo",
    /**
     * openshift-install - Install an OpenShift 4 cluster.
     * Required: false
     * Default: None.
     */
    OPENSHIFT_INSTALL = "openshift-install",
    /**
     * operator-sdk - Framework to work with Operators SDK.
     * Required: false
     * Default: None.
     */
    OPERATOR_SDK = "operator-sdk",
    /**
     * opm - Create and maintain catalogs of Operators.
     * Required: false
     * Default: None.
     */
    OPM = "opm",
    /**
     * preflight - Commandline interface for validating if OpenShift operator bundles
     * and containers meet minimum requirements for Red Hat OpenShift Certification.
     * Required: false
     * Default: None.
     */
    PREFLIGHT = "preflight",
    /**
     * s2i - Toolkit and workflow for building reproducible container images from source code.
     * Required: false
     * Default: None.
     */
    S2I = "s2i",
    /**
     * Set it to "true" to skip caching of the downloaded executables.
     * This will also skip fetching previously cached executables.
     * Required: false
     * Default: "false"
     */
    SKIP_CACHE = "skip_cache",
    /**
     * Source from which to download all tools in this step. Can be "github" or "mirror".
     * Required: false
     * Default: "mirror"
     */
    SOURCE = "source",
    /**
     * tkn - The client for interacting with Tekton pipelines.
     * Required: false
     * Default: None.
     */
    TKN = "tkn",
    /**
     * yq - A portable command-line YAML processor.
     * Required: false
     * Default: None.
     */
    YQ = "yq",
}

export enum Outputs {
    /**
     * JSON object describing the versions that were installed.
     * Required: false
     * Default: None.
     */
    INSTALLED = "installed",
}
