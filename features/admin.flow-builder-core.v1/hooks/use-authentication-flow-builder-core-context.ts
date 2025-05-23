/**
 * Copyright (c) 2025, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { useContext } from "react";
import AuthenticationFlowBuilderCoreContext, {
    AuthenticationFlowBuilderCoreContextProps
} from "../context/authentication-flow-builder-core-context";

/**
 * Props interface of {@link useAuthenticationFlowBuilderCore}
 */
export type UseAuthenticationFlowBuilderCoreInterface = AuthenticationFlowBuilderCoreContextProps;

/**
 * Hook that provides access to the Authentication Flow Builder Core context.
 *
 * This hook allows components to access authentication flow builder core-related data and functions
 * provided by the {@link AuthenticationFlowBuilderCoreProvider}. It returns an object containing
 * the context values defined in {@link AuthenticationFlowBuilderCoreContext}.
 *
 * @returns An object containing the context values of {@link AuthenticationFlowBuilderCoreContext}.
 *
 * @throws Will throw an error if the hook is used outside of an AuthenticationFlowBuilderCoreProvider.
 *
 * @example
 * ```tsx
 * const { openElementPanel } = useAuthenticationFlowBuilderCoreContext();
 * ```
 */
const useAuthenticationFlowBuilderCore = (): UseAuthenticationFlowBuilderCoreInterface => {
    const context: AuthenticationFlowBuilderCoreContextProps = useContext(AuthenticationFlowBuilderCoreContext);

    if (context === undefined) {
        throw new Error("useAuthenticationFlowBuilderCore must be used within a AuthenticationFlowBuilderCoreProvider");
    }

    return context;
};

export default useAuthenticationFlowBuilderCore;
