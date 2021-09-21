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

function main(parent) {
  // [START privateca_list_certificate_templates_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the location associated with the
   *  [CertificateTemplates][google.cloud.security.privateca.v1.CertificateTemplate], in the format
   *  `projects/* /locations/*`.
   */
  // const parent = 'abc123'
  /**
   *  Optional. Limit on the number of
   *  [CertificateTemplates][google.cloud.security.privateca.v1.CertificateTemplate] to include in the response.
   *  Further [CertificateTemplates][google.cloud.security.privateca.v1.CertificateTemplate] can subsequently be
   *  obtained by including the
   *  [ListCertificateTemplatesResponse.next_page_token][google.cloud.security.privateca.v1.ListCertificateTemplatesResponse.next_page_token] in a subsequent
   *  request. If unspecified, the server will pick an appropriate default.
   */
  // const pageSize = 1234
  /**
   *  Optional. Pagination token, returned earlier via
   *  [ListCertificateTemplatesResponse.next_page_token][google.cloud.security.privateca.v1.ListCertificateTemplatesResponse.next_page_token].
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. Only include resources that match the filter in the response.
   */
  // const filter = 'abc123'
  /**
   *  Optional. Specify how the results should be sorted.
   */
  // const orderBy = 'abc123'

  // Imports the Privateca library
  const {CertificateAuthorityServiceClient} = require('@google-cloud/privateca').v1;

  // Instantiates a client
  const privatecaClient = new CertificateAuthorityServiceClient();

  async function listCertificateTemplates() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await privatecaClient.listCertificateTemplatesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  listCertificateTemplates();
  // [END privateca_list_certificate_templates_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
