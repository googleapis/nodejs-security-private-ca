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

function main(name) {
  // [START privateca_v1_generated_CertificateAuthorityService_GetCertificateTemplate_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The [name][google.cloud.security.privateca.v1.CertificateTemplate.name] of the [CertificateTemplate][google.cloud.security.privateca.v1.CertificateTemplate] to
   *  get.
   */
  // const name = 'abc123'

  // Imports the Privateca library
  const {CertificateAuthorityServiceClient} =
    require('@google-cloud/security-private-ca').v1;

  // Instantiates a client
  const privatecaClient = new CertificateAuthorityServiceClient();

  async function getCertificateTemplate() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await privatecaClient.getCertificateTemplate(request);
    console.log(response);
  }

  getCertificateTemplate();
  // [END privateca_v1_generated_CertificateAuthorityService_GetCertificateTemplate_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
