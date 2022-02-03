// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(parent, certificate) {
  // [START privateca_v1_generated_CertificateAuthorityService_CreateCertificate_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the CaPool google.cloud.security.privateca.v1.CaPool associated with the Certificate google.cloud.security.privateca.v1.Certificate,
   *  in the format `projects/* /locations/* /caPools/*`.
   */
  // const parent = 'abc123'
  /**
   *  Optional. It must be unique within a location and match the regular
   *  expression `[a-zA-Z0-9_-]{1,63}`. This field is required when using a
   *  CertificateAuthority google.cloud.security.privateca.v1.CertificateAuthority in the Enterprise CertificateAuthority.Tier ,
   *  but is optional and its value is ignored otherwise.
   */
  // const certificateId = 'abc123'
  /**
   *  Required. A Certificate google.cloud.security.privateca.v1.Certificate  with initial field values.
   */
  // const certificate = {}
  /**
   *  Optional. An ID to identify requests. Specify a unique request ID so that if you must
   *  retry your request, the server will know to ignore the request if it has
   *  already been completed. The server will guarantee that for at least 60
   *  minutes since the first request.
   *  For example, consider a situation where you make an initial request and the
   *  request times out. If you make the request again with the same request ID,
   *  the server can check if original operation with the same request ID was
   *  received, and if so, will ignore the second request. This prevents clients
   *  from accidentally creating duplicate commitments.
   *  The request ID must be a valid UUID with the exception that zero UUID is
   *  not supported (00000000-0000-0000-0000-000000000000).
   */
  // const requestId = 'abc123'
  /**
   *  Optional. If this is true, no Certificate google.cloud.security.privateca.v1.Certificate  resource will be persisted regardless
   *  of the CaPool google.cloud.security.privateca.v1.CaPool's tier google.cloud.security.privateca.v1.CaPool.tier, and the returned Certificate google.cloud.security.privateca.v1.Certificate
   *  will not contain the pem_certificate google.cloud.security.privateca.v1.Certificate.pem_certificate  field.
   */
  // const validateOnly = true
  /**
   *  Optional. The resource ID of the CertificateAuthority google.cloud.security.privateca.v1.CertificateAuthority  that should issue the
   *  certificate.  This optional field will ignore the load-balancing scheme of
   *  the Pool and directly issue the certificate from the CA with the specified
   *  ID, contained in the same CaPool google.cloud.security.privateca.v1.CaPool  referenced by `parent`. Per-CA quota
   *  rules apply. If left empty, a CertificateAuthority google.cloud.security.privateca.v1.CertificateAuthority  will be chosen from
   *  the CaPool google.cloud.security.privateca.v1.CaPool  by the service. For example, to issue a Certificate google.cloud.security.privateca.v1.Certificate  from
   *  a Certificate Authority with resource name
   *  "projects/my-project/locations/us-central1/caPools/my-pool/certificateAuthorities/my-ca",
   *  you can set the parent google.cloud.security.privateca.v1.CreateCertificateRequest.parent  to
   *  "projects/my-project/locations/us-central1/caPools/my-pool" and the
   *  issuing_certificate_authority_id google.cloud.security.privateca.v1.CreateCertificateRequest.issuing_certificate_authority_id  to "my-ca".
   */
  // const issuingCertificateAuthorityId = 'abc123'

  // Imports the Privateca library
  const {CertificateAuthorityServiceClient} = require('@google-cloud/security-private-ca').v1;

  // Instantiates a client
  const privatecaClient = new CertificateAuthorityServiceClient();

  async function callCreateCertificate() {
    // Construct request
    const request = {
      parent,
      certificate,
    };

    // Run request
    const response = await privatecaClient.createCertificate(request);
    console.log(response);
  }

  callCreateCertificate();
  // [END privateca_v1_generated_CertificateAuthorityService_CreateCertificate_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));